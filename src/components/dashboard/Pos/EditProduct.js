import React, { useState } from 'react'

const EditProduct = (props) => {
    const [formData, setFormData] = useState({
        unitPrice:"",
        discountType:"",
        discountAmount:"",
        description: ""

    })
    const handleClick = (e) => {

        console.log("Handle Save", formData)

    }
    return (
        <div className='w-full flex flex-col px-5 pb-5 bg-white'>
            <h1 className='flex text-sm text-gray-600 text-start font-bold' >{props.name} ({props.id})</h1>
            <div className='flex flex-col mt-5'>
                <h1 className='flex text-sm text-start font-bold' >Unit Price</h1>
                <input value={formData.unitPrice} onChange={(e) => { setFormData({ ...formData, unitPrice: e.target.value }) }} type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex flex-col mt-5 w-full mx-2'>
                    <h1 className='flex  text-sm text-start font-bold' >Discount Type</h1>
                    <select value={formData.discountType} onChange={(e) => { setFormData({ ...formData, discountType: e.target.value }) }} type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' >
                        <option value={"Fixed"}>Fixed</option>
                        <option value={"Percentage"}>Percentage</option>

                    </select>
                </div>
                <div className='flex w-full flex-col mt-5 mx-2'>
                    <h1 className='flex text-sm text-start font-bold' >Discount Amountt</h1>
                    <input value={formData.discountAmount} onChange={(e) => { setFormData({ ...formData, discountAmount: e.target.value }) }} type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>
            </div>
            <div className='flex flex-col mt-2'>
                <h1 className='flex text-sm text-start font-bold' >Description</h1>
                <textarea rows={5} value={formData.description} onChange={(e) => { setFormData({ ...formData, description: e.target.value }) }} type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                <h1 className='flex text-sm text-start text-gray-500' >Add product IMEI, Serial number or other informations here</h1>
            </div>


            <div className='flex items-end justify-end  mt-5 mx-5'>
                <button onClick={handleClick} className='bg-green-500 px-2 py-2 rounded-md items-center justify-center flex'>Save</button>
            </div>
        </div>
    )
}

export default EditProduct