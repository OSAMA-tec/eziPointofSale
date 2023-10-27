import React, { useRef, useState } from 'react'
import { FaCalendar, FaMapMarker, FaPrint } from 'react-icons/fa'
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { DefinedRange } from 'react-date-range';
import { useReactToPrint } from 'react-to-print';


const PurchaseSaleRpt = () => {
    const [summary] = useState([
        {
            heading: "Total Purchase",
            amont: 0.00
        },
        {
            heading: "Purchase Including tax:",
            amont: 0.00
        },
        {
            heading: "Total Purchase Return Including Tax:",
            amont: 0.00
        },
        {
            heading: "Purchase Due:",
            amont: 0.00
        }
    ])
    const [summary1] = useState([
        {
            heading: "Total Sale:",
            amont: 0.00
        },
        {
            heading: "Sale Including tax:",
            amont: 0.00
        },
        {
            heading: "Total Sell Return Including Tax:",
            amont: 0.00
        }, {
            heading: "Sale Due",
            amont: 0.00
        }
    ])
    const [open1, setOpen1] = useState(false)
    const [location, setLocation] = useState('second')
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection"
        }
    ])
    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: "SellReport",
        copyStyles: true,
    });
    

    return (
        <div>
            <div className='flex flex-col  bg-gray-100 px-3 pb-3 min-h-screen'>
                <div className='flex'>
                    <h1 className='font-bold text-xl text-start flex'>Purchase & Sale Report </h1>
                    <p className='text-gray-500 text-sm mx-3 mt-1'>Purchase & sale details for the selected date range</p>

                </div>


                <div className='flex justify-between md:justify-end mt-5 md:items-end'>

                    <div className=' bg-blue-600 text-white flex items-center relative py-1'>
                        <FaCalendar size={15} className='mx-2' />
                        <input
                            value={`${format(range[0].startDate, "MM/dd/yyyy")} - ${format(range[0].endDate, "MM/dd/yyyy")}`}
                            readOnly
                            className='focus:outline-none bg-blue-600 '
                            onClick={() => { setOpen1(!open1) }} />
                        {open1 &&
                            <div onClick={() => { setOpen1(!open1) }} className='absolute top-10 left-4 text-black z-10'>
                                <DefinedRange
                                    onChange={item => setRange([item.selection])}
                                    ranges={range}

                                />
                            </div>

                        }
                    </div>
                    <div className='flex mx-2'>
                        <FaMapMarker size={15} className='bg-blue-600 text-white p-1 w-7 h-7' />
                        <select value={location} onChange={(e) => { setLocation(e.target.value) }} className='w-full border-[1px] border-gray-500 ' >
                            <option value={"All Locations"}>All Locations</option>
                            <option value={"Ezline Software Houw (Pvt.) Ltd (BL0001)"}>Ezline Software Houw (Pvt.) Ltd (BL0001)</option>

                        </select>
                    </div>

                </div>
                <div ref={printRef}>
                    <h1 className='text-xl font-bold flex items-center justify-center '>Purchase & Sale Report</h1>


                    <div className='grid grid-cols-2 gap-4 bg-gray-100 mt-3'>
                        <div className='flex flex-col bg-white p-4 w-full'>
                            <h1 className='text-xl text-start font-bold'>Purchases:</h1>
                            <table className='table-auto mt-3 w-full'>
                                {summary.map((val, index) => {
                                    return <tr className={`${index % 2 === 0 ? "bg-gray-100" : ""} my-2`}>
                                        <th className='flex text-start relative'>
                                            {val.heading}
                                            
                                        </th>
                                        <td>
                                            Rs {val.amont}
                                        </td>

                                    </tr>
                                })}
                            </table>

                        </div>
                        <div className='flex flex-col bg-white p-4 w-full'>
                            <h1 className='text-xl text-start font-bold'>Sale:</h1>

                            <table className='table-auto mt-3 w-full'>
                                {summary1.map((val, index) => {
                                    return <tr className={`${index % 2 === 0 ? "bg-gray-100" : ""} my-2`}>
                                        <th className='flex flex-col text-start'>
                                            {val.heading}
                                        </th>
                                        <td>
                                            Rs {val.amont}
                                        </td>

                                    </tr>
                                })}
                            </table>
                        </div>
                    </div>

                    <div className='flex flex-col p-5 mt-5 bg-white'>
                        <h1 className='text-3xl text-gray-500 text-start'>Overall ((Sale - Sell Return) - (Purchase - Purchase Return) )</h1>
                        <h1 className='text-2xl text-gray-500 text-start'>Sale - Purchase:<span className='mx-2 text-green-400'>Rs. 0.00</span></h1>
                        <h1 className='text-2xl text-gray-500 text-start'>Due Ammount:<span className='mx-2 text-green-400'>Rs. 0.00</span></h1>

                    </div>

                </div>

                <div className='flex items-end justify-end mx-3 mt-3'>
                    <div className='flex bg-blue-500 text-white cursor-pointer px-2 py-1' onClick={() => { handlePrint() }}>
                        <FaPrint size={15} />
                        <h1 className='text-sm mx-1'>Print</h1>
                    </div>
                </div>

            </div>







        </div>
    )
}

export default PurchaseSaleRpt