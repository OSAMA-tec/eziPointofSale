import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { DefinedRange } from 'react-date-range';

import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import PurchaseReturnTbl from '../Tables/PurchaseReturnTbl';

const PurchaseOrder = () => {
    
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection"
        }
    ])
    const [formData, setFormData] = useState({
        supplier: "",
        Date: "",
        businesLocation: "",
        status: "",
        shippingStatus: ""

    })
    
    const [open3, setOpen3] = useState(false)

    const [isFilter, setIsFilter] = useState(false)
    return (
        <div className='flex flex-col items-center min-h-screen justify-self-center w-full p-5 bg-gray-100'>
            <div className='flex justify-start items-start w-full'>
                <h1 className='text-xl font-semibold'>Purchase Returns</h1>

            </div>
            <div className='flex flex-col mt-4 w-full bg-white rounded-md p-3 items-start justify-start'>
                <div className='flex cursor-pointer' onClick={() => { setIsFilter(!isFilter) }}>
                    <FaFilter size={20} style={{ color: 'blue' }} />
                    <h1 className='text-xl text-blue-600 font-semibold'>Filters</h1>
                </div>
                {isFilter &&
                    <div className=' grid grid-cols-1 bg-white items-center rounded-md gap-5 md:grid-cols-4 mt-5 w-full'>
                        <div className='flex flex-col'>
                            <h1 className='text-start font-bold text-xs'>Business Location:</h1>
                            <select value={formData.businesLocation} onChange={(e) => { setFormData({ ...formData, businesLocation: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                <option value={""}>Please Selecet</option>
                                <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>
                            </select>
                        </div>
                       <div className='flex flex-col relative'>
                            <h1 className='text-sm font-semibold text-start '>Date Range:</h1>
                            <input
                                value={`${format(range[0].startDate, "MM/dd/yyyy")} - ${format(range[0].endDate, "MM/dd/yyyy")}`}
                                readOnly
                                className='focus:outline-none  border-[1px] bg-gray-200 border-black px-4 py-1'
                                onClick={() => { setOpen3(!open3) }} />
                            {open3 &&
                                <div onClick={() => { setOpen3(!open3) }} className='absolute top-16 z-10'>
                                    <DefinedRange
                                        onChange={item => setRange([item.selection])}
                                        ranges={range}

                                    />
                                </div>

                            }
                        </div>
                    </div>}

            </div>

            <div className='flex flex-col bg-white border-t-[3px] rounded-md w-full mt-5 border-blue-500'>
            <div className='flex justify-between mt-2 text-sm mx-5'>
                    <h1 className='text-xl font-semibold text-start p-5'>All Purchase Returns</h1>
                    <Link to={'/home/purchase-return/create'}  className='flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                        <AiOutlinePlus size={15} /> Add

                    </Link>

                </div>
               
                <PurchaseReturnTbl />
            </div>
        </div>
    )
}

export default PurchaseOrder