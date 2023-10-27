import React, { useRef, useState } from 'react'
import { FaCalendar, FaCubes, FaFileAlt, FaMapMarker, FaPrint, FaTags, FaUser } from 'react-icons/fa'
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { DefinedRange } from 'react-date-range';
import { useReactToPrint } from 'react-to-print';
import { Outlet, NavLink } from 'react-router-dom'


const ProfitLossRpt = () => {
    const [summary] = useState([
        {
            heading: "Opening Stock",
            subheading: "(By Purchase Price)",
            amont: 0.00
        }, {
            heading: "Opening Stock",
            subheading: "(By Sale Price)",
            amont: 0.00
        }, {
            heading: "Total Purchase",
            subheading: "(Exc. Tax, Discount)",
            amont: 0.00
        }, {
            heading: "Total Stock Adjusment",
            amont: 0.00
        }, {
            heading: "Total Expenses",
            amont: 0.00
        }, {
            heading: "Total Purchase Shipping Charge",
            amont: 0.00
        }, {
            heading: "Purchase additional expenses",
            amont: 0.00
        }, {
            heading: "Total transfer shipping charge",
            amont: 0.00
        }, {
            heading: "Total Sell discount",
            amont: 0.00
        }, {
            heading: "Total customer reward",
            amont: 0.00
        }, {
            heading: "Total Sell Return",
            amont: 0.00
        }, {
            heading: "Total Payroll",
            amont: 0.00
        }, {
            heading: "Total Production Cost",
            amont: 0.00
        }

    ])
    const [summary1] = useState([
        {
            heading: "Closing Stock",
            subheading: "(By Purchase Price)",
            amont: 0.00
        }, {
            heading: "Closing Stock",
            subheading: "(By Sale Price)",
            amont: 0.00
        }, {
            heading: "Total Sales",
            subheading: "(Exc. Tax, Discount)",
            amont: 0.00
        }, {
            heading: "Total Sell Shipping Charge",
            amont: 0.00
        }, {
            heading: "Sell additional expenses",
            amont: 0.00
        }, {
            heading: "Total Stock shipping Recoverd",
            amont: 0.00
        }, {
            heading: "Total Purchase Return",
            amont: 0.00
        }, {
            heading: "Total Purchase discount",
            amont: 0.00
        }, {
            heading: "Total Sell round off",
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
                <h1 className='font-bold text-xl text-start'>Profit / Loss Report</h1>

                <div className='flex justify-between md:justify-end md:items-end'>

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
                    <h1 className='text-xl font-bold flex items-center justify-center '>EZI POS DEMO - Profit / Loss Report</h1>


                    <div className='grid grid-cols-2 gap-4 bg-gray-100 mt-3'>
                        <div className='flex bg-white p-4 w-full'>
                            <table className='table-auto w-full'>
                                {summary.map((val, index) => {
                                    return <tr className={`${index % 2 === 0 ? "bg-gray-100" : ""} my-2`}>
                                        <th className='flex flex-col text-start'>
                                            {val.heading}
                                            <small className='text-gray-500'>{val.subheading}</small>
                                        </th>
                                        <td>
                                            Rs {val.amont}
                                        </td>

                                    </tr>
                                })}
                            </table>

                        </div>
                        <div className='flex bg-white p-4 w-full'>
                            <table className='table-auto w-full'>
                                {summary1.map((val, index) => {
                                    return <tr className={`${index % 2 === 0 ? "bg-gray-100" : ""} my-2`}>
                                        <th className='flex flex-col text-start'>
                                            {val.heading}
                                            <small className='text-gray-500'>{val.subheading}</small>
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
                        <h1 className='text-3xl text-gray-500 text-start'>Gross Profit: Rs 0.00</h1>
                        <h1 className='text-xs text-gray-500 text-start'>(Total sell price - Total purchase price)</h1>
                        <h1 className='text-3xl text-gray-500 text-start mt-3'>Net Profit: ₨ 506.60</h1>
                        <h1 className='text-xs text-gray-500 text-start'>Gross Profit + (Total sell shipping charge + Sell additional expenses + Total Stock Recovered + Total Purchase discount + Total sell round off )</h1>
                        <h1 className='text-xs text-gray-500 text-start'>- ( Total Stock Adjustment + Total Expense + Total purchase shipping charge + Total transfer shipping charge + Purchase additional expenses + Total Sell discount + Total customer reward + Total Payroll + Total Production Cost )</h1>

                    </div>

                </div>

                <div className='flex items-end justify-end mx-3 mt-3'>
                    <div className='flex bg-blue-500 text-white cursor-pointer px-2 py-1' onClick={() => { handlePrint() }}>
                        <FaPrint size={15} />
                        <h1 className='text-sm mx-1'>Print</h1>
                    </div>
                </div>

            </div>


            <div className='grid grid-cols-2 md:grid-cols-5 mt-3 bg-white'>
                <NavLink to={"profit_by_products"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaCubes size={20} />
                    <h1 className='font-bold text-xl'>Profit by Products</h1>
                </NavLink>
                <NavLink to={"profit_by_categories"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaTags size={20} />
                    <h1 className='font-bold text-xl'>Profit by Categories</h1>
                </NavLink>
                <NavLink to={"profit_by_brands"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <h1 className='font-bold text-xl'>Profit by Brands</h1>
                </NavLink>
                <NavLink to={"profit_by_locations"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaMapMarker size={20} />
                    <h1 className='font-bold text-xl'>Profit by Location</h1>
                </NavLink>
                <NavLink to={"profit_by_invoice"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaFileAlt size={20} />
                    <h1 className='font-bold text-xl'>Profit by Invoice</h1>
                </NavLink>
                <NavLink to={"profit_by_date"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaCalendar size={20} />
                    <h1 className='font-bold text-xl'>Profit by date</h1>
                </NavLink>
                <NavLink to={"profit_by_customer"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaUser size={20} />
                    <h1 className='font-bold text-xl'>Profit by customer</h1>
                </NavLink>
                <NavLink to={"profit_by_days"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaCalendar size={20} />
                    <h1 className='font-bold text-xl'>Profit by day</h1>
                </NavLink>
            </div>


            <div className='flex w-full mt-5 min-h-[400px] bg-white'>
                <Outlet />
            </div>

        </div>
    )
}

export default ProfitLossRpt