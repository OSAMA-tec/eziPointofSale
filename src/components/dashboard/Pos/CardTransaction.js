import React, { useState } from 'react'

const CardTransaction = () => {
    const [formData, setFormData] = useState({
        
        cardNumber:"",
        holderName:"",
        transactionNumber:"",
        cardType:"",
        month:"",
        year:"",
        securityCode:""
    })
    const handleClick = (e) => {

            console.log("Handle Save", formData)
     
    }
    return (
        <div className='w-full p-5 bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-2 gap-5'>
                <div className='flex flex-col '>
                    <h1 className='flex text-sm text-start font-bold' >Card Number:</h1>
                    <input value={formData.cardNumber} onChange={(e) => { setFormData({ ...formData, cardNumber: e.target.value }) }} type='number' placeholder='Card Number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='flex text-sm text-start font-bold' >Card holder name:</h1>
                    <input value={formData.holderName} onChange={(e) => { setFormData({ ...formData, holderName: e.target.value }) }} type='text' placeholder='Card holder name' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='flex text-sm text-start font-bold' >Card Transaction Number:</h1>
                    <input value={formData.transactionNumber} onChange={(e) => { setFormData({ ...formData, transactionNumber: e.target.value }) }} type='text' placeholder='Select Date Time' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>


            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 mt-2 gap-5'>
                <div className='flex flex-col '>
                    <h1 className='flex text-sm text-start font-bold' >Card Type:</h1>
                    <select value={formData.cardType} onChange={(e) => { setFormData({ ...formData, cardType: e.target.value }) }} type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' >
                        <option value={"Credit Card"}>Credit Card</option>
                        <option value={"Debit Card"}>Debit Card</option>
                        <option value={"Visa"}>Visa</option>
                        <option value={"Master Card"}>Master Card</option>
                    </select>
                </div>
                <div className='flex flex-col '>
                    <h1 className='flex text-sm text-start font-bold' >Month:</h1>
                    <input value={formData.month} onChange={(e) => { setFormData({ ...formData, month: e.target.value }) }} type='text' placeholder='Month' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='flex text-sm text-start font-bold' >Year:</h1>
                    <input value={formData.year} onChange={(e) => { setFormData({ ...formData, year: e.target.value }) }} type='text' placeholder='Year' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>
                <div className='flex flex-col '>
                    <h1 className='flex text-sm text-start font-bold' >Security Code:</h1>
                    <input value={formData.securityCode} onChange={(e) => { setFormData({ ...formData, securityCode: e.target.value }) }} type='number' placeholder='Security Code' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>

            </div>
            <div className='flex items-end justify-end  mt-5 mx-10'>
                <button onClick={handleClick} className='bg-green-500 px-2 py-2 rounded-md items-center justify-center flex'>Finalize Payment</button>
            </div>
        </div>
    )
}

export default CardTransaction