import React, { useState } from 'react'
import { FaInfo } from 'react-icons/fa'

const EditShipping = (props) => {




    const [formData, setFormData] = useState({
        shippingDetails: "",
        shippingAddress: "",
        shippingStatus: "",
        shippingCharges:0,
        deliveredTo: "",
        deliveryPerson:"",
    })
    
    const handleClick = (e) => {
        console.log("Handle Update", formData)
    }





    return (
        <div className='w-full px-5 pb-3 bg-white'>
            <h1 className='text-xl text-start font-bold '>Shipping</h1>

            <div className='flex  w-full   flex-col  p-5 mt-5 bg-white '>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Detials:</h1>
                        <textarea rows={4} value={formData.shippingDetails} onChange={(e) => { setFormData({ ...formData, shippingDetails: e.target.value }) }} placeholder='Shipping Details' type='Text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Address:</h1>
                        <textarea rows={4} value={formData.shippingAddress} onChange={(e) => { setFormData({ ...formData, shippingAddress: e.target.value }) }} placeholder='Shipping Details' type='Text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>

                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Delivered to:</h1>
                        <div className='flex'>
                            <FaInfo size={15} className='border-[1px] p-1 w-7 h-8 border-gray-600'/>
                            <input value={formData.shippingCharges} onChange={(e) => { setFormData({ ...formData, shippingCharges: e.target.value }) }} placeholder='Delivered to' type='number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>

                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Status:</h1>

                        <select value={formData.shippingStatus} onChange={(e) => { setFormData({ ...formData, shippingStatus: e.target.value }) }}   className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>Please Selecet</option>
                            <option value={"Ordered"}>Ordered</option>f
                            <option value={"Packed"}>Packed</option>
                            <option value={"Shipped"}>Shipped</option>
                            <option value={"Delivered"}>Delivered</option>
                            <option value={"Cancelled"}>Cancelled</option>

                        </select>

                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Delivered to:</h1>
                        <input value={formData.deliveredTo} onChange={(e) => { setFormData({ ...formData, deliveredTo: e.target.value }) }} placeholder='Delivered to' type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Delivery Person:</h1>

                        <select value={formData.deliveryPerson} onChange={(e) => { setFormData({ ...formData, deliveryPerson: e.target.value }) }} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>Please Selecet</option>
                            <option value={"Demo Admin"}>Demo Admin</option>f
                            <option value={"Ismail Shah"}>Ismail Shah</option>f
                        </select>
                    </div>

                </div>
                


            </div>




            

            

            <div className='flex items-end justify-end mt-5'>
                <button onClick={handleClick} className='bg-green-500 px-2 py-2 items-center justify-center flex'>Updade</button>
            </div>

        </div>
    )
}

export default EditShipping