import React from 'react'
import { AiFillInfoCircle, AiOutlineCalendar, } from 'react-icons/ai'
import Chart1 from './Chart1'
import Chart2 from './Chart2'
import SlspmntDueTbl from './Tables/SlspmntDueTbl'
import PrchspmntDueTbl from './Tables/PrchspmntDueTbl'
import PrdctstkAlrtTbl from './Tables/PrdctstkAlrtTbl'
import SlsOrderTbl from './Tables/SlsOrderTbl'
import PrchsOrderTbl from './Tables/PrchsOrderTbl'
import PndngShpmntTbl from './Tables/PndngShpmntTbl'

const Dashboard = () => {
    const dateArray = [

        "Yesterday",
        "Last 7 Days",
        "Last 30 Days",
        "This Month",
        "Last Month",
        "This month last year",
        "This Year",
        "Last Year",
        "Current financial year",
        "Last financial year",
        "Custom Range",
    ]
    return (
        <>
            <div className='flex flex-col relative w-full min-h-[400px]'>
                <div className='flex flex-col h-[250px]  z-0 w-full border-t-[1px] border-white bg-gradient-to-r from-[#3c3c4e] to-[#245b80]'>
                    <h1 className='flex text-2xl text-white p-5'>Welcome Username,</h1>

                    <div className='flex justify-end  items-center w-full h-10 '>
                        <div className='w-[200px] text-white flex items-center justify-center h-10 bg-blue-500 rounded-md mx-5'>
                            <AiOutlineCalendar size={20} className='mx-2' />
                            <select id='filter' name='filter' className=' flex w-[160px]  text-white  justify-center items-center py-2  px-5 bg-transparent'>
                                <option value={""} className='text-black'>Fiter by Date</option>
                                {dateArray.map((val, index) => {
                                    return <option key={index} value={val} className='text-black'>{val}</option>

                                })}

                            </select>
                        </div>
                    </div>


                </div>
                <div className=' md:absolute w-full px-5 z-10 md:top-[140px] grid grid-cols-1 md:grid-cols-4 gap-3 sm:flex-col'>
                    <div className='flex items-center  shadow-sm shadow-gray-400 justify-center h-[90px] bg-white rounded-xl '>
                        <div className='flex w-[60px] h-[60px] items-center justify-center mx-2 rounded-full bg-blue-400 text-white'>
                            <AiOutlineCalendar size={30} />
                        </div>
                        <div className='flex flex-col items-center  justify-center mx-2'>
                            <h1 className='text-md text-gray-500 font-semibold text-start'> TOTAL SALES</h1>
                            <h1 className='text-2xl text-start font-semibold'> Rs 0.00</h1>

                        </div>
                    </div>
                    <div className='flex items-center shadow-sm shadow-gray-400 justify-center h-[90px] bg-white rounded-xl '>
                        <div className='flex w-[60px] h-[60px] items-center justify-center mx-2 rounded-full bg-green-400 text-white'>
                            <AiOutlineCalendar size={30} />
                        </div>
                        <div className='flex flex-col items-center justify-center mx-2'>
                            <h1 className='text-md text-gray-500 font-semibold text-start flex items-center justify-center '> Net  <AiFillInfoCircle size={15} style={{ color: "blue" }} className='mx-2' /> </h1>
                            <h1 className='text-2xl text-start font-semibold'> Rs 0.00</h1>

                        </div>
                    </div>
                    <div className='flex items-center shadow-sm shadow-gray-400 justify-center h-[90px] bg-white rounded-xl '>
                        <div className='flex w-[60px] h-[60px] items-center justify-center mx-2 rounded-full bg-orange-400 text-white'>
                            <AiOutlineCalendar size={30} />
                        </div>
                        <div className='flex flex-col items-center justify-center mx-2'>
                            <h1 className='text-md text-gray-500 font-semibold text-start'> Invoice Due</h1>
                            <h1 className='text-2xl text-start font-semibold'> Rs 0.00</h1>

                        </div>
                    </div>
                    <div className='flex-col items-center shadow-sm shadow-gray-400 justify-center h-[120px] p-2 bg-white rounded-xl '>
                        <div className='flex'>
                            <div className='flex w-[60px] h-[60px] items-center justify-center mx-2 rounded-full bg-red-500 text-white'>
                                <AiOutlineCalendar size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center mx-2'>
                                <h1 className='text-md text-gray-500 font-semibold text-start'> TOTAL SALES RETURNS</h1>
                                <h1 className='text-2xl text-start font-semibold'> Rs 0.00</h1>

                            </div>
                        </div>
                        <div className='flex flex-col justify-end items-start'>
                            <h1 className='text-xs text-gray-500'>Total Sell Return Rs 0.00</h1>
                            <h1 className='text-xs text-gray-500'>Total Sell Return Paid  Rs 0.00</h1>

                        </div>

                    </div>
                    <div className='flex items-center shadow-sm shadow-gray-400 justify-center h-[90px] bg-white rounded-xl '>
                        <div className='flex w-[60px] h-[60px] items-center justify-center mx-2 rounded-full bg-blue-500 text-white'>
                            <AiOutlineCalendar size={30} />
                        </div>
                        <div className='flex flex-col items-center justify-center mx-2'>
                            <h1 className='text-md text-gray-500 font-semibold text-start'> TOTAL PURCHASE</h1>
                            <h1 className='text-2xl text-start font-semibold'> Rs 0.00</h1>

                        </div>
                    </div>
                    <div className='flex items-center shadow-sm shadow-gray-400 justify-center h-[90px] bg-white rounded-xl '>
                        <div className='flex w-[60px] h-[60px] items-center justify-center mx-2 rounded-full bg-orange-400 text-white'>
                            <AiOutlineCalendar size={30} />
                        </div>
                        <div className='flex flex-col items-center justify-center mx-2'>
                            <h1 className='text-md text-gray-500 font-semibold text-start'> PURCHASE DUE</h1>
                            <h1 className='text-2xl text-start font-semibold'> Rs 0.00</h1>

                        </div>
                    </div>
                    <div className='flex-col items-center shadow-sm shadow-gray-400 justify-center h-[120px] p-2 bg-white rounded-xl '>
                        <div className='flex'>
                            <div className='flex w-[60px] h-[60px] items-center justify-center mx-2 rounded-full bg-red-600 text-white'>
                                <AiOutlineCalendar size={30} />
                            </div>
                            <div className='flex flex-col items-center justify-center ml-2'>
                                <h1 className='text-sm text-gray-500 font-semibold text-start '> TOTAL PURCHASE RETURN</h1>
                                <h1 className='text-2xl text-start font-semibold'> Rs 0.00</h1>

                            </div>
                        </div>
                        <div className='flex flex-col items-start justify-end'>
                            <h1 className='text-xs text-gray-500'>Total Purchase Return Rs 0.00</h1>
                            <h1 className='text-xs text-gray-500'>Total Purchase Return Paid  Rs 0.00</h1>

                        </div>
                    </div>
                    <div className='flex items-center shadow-sm shadow-gray-400 justify-center h-[90px] bg-white rounded-xl '>
                        <div className='flex w-[60px] h-[60px] items-center justify-center mx-2 rounded-full bg-red-500 text-white'>
                            <AiOutlineCalendar size={30} />
                        </div>
                        <div className='flex flex-col items-center justify-center mx-2'>
                            <h1 className='text-md text-gray-500 font-semibold text-start'> EXPENSE</h1>
                            <h1 className='text-2xl text-start font-semibold'> Rs 0.00</h1>

                        </div>
                    </div>


                </div>
            </div>
            <Chart1 />
            <Chart2 />
            <div className=' mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 '>
                <SlspmntDueTbl />
                <PrchspmntDueTbl />

            </div>
            <div className='mt-3 flex'>
                <PrdctstkAlrtTbl />
            </div>
            <div className='mt-3 flex'>
                <SlsOrderTbl />
            </div>
            <div className='mt-3 flex'>
                <div className=' w-[96%] mx-[2%] shadow-md my-5 shadow-gray-400 min-h-[300px] border-t-[2px] border-yellow-600 rounded-xl'>
                    <h1 className=' text-2xl font-semibold text-start mx-5 mt-3'>Sales Order</h1>

                    <PrchsOrderTbl />
                </div>
            </div>

            <div className='mt-3 flex'>
                <PndngShpmntTbl />
            </div>


        </>

    )
}

export default Dashboard