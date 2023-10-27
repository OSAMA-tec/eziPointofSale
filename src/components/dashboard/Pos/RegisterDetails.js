import React, { useRef } from 'react'
import moment from 'moment';
import { useReactToPrint } from 'react-to-print';
import { FaPrint } from 'react-icons/fa';


const RegisterDetails = () => {
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
    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: "SellReport",
        copyStyles: true,
    });
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
            <div ref={printRef} className='bg-white w-full px-5 pb-5 '>
                <h1 className='text-xl text-center  font-bold'>Register Detials ( {startDate} - {endDate})</h1>
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

            </div>
            <div onClick={handlePrint} className='flex items-end justify-end mx-5'>
                <button className='bg-green-500 text-white flex items-center p-1'><FaPrint size={15} className='mx-2' /> Print </button>
            </div>
        </div>
    )
}

export default RegisterDetails