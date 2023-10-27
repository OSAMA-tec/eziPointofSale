import React, { useState } from 'react'
import moment from 'moment';
import { FaInfoCircle } from 'react-icons/fa';


const CloseRegister = () => {
    const dummyData1 = [
        {
            paymentMethod: "Cash in hand",
            expense: "10,000",
            sell: "0.00"
        },
        {
            paymentMethod: "Cash Payment",
            expense: "10,000",
            sell: "0.00"
        },
        {
            paymentMethod: "Checque Payment",
            expense: "10,000",
            sell: "0.00"
        },
        {
            paymentMethod: "Card Payment",
            expense: "10,000",
            sell: "0.00"
        },
        {
            paymentMethod: "Bank Transferr",
            expense: "10,000",
            sell: "0.00"
        },
        {
            paymentMethod: "Advance Payment",
            expense: "10,000",
            sell: "0.00"
        },
        {
            paymentMethod: "Advance Payment",
            expense: "10,000",
            sell: "0.00"
        }
    ]
    const dummyData2 = [
        {
            name: "Total Sales",
            sell: "0.00"
        },
        {
            name: "Total Refund",
            sell: "0.00"
        },
        {
            name: "Total Payment",
            sell: "0.00"
        },
        {
            name: "Credit Sales",
            sell: "0.00"
        },
        {
            name: "Total Sales",
            sell: "0.00"
        },
        {
            name: "Total Expenses",
            sell: "0.00"
        }
    ]
    const dummyData3 = [
        {
            sku: "Sku",
            product: "Product",
            quantity: 4,
            totalAmount: 125.00
        },
        {
            sku: "Sku1",
            product: "Product1",
            quantity: 4,
            totalAmount: 125.00
        },
        {
            sku: "Sku2",
            product: "Product2",
            quantity: 4,
            totalAmount: 125.00
        },
        {
            sku: "Sku3",
            product: "Product3",
            quantity: 4,
            totalAmount: 125.00
        },
        {
            sku: "Sku4",
            product: "Product4",
            quantity: 4,
            totalAmount: 125.00
        },
        {
            sku: "Sku5",
            product: "Product5",
            quantity: 4,
            totalAmount: 125.00
        }
    ]
    const dummyData4 = [
        {

            brand: "brand",
            quantity: 4,
            totalAmount: 125.00
        },
        {

            brand: "Brand1",
            quantity: 4,
            totalAmount: 125.00
        },
        {

            brand: "Brand2",
            quantity: 4,
            totalAmount: 125.00
        },
        {

            brand: "Brand3",
            quantity: 4,
            totalAmount: 125.00
        },
        {

            brand: "Brand4",
            quantity: 4,
            totalAmount: 125.00
        },
        {

            brand: "Brand5",
            quantity: 4,
            totalAmount: 125.00
        }
    ]

    const [formData, setFormData] = useState({
        totalCash: 0,
        totalCasrSlips: 0,
        totalCheques: 0,
        closingNote: ""
    })
    const [iserror, setIserror] = useState(false)
    const [info, setInfo] = useState(false)
    const [info1, setInfo1] = useState(false)
    const handleClosing = () => {
        if (formData.totalCash.length === 0 ||
            formData.totalCasrSlips.length === 0 ||
            formData.totalCheques.length === 0) {
            setIserror(true)
        } else {
            console.log("closing", formData)
        }
    }
    const findTotal = (data) => {
        let total = 0
        data.map(val => {
            return total += val.totalAmount
        })
        return total
    }
    const findTotalq = (data) => {
        let total = 0
        data.map(val => {
            return total += val.quantity
        })
        return total
    }
    const total = findTotal(dummyData3)
    const total1 = findTotal(dummyData4)

    const totalq = findTotalq(dummyData3)
    const totalq1 = findTotalq(dummyData4)



    const startDate = moment(moment().subtract(29, 'days')).format("DD-MMMM-YYYY")

    const endDate = moment().format("DD-MMMM-YYYY")
    return (
        <div className='flex flex-col bg-white pb-5 '>
            <div className='bg-white w-full px-5 pb-5 '>
                <h1 className='text-xl text-center  font-bold'>Current Register ( {startDate} - {endDate})</h1>
                <div className='flex w-full   mt-5 ' >
                    <table className="table-fixed   mb-2 w-full  px-5 ">
                        <thead>
                            <tr className='h-[50px]'>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">Pyment Method</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">Sell</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">expense</th>
                            </tr>
                        </thead>
                        <tbody >
                            {dummyData1.map((value, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-100" : ""} text-start`}>
                                    <td>
                                        {value.paymentMethod}
                                    </td>
                                    <td >
                                        {value.sell}
                                    </td>
                                    <td >
                                        {value.expense}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
                <div className='bg-black mx-[2.5%] h-[1px] my-5 w-[95%]'></div>
                <div className='flex w-full   mt-5 ' >
                    <table className="table-fixed   mb-2 w-full  px-5 ">

                        <tbody >
                            {dummyData2.map((value, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-100" : ""} text-start`}>
                                    <td>
                                        {value.name}
                                    </td>
                                    <td >
                                        {value.sell}
                                    </td>

                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
                <div className='bg-black mx-[2.5%] h-[1px] my-5 w-[95%]'></div>

                <div className='flex w-full  flex-col mt-5 ' >
                    <h1 className='text-xl text-start font-semibold'>Details of products sold</h1>
                    <table className="table-fixed   mb-2 w-full mt-2 px-5 ">
                        <thead>
                            <tr className='h-[50px]'>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">#</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">SKU</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">Product</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">Quantity</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody >
                            {dummyData3.map((value, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-100" : ""} text-start`}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {value.sku}
                                    </td>
                                    <td >
                                        {value.product}
                                    </td>
                                    <td >
                                        {value.quantity}
                                    </td>
                                    <td >
                                        {value.totalAmount}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='bg-gray-300 py-1 font-bold text-start'>
                                <td>#</td>
                                <td></td>
                                <td></td>
                                <td>{totalq}</td>
                                <td>{total}</td>

                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className='bg-black mx-[2.5%] h-[1px] my-5 w-[95%]'></div>
                <div className='flex w-full  flex-col mt-5 ' >
                    <h1 className='text-xl text-start font-semibold'>Details of products sold (By Brand)</h1>
                    <table className="table-fixed   mb-2 w-full mt-2 px-5 ">
                        <thead>
                            <tr className='h-[50px]'>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">#</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">Brand</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">Quantity</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-start  text-sm ">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody >
                            {dummyData4.map((value, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-100" : ""} text-start`}>
                                    <td>
                                        {index + 1}
                                    </td>

                                    <td >
                                        {value.brand}
                                    </td>
                                    <td >
                                        {value.quantity}
                                    </td>
                                    <td >
                                        {value.totalAmount}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='bg-gray-300 py-1 font-bold text-start'>
                                <td>#</td>
                                <td></td>
                                <td>{totalq1}</td>
                                <td>{total1}</td>

                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className='bg-black mx-[2.5%] h-[1px] my-5 w-[95%]'></div>

                <div className='grid grid-cols-1 md:grid-cols-3 mt-2 gap-5'>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold' >Total Cash*:
                            <h2 className='text-red-400'>{iserror && formData.totalCash.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <input value={formData.totalCash} onChange={(e) => { setFormData({ ...formData, totalCash: e.target.value }) }} type='number' placeholder='Card Number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold relative' >Total Card Slips*:
                            <h2 className='text-red-400'>{iserror && formData.totalCasrSlips.length === 0 ? "Required field" : ""}</h2>
                            <FaInfoCircle onMouseOver={() => { setInfo(true) }} onMouseLeave={() => { setInfo(false) }} size={15} style={{ color: "skyblue" }} className='w-4 h-4  ' />
                            {info &&
                                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-5 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                                    <p className='text-start'>Total number of card payments used in this register</p>

                                </div>
                            }
                        </div>
                        <input value={formData.totalCasrSlips} onChange={(e) => { setFormData({ ...formData, totalCasrSlips: e.target.value }) }} type='text' placeholder='Card holder name' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                    </div>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold relative' >Total cheques:*
                            <h2 className='text-red-400'>{iserror && formData.totalCash.length === 0 ? "Required field" : ""}</h2>
                            <FaInfoCircle onMouseOver={() => { setInfo1(true) }} onMouseLeave={() => { setInfo1(false) }} size={15} style={{ color: "skyblue" }} className='w-4 h-4 ' />
                            {info1 &&
                                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-5 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                                    <p className='text-start'>Total number of cheques used in this register</p>

                                </div>
                            }
                        </div>
                        <input value={formData.totalCheques} onChange={(e) => { setFormData({ ...formData, totalCheques: e.target.value }) }} type='text' placeholder='Select Date Time' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                    </div>


                </div>
                <div className='flex flex-col mt-5'>
                    <h1 className='flex text-xl text-start font-bold' >Cash Denominations</h1>
                    <p className='flex text-start text-gray-500'>Add denominations in Settings -{'>'} Business Settings -{">"} POS -{">"} Cash Denominations</p>

                </div>
                <div className='flex flex-col mt-2 '>
                    <h1 className='flex text-sm text-start font-bold' >Closing Note:</h1>
                    <textarea rows={5} value={formData.closingNote} onChange={(e) => { setFormData({ ...formData, closingNote: e.target.value }) }} type='text' placeholder='Select Date Time' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>

                <div className='flex flex-col'>
                    <div className='flex'>
                        <h1 className='flex text-sm text-start font-bold' >User:</h1>
                        <h1 className='flex text-sm text-start mx-2 text-gray-500' >Demo Admin</h1>

                    </div>
                    <div className='flex'>
                        <h1 className='flex text-sm text-start font-bold' >Email:</h1>
                        <h1 className='flex text-sm text-start mx-2 text-gray-500' > demo@eziline.com</h1>

                    </div>
                    <div className='flex'>
                        <h1 className='flex text-sm text-start font-bold' >Business Location:</h1>
                        <h1 className='flex text-sm text-start mx-2 text-gray-500' >Eziline Software House (Pvt.) Ltd</h1>

                    </div>
                </div>

            </div>
            <div onClick={handleClosing} className='flex items-end justify-end mx-5'>
                <button className='bg-blue-500 text-white flex items-center p-1'> Close Register </button>
            </div>
        </div>
    )
}

export default CloseRegister