import React, { useState, useEffect } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import axios from 'axios';

const AddorEditUnits = (props) => {
    const _id = props.id

    const [isserror, setIsserror] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        shortName: "",
        allowDecimal: "",
        multipleOfOtherUnits: false
    })
    const [info, setInfo] = useState(false)

    const [unitsData, setUnitsData] = useState([]);

    const fetchUnits = async () => {
    
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:8000/admin/units`, {
                    headers: {
                        'Authorization': token
                    }
                });
                // console.log(response)
                setUnitsData(response.data);
            } catch (error) {
                console.error('Error fetching units:', error);
            }
    };

    const fetchUnitsById = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/units/${_id}`);
            // console.log(response)
            setFormData(response.data);

        } catch (error) {
            console.error('Error fetching Selling price Group:', error);
        }
    };
    useEffect(() => {
        // Make an API call to fetch SPG's records
        if (_id) {
            fetchUnits()
            fetchUnitsById();
        }
        else {
            fetchUnits()
        }
        

    }, []);

    const addUnit = async () => {

        try {
            // const token = localStorage.getItem('token');
            // console.log(formData)
            const response = await axios.post(`http://localhost:8000/admin/units`, formData);
            // console.log(response)
            if (response.status === 201) {
            console.log("Success")
            }
        } catch (error) {
            console.error('Error Adding Unit:', error);
        }
    };

    const addUnitById = async () => {

        try {
            // const token = localStorage.getItem('token');
            // console.log(formData)
            const response = await axios.put(`http://localhost:8000/admin/units/${_id}`, formData);
            console.log(response)

        } catch (error) {
            console.error('Error Adding Units:', error);
        }
    };
    const handleSaveorEdit = () => {
        if (formData.name.length === 0 || formData.shortName.length === 0 || formData.allowDecimal.length === 0) {
            setIsserror(true)
        } else if (props.id) {
            addUnitById()
            console.log("Handle Update", formData)
        } else {
            addUnit()
            console.log("Handle Save", formData)

        }
    }
    return (
        <div className='flex flex-col w-full px-5 bg-white '>
            <div className='flex'>
                <h1 className='text-2xl font-semibold text-start '>{props.id ? "Edit Units" : "Add Units"}</h1>
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Name:*
                    <span className='text-red-400'>{isserror && formData.name.length === 0 ? "Required field" : ""}</span>

                </h1>
                <input type='text' value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} placeholder='Unit Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Short Name:*
                    <span className='text-red-400'>{isserror && formData.shortName.length === 0 ? "Required field" : ""}</span>

                </h1>
                <input type='text' value={formData.shortName} onChange={(e) => { setFormData({ ...formData, shortName: e.target.value }) }} placeholder='Unit Short Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Allow  decimal:*
                    <span className='text-red-400'>{isserror && formData.allowDecimal.length === 0 ? "Required field" : ""}</span>

                </h1>
                <select type='text' value={formData.allowDecimal} onChange={(e) => { setFormData({ ...formData, allowDecimal: e.target.value }) }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' >
                    <option value={""}>Please Select</option>
                    <option value={"true"}>Yes</option>
                    <option value={"false"}>No</option>

                </select>
            </div>
            <div className='flex mt-5 '>
                <input type='checkbox' value={formData.multipleOfOtherUnits} onChange={(e) => { setFormData({ ...formData, multipleOfOtherUnits: e.target.value }) }} className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                <div className='flex mx-2 justify-center relative'>
                    <h1 className=' font-semibold'>Add as multiple of other unit :</h1>
                    <FaInfoCircle onMouseOver={() => { setInfo(true) }} onMouseLeave={() => { setInfo(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                    {info &&
                        <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute left-14 top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                            <p className='text-start mt-2 text-gray-600'>Define the units as the multiple of other units</p>
                            <p className='text-start mt-2 font-bold text-gray-600'>Ex: 1 dozen = 12 pieces</p>

                        </div>
                    }
                </div>
            </div>
            {
                <div>
                    <div className='grid grid-cols-4 gap-2 mt-5'>
                        <div className='flex'>
                            <h1 className='font-bold '>1 Box(10P)</h1>
                            <h1 className='font-bold mx-5'> = </h1>
                        </div>

                        <input type='text' className='border-[1px] border-gray-400 px-2 py-1 col-span-2 focus:outline-none' />
                        <select  className='border-[1px] border-gray-400 px-2 py-1 focus:outline-none mx-2' >
                            <option value={""}>Select Base Unit</option>
                            {unitsData.map((unit) => (
                                <option key={unit._id} value={unit._id}>
                                    {unit.name}
                                </option>
                            ))}

                        </select>

                    </div>
                    <div className='flex mt-2'>
                        <h1 className='text-xs text-gray-600 '>*Editing this value will change the purchase & sales stocks accordingly</h1>
                    </div>
                </div>
            }




            <div className='justify-end items-end flex py-5'>
                <button onClick={handleSaveorEdit} className='bg-green-400 text-white'>
                    <h1 className=' font-bold text-start px-3 py-2'>{props.id ? "Update" : "Save"}</h1>

                </button>
            </div>
        </div>
    )
}

export default AddorEditUnits