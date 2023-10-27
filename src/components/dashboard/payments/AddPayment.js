import React, { useState } from 'react'
import { FaCalendar, FaMoneyBillAlt } from 'react-icons/fa'

const AddorEditPurchase = () => {


    const [formData, setFormData] = useState({
        amount: "",
        paymentDate: "",
        paymentAccount: "",
        paymentMethod: "",
        documents: "",

    })
    const [isserror, setIsserror] = useState(false)



    const handleClick = (e) => {
        if (
            formData.amount.length === 0 ||
            formData.paymentDate.length === 0 ||
            formData.paymentAccount.length === 0 ||
            formData.paymentMethod.length === 0) {
            setIsserror(true)
        } else {

            console.log("Handle Save", formData)
        }
    }





    return (
        <div className='w-full md:w-[80%] p-5 bg-gray-100'>
            <h1 className='flex text-xl text-start font-bold mb-5'>Add Payment</h1>
            <div className='grid grid-cols-1 mt-4 gap-2 md:grid-cols-3'>
                <div className='flex  items-start flex-col '>
                    <h1 className='font-bold'>Supplier:</h1>
                    <h1 className=''>Mr Asim</h1>
                    <h1 className='font-bold'>Business:</h1>
                    <p className=''></p>


                </div>
                <div className='flex   items-start flex-col '>
                    <div className='flex'>
                        <p className='font-bold'>Reference No:</p>
                        <p className='mx-1'>#PO2023/0011</p>
                    </div>
                    <div className='flex'>
                        <h1 className='font-bold'>Location:</h1>
                        <p className=''> <span className='font-bold'>EZI POS DEMO</span> Eziline Software House (Pvt.) Ltd</p>

                    </div>

                </div>
                <div className='flex  items-start flex-col '>
                    <div className='flex'>
                        <p className='font-bold'>Total Amount:</p>
                        <p className='mx-1'>Rs. 500.00</p>
                    </div>

                    <div className='flex'>
                        <p className='font-bold'>Payment Note:</p>
                        <p className='mx-1'>---</p>
                    </div>



                </div>
            </div>

            <div className='flex  w-full   flex-col  p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600'>

                <h1 className='flex text-sm text-start font-bold'>Advance Balance: <p className='mx-2'> 0</p></h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Amount:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.amount.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <input value={formData.amount} onChange={(e) => { setFormData({ ...formData, amount: e.target.value }) }} type='number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>

                    </div>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Paid On :*</h1>
                            <h2 className='text-red-400'>{isserror && formData.paymentDate.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaCalendar size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <input value={formData.paymentDate} onChange={(e) => { setFormData({ ...formData, paymentDate: e.target.value }) }} type='Date' placeholder='Select Date Time' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>


                    </div>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Payment method:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.paymentMethod.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <select value={formData.paymentMethod} onChange={(e) => { setFormData({ ...formData, paymentMethod: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
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
                            <h1>Payment Account:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.paymentAccount.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <select value={formData.paymentAccount} onChange={(e) => { setFormData({ ...formData, paymentAccount: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                <option value={""}>None</option>
                                <option value={"Test Account"}>Test Account</option>
                                <option value={"Askari Bank"}>Askari Bank</option>
                                <option value={"asd"}>asd</option>

                            </select>
                        </div>

                    </div>

                </div>
                <div className='w-full flex flex-col mt-3'>
                    <h1 className='flex text-sm  font-bold'>Payment Note:</h1>

                    <textarea rows={4} value={formData.paymentNote} onChange={(e) => { setFormData({ ...formData, paymentNote: e.target.value }) }} className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>
                

            </div>



            <div className='flex items-end justify-end mt-5'>
                <button onClick={handleClick} className='bg-green-500 px-2 py-2 items-center justify-center flex'>Save</button>
            </div>

        </div>
    )
}

export default AddorEditPurchase