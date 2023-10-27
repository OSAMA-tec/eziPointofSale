import React, { useState, useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const AddorEditVariations = (props) => {
    const Navigate = useNavigate();

    const _id = props.id
    const [isserror, setIsserror] = useState(false)
    const [variationName, setVariationName] = useState('')

    const [variationValues, setVariationValues] = useState([{ variation: "" }])
    //   const [formData, setFormData] = useState({
    //     variationName:variationName,
    //     variationValues:variationValues
    //   })
    const formData = {
        variationName: variationName,
        variationValues: variationValues,
    };
    const hadleChange = (e, index) => {
        let temp = variationValues.map(i => i);
        temp[index] = e.target.value;
        setVariationValues(temp);
    };
    const handleDelete = (e, index) => {
        e.preventDefault()
        const delVal = [...variationValues]
        delVal.splice(index, 1)
        setVariationValues(delVal)
    }
    const handleClick = (e) => {
        e.preventDefault()
        setVariationValues([...variationValues, { variation: "" }])
    }




    const fetchVariationById = async () => {

        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/variations/${_id}`, {
                headers: {
                    'Authorization': token
                }
            });
            // console.log(response)
            setVariationName(response.data.variationName);
            setVariationValues(response.data.variationValues);

        } catch (error) {
            console.error('Error fetching variation:', error);
        }
    };
    useEffect(() => {
        // Make an API call to fetch user's variation records
        if (_id) {

            fetchVariationById();
        }

    }, []);

    const addVariation = async () => {

        try {
            // const token = localStorage.getItem('token');
            // console.log(formData)
            const response = await axios.post(`http://localhost:8000/admin/variations`, formData);
            console.log(response)
            if (response.status === 201) {
                Navigate("/home/variation-templates");
            }
        } catch (error) {
            console.error('Error Adding User:', error);
        }
    };

    const addVariationById = async () => {

        try {
            // const token = localStorage.getItem('token');
            console.log(formData)
            const response = await axios.put(`http://localhost:8000/admin/variations/${_id}`, formData);
            console.log(response)

        } catch (error) {
            console.error('Error Adding Variation:', error);
        }
    };


    const handleSaveorEdit = () => {
        if (variationName.length === 0 || variationValues.length === 0) {
            setIsserror(true)
        } else if (props.id) {
            addVariationById()
            console.log("Handle Update", { variationName, variationValues })
        } else {
            addVariation()
            console.log("Handle Save", { variationName, variationValues })

        }
    }

    return (
        <div className='flex flex-col w-full bg-white '>
            <div className='mx-5 mt-5 flex'>
                <h1 className='text-2xl font-bold text-start '>{props.id ? "Edit Variations" : "Add Variations"}</h1>
            </div>
            <div className=' w-full  shadow-md my-5 p-5 shadow-gray-400 min-h-[200px] border-t-[2px] border-blue-600 rounded-xl'>
                <div className='flex flex-col'>
                    <h1 className='flex text-start font-bold'>
                        Variation Name:*
                        <span className='text-red-400'>{isserror && variationName.length === 0 ? "Required field" : ""}</span>

                    </h1>
                    <input type='text' value={variationName} onChange={(e) => { setVariationName(e.target.value) }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                </div>
                <div className='flex '>
                    <div className='flex flex-col w-3/4'>
                        <h1 className='flex text-start font-bold'>
                            Variation Values:*
                            <span className='text-red-400'>{isserror && variationValues[0].variation.length === 0 ? "Required field" : ""}</span>

                        </h1>
                        {variationValues.map((values, index) => {
                            return <div key={index} className='flex  mt-2'>


                                <input type='text' value={values.variation} onChange={(e) => hadleChange(e, index)} placeholder='Variation Value' className='w-3/4 border-[1px] px-1 py-1 border-gray-400 focus:outline-none' />
                                <button className={`mt-2  bg-red-500 mx-3 ${index === 0 ? "hidden" : "block"} text-white flex items-center justify-center text-2xl w-7 h-7`} onClick={(e) => handleDelete(e, index)}>-</button>

                            </div>

                        })}
                    </div>
                    <button onClick={(e) => { handleClick(e) }} className='flex  items-center justify-center mx-5 font-semibold w-7 h-7 rounded-sm mt-8 text-white bg-blue-500'>
                        <AiOutlinePlus size={15} />

                    </button>
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

export default AddorEditVariations