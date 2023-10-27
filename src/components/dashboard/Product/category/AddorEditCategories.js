import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AddorEditCategories = (props) => {
    const _id = props.id

    const [isserror, setIsserror] = useState(false)
    const [taxonomy, setTaxonomy] = useState(false)

    const [formData, setFormData] = useState({
        categoryName: "",
        description: "",
        categoryCode: "",
        parentCategory: ""

    })

    const [categoryData, setCategorysData] = useState([]);

    const fetchCategory = async () => {

        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/categories`, {
                headers: {
                    'Authorization': token
                }
            });
            // console.log(response)
            setCategorysData(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchCategoryById = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/categories/${_id}`);
            // console.log(response)
            setFormData(response.data);

        } catch (error) {
            console.error('Error fetching Selling price Group:', error);
        }
    };
    useEffect(() => {
        // Make an API call to fetch SPG's records
        if (_id) {
            fetchCategory()
            fetchCategoryById();
        }
        else {
            fetchCategory()
        }


    }, []);

    const addCategory = async () => {

        try {
            // const token = localStorage.getItem('token');
            // console.log(formData)
            const response = await axios.post(`http://localhost:8000/admin/categories`, formData);
            // console.log(response)
            if (response.status === 201) {
                console.log("Success")
            }
        } catch (error) {
            console.error('Error Adding Unit:', error);
        }
    };

    const addCategoryById = async () => {

        try {
            // const token = localStorage.getItem('token');
            // console.log(formData)
            const response = await axios.put(`http://localhost:8000/admin/categories/${_id}`, formData);
            console.log(response)

        } catch (error) {
            console.error('Error Adding Units:', error);
        }
    };


    const handleSaveorEdit = () => {
        if (formData.categoryName.length === 0) {
            setIsserror(true)
        } else if (props.id) {
            addCategoryById()
            console.log("Handle Update", formData)
        } else {
            addCategory()
            console.log("Handle Save", formData)

        }
    }

    return (
        <div className='flex flex-col w-full px-5 bg-white '>
            <div className='flex'>
                <h1 className='text-2xl font-semibold text-start '>{props.id ? "Edit Categories" : "Add Categories"}</h1>
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Category Name:*
                    <span className='text-red-400'>{isserror && formData.categoryName.length === 0 ? "Required field" : ""}</span>

                </h1>
                <input type='text' value={formData.categoryName} onChange={(e) => { setFormData({ ...formData, categoryName: e.target.value }) }} placeholder='Category Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Category Code:

                </h1>
                <input type='text' value={formData.categoryCode} onChange={(e) => { setFormData({ ...formData, categoryCode: e.target.value }) }} placeholder='Category Code' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                <h1 className='text-start flex text-gray-500'>Category code is same as <span className='font-bold'>HSN code</span></h1>
            </div>
            <div className='flex flex-col mt-3'>
                <h1 className='flex text-start font-bold'>
                    Description:

                </h1>
                <textarea rows={5} type='text' value={formData.description} onChange={(e) => { setFormData({ ...formData, description: e.target.value }) }} placeholder='Category description' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
            </div>
            <div className='flex mt-3'>
                <input type='checkbox' value={taxonomy} onChange={(e) => { setTaxonomy(!taxonomy); console.log(taxonomy); }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none' />
                <h1 className='flex mx-2 text-start '>
                    Add as sub taxonomy

                </h1>
            </div>
            {taxonomy ?
                <div className='flex flex-col mt-3'>
                    <h1 className='flex text-start font-bold'>
                        Select Parent Category

                    </h1>
                    <select type='text' value={formData.parentCategory} onChange={(e) => { setFormData({ ...formData, parentCategory: e.target.value }) }} placeholder='Variation Name' className='border-[1px] px-2 py-1 border-gray-400 focus:outline-none'>
                        {categoryData.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.categoryName}
                            </option>
                        ))}

                    </select>
                </div>
                : ""}


            <div className='justify-end items-end flex py-5'>
                <button onClick={handleSaveorEdit} className='bg-green-400 text-white'>
                    <h1 className=' font-bold text-start px-3 py-2'>{props.id ? "Update" : "Save"}</h1>

                </button>
            </div>
        </div>
    )
}

export default AddorEditCategories