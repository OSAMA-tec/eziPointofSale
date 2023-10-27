import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AddorEditWarranties = (props) => {
    const _id = props.id

    const [isserror, setIsserror] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        duration: "",
        durationType: ""

    })

    const fetchWarrantyById = async () => {

        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/warranties/${_id}, {
                headers: {
                    'Authorization': token
                }
            }`);
            // console.log(response)
            setFormData(response.data);

        } catch (error) {
            console.error('Error fetching Warranty:', error);
        }
    };
    useEffect(() => {
        // Make an API call to fetch SPG's records
        if (_id) {

            fetchWarrantyById();
        }

    }, []);

    const addWarranty = async () => {

        try {
            // const token = localStorage.getItem('token');
            // console.log(formData)
            const response = await axios.post(`http://localhost:8000/admin/warranties`, formData);
            // console.log(response)
            if (response.status === 201) {
            console.log("Success")
        }
        } catch (error) {
            console.error('Error Adding Warranty:', error);
        }
    };

    const addWarrantyById = async () => {

        try {
            // const token = localStorage.getItem('token');
            // console.log(formData)
            const response = await axios.put(`http://localhost:8000/admin/warranties/${_id}`, formData);
            console.log(response)

        } catch (error) {
            console.error('Error Adding Warranty:', error);
        }
    };


    const handleSaveorEdit = () => {
        if (formData.name.length === 0) {
            setIsserror(true)
        } else if (props.id) {
            addWarrantyById()
            console.log("Handle Update", formData)
        } else {
            addWarranty()
            console.log("Handle Save", formData)

        }
    }

    return (
        <div className='flex flex-col w-full px-5 bg-white '>
            <div className='flex'>
                <h1 className='text-2xl font-semibold text-start '>{props.id ? "Edit Warranties" : "Add Warranties"}</h1>
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Name:*
                    <span className='text-red-400'>{isserror && formData.name.length === 0 ? "Required field" : ""}</span>

                </h1>
                <input type='text' value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Description:

                </h1>
                <textarea rows={5} type='text' value={formData.description} onChange={(e) => { setFormData({ ...formData, description: e.target.value }) }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Duration:

                </h1>
                <div className='flex'>
                    <input type='text' value={formData.duration} onChange={(e) => { setFormData({ ...formData, duration: e.target.value }) }} placeholder='Description' className='border-[1px] w-1/2 px-2 py-1 border-gray-400 focus:outline-none' />
                    <select type='text' value={formData.durationType} onChange={(e) => { setFormData({ ...formData, durationType: e.target.value }) }} className='border-[1px] px-2 py-1 w-1/2 border-gray-400 focus:outline-none' >
                        <option value={""}>Plesas Select</option>
                        <option value={"Days"}>Days</option>
                        <option value={"Months"}>Months</option>
                        <option value={"Years"}>Years</option>

                    </select>
                </div>


            </div>

            <div className='justify-end items-end flex py-5'>
                <button onClick={handleSaveorEdit} className='bg-green-400 text-white'>
                    <h1 className=' font-bold text-start px-3 py-2'>{props.id ? "Update" : "Save"}</h1>

                </button>
            </div>
        </div>
    )
}

export default AddorEditWarranties