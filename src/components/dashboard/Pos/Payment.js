import React, { useState } from 'react'
import { FaMoneyBillAlt, FaTimes } from 'react-icons/fa'

const Payment = () => {
    const [formData, setFormData] = useState({
        multiplePaymet: [{
            amount: "",
            paymentMethod: "",
            paymentAccount: "",
            paymentNote: ""
        }],
        cardNumber:"",
        holderName:"",
        transactionNumber:"",
        cardType:"",
        month:"",
        year:"",
        securityCode:""
    })
    const handleChange = (e, index) => {
        const updatedData = formData.multiplePaymet.map((item, ind) => {
            if (ind === index) {
                // Create a new copy of the item with the modified subItem
                return {
                    ...item, [e.target.name]: e.target.value
                };
            }
            return item;
        });
        setFormData({ ...formData, multiplePaymet: updatedData });
    }

    const deleteByIndex = (index) => {
        let newArray = [...formData.multiplePaymet]
        newArray.splice(index, 1)
        setFormData({ ...formData, multiplePaymet: newArray })
    }

    const addRow = ()=>{
        let data = formData.multiplePaymet
        data = [...data, {amount: "",
        paymentMethod: "",
        paymentAccount: "",
        paymentNote: ""}]
        setFormData({...formData, multiplePaymet: data})
    }
    const [isserror, setIsserror] = useState(false)
    const handleClick = (e) => {

        if (formData.amount.length === 0 ||
            formData.paymentDate.length === 0 ||
            formData.paymentMethod.length === 0) {
            setIsserror(true)
            console.log(isserror)
        } else {
            console.log("Handle Save", formData)
        }
    }

    return (
        <div className='bg-white w-full flex flex-col px-4'>
            <h1 className='flex text-sm text-start font-bold '>Payment</h1>
            <h1 className='flex text-sm text-start font-bold'>Advance Balance: <p className='mx-2'> 0</p></h1>
            <div className='flex min-h-[400px]'>
                <div className='flex  w-2/3   flex-col  p-2  '>
                    {formData.multiplePaymet.map((val, index) => {
                        return <div className='bg-gray-200 p-4 flex flex-col rounded-md mt-3'>
                            {index !== 0 &&
                                <div className='flex items-end cursor-pointer justify-end'>
                                    <FaTimes size={15} onClick={(e)=>{deleteByIndex(index)}}/>
                                </div>
                            }
                            <div className='grid grid-cols-1 md:grid-cols-3 mt-2 gap-5'>
                                <div className='flex flex-col '>
                                    <div className='flex text-sm text-start font-bold'>
                                        <h1>Amount:*</h1>
                                        <h2 className='text-red-400'>{isserror && val.amount.length === 0 ? "Required field" : ""}</h2>

                                    </div>
                                    <div className='flex'>
                                        < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                                        <input name='amount' value={val.amount} onChange={(e) => { handleChange(e, index) }} type='number' placeholder='Amount' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                    </div>

                                </div>

                                <div className='flex flex-col '>
                                    <div className='flex text-sm text-start font-bold'>
                                        <h1>Payment method:*</h1>
                                        <h2 className='text-red-400'>{isserror && val.paymentMethod === 0 ? "Required field" : ""}</h2>

                                    </div>
                                    <div className='flex'>
                                        < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                        <select name='paymentMethod' value={val.paymentMethod} onChange={(e) => { handleChange(e, index) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                            <option value={""}>Please Selecet</option>
                                            <option value={"Advance"}>Advance</option>
                                            <option value={"Cash"}>Cash</option>
                                            <option value={"Card"}>Card</option>
                                            <option value={"Checque"}>Checque</option>
                                            <option value={"Bank Transfer"}>Bank Transfer</option>
                                            <option value={"Other"}>Other</option>
                                            <option value={"Easypais"}>Easypais</option>
                                            <option value={"Custom Payment 6"}>Custom Payment 6</option>

                                        </select>
                                    </div>

                                </div>
                                <div className='flex flex-col '>
                                    <div className='flex text-sm text-start font-bold'>
                                        <h1>Payment Account:</h1>

                                    </div>
                                    <div className='flex'>
                                        < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                        <select name='paymentAccount' value={val.paymentAccount} onChange={(e) => { handleChange(e, index) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                            <option value={""}>None</option>
                                            <option value={"Test Account"}>Test Account</option>
                                            <option value={"Askari Bank"}>Askari Bank</option>
                                            <option value={"asd"}>asd</option>

                                        </select>
                                    </div>

                                </div>


                            </div>
                            {index === 0 &&
                                <>
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
                                </>
                            }

                            <div className='w-full flex flex-col mt-3'>
                                <h1 className='flex text-sm  font-bold'>Payment Note:</h1>

                                <textarea name='paymentNote' rows={4} value={val.paymentNote} onChange={(e) => { handleChange(e, index) }} className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                        </div>
                    })}
                    <div onClick={addRow} className='flex mt-3 items-center justify-center bg-blue-600 py-2 rounded-md text-white'>
                        Add Payment Row
                    </div>
                </div>
                <div className='flex flex-col w-1/3'>
                    <div className='flex flex-col mx-10 rounded-md bg-orange-500 p-5 text-white'>
                        <div className='flex flex-col items-center justify-center p-2'>
                            <h1 className='flex text-xl text-start font-bold '>Total Items:</h1>
                            <h1 className='flex text-2xl text-start font-bold '>0.00</h1>
                        </div>
                        <div className='w-full h-[1px] bg-black my-2'></div>
                        <div className='flex flex-col items-center justify-center p-2'>
                            <h1 className='flex text-xl text-start font-bold '>Total Payable:</h1>
                            <h1 className='flex text-2xl text-start font-bold '>0.00</h1>
                        </div>
                        <div className='w-full h-[1px] bg-black my-2'></div>
                        <div className='flex flex-col items-center justify-center p-2'>
                            <h1 className='flex text-xl text-start font-bold '>Total Items</h1>
                            <h1 className='flex text-2xl text-start font-bold '>0.00</h1>
                        </div>
                        <div className='w-full h-[1px] bg-black my-2'></div>
                        <div className='flex flex-col items-center justify-center p-2'>
                            <h1 className='flex text-xl text-start font-bold '>Total Items</h1>
                            <h1 className='flex text-2xl text-start font-bold '>0.00</h1>
                        </div>
                        <div className='w-full h-[1px] bg-black my-2'></div>
                        <div className='flex flex-col items-center justify-center p-2'>
                            <h1 className='flex text-xl text-start font-bold '>Total Items</h1>
                            <h1 className='flex text-2xl text-start font-bold '>0.00</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex items-end justify-end  mt-5 mx-10'>
                <button onClick={handleClick} className='bg-green-500 px-2 py-2 rounded-md items-center justify-center flex'>Finalize Payment</button>
            </div>
        </div>
    )
}

export default Payment