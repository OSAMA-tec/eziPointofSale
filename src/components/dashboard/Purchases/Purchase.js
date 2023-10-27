import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'
import { DefinedRange } from 'react-date-range';

import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import PurchasesTbl from '../Tables/PurchasesTbl';

const Purchase = () => {
    const dummyData = [
        {
            id: 1,
            Username: "username",
            Name: "User",
            Role: "Admin",
            Email: "username@gmail.com"
        },
        {
            id: 2,
            Username: "username1",
            Name: "User1",
            Role: "Admin",
            Email: "username@gmail.com"
        },
        {
            id: 3,
            Username: "username2",
            Name: "User2",
            Role: "Admin",
            Email: "username2@gmail.com"
        },
        {
            id: 4,
            Username: "username3",
            Name: "User3",
            Role: "Admin",
            Email: "username3@gmail.com"
        },
        {
            id: 5,
            Username: "username4",
            Name: "User4",
            Role: "Admin",
            Email: "username4@gmail.com"
        },
        {
            id: 6,
            Username: "username5",
            Name: "User5",
            Role: "Admin",
            Email: "username5@gmail.com"
        },
        {
            id: 7,
            Username: "username6",
            Name: "User6",
            Role: "Admin",
            Email: "username6@gmail.com"
        }
    ]
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
    const [inputValue, setInputValue] = useState('')
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open3, setOpen3] = useState(false)

    const [isFilter, setIsFilter] = useState(false)
    return (
        <div className='flex flex-col items-center min-h-screen justify-self-center w-full p-5 bg-gray-100'>
            <div className='flex justify-start items-start w-full'>
                <h1 className='text-xl  font-semibold'>Purchases</h1>

            </div>
            <div className='flex flex-col mt-4 w-full bg-white rounded-md p-3 items-start justify-start'>
                <div className='flex cursor-pointer' onClick={() => { setIsFilter(!isFilter) }}>
                    <FaFilter size={20} style={{ color: 'blue' }} />
                    <h1 className='text-xl text-blue-600 font-semibold'>Filters</h1>
                </div>
                {isFilter &&
                    <div className=' grid grid-cols-1 bg-white rounded-md gap-5 md:grid-cols-4 mt-5 w-full'>
                        <div className='flex flex-col'>
                            <h1 className='text-start font-bold text-xs'>Business Location:</h1>
                            <select value={formData.businesLocation} onChange={(e) => { setFormData({ ...formData, businesLocation: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                <option value={""}>Please Selecet</option>
                                <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex text-sm text-start font-bold'>
                                <h1>Supplier:</h1>
                            </div>
                            <div className='flex flex-col relative'>
                                <div className='flex'>
                                    <input
                                        onClick={() => setOpen(!open)}
                                        className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  py-1 mt-1 border-[1px] border-gray-600'
                                        value={formData.supplier}
                                        onChange={(e) => { setFormData({ ...formData, supplier: e.target.value }) }}

                                        placeholder='Select Value'
                                    />
                                    <BiChevronDown size={20} className={`${open && "rotate-180"} absolute top-3 right-4`} />


                                </div>
                                {open &&
                                    <ul

                                        className={`bg-white z-10  w-[250px] -right-8 mx-[30px] border-[1px] absolute top-9 border-gray-600 overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}
                                    >
                                        <div className="flex items-center px-2 sticky top-0 bg-white">
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                                className="placeholder:text-gray-700 p-1 outline-none border-[1px] border-gray-500"
                                            />
                                        </div>
                                        {dummyData?.map((data) => (
                                            <li
                                                key={data?.Name}
                                                className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                        ${data?.Name?.toLowerCase() === formData.supplier?.toLowerCase() &&
                                                    "bg-sky-600 text-white"
                                                    }
                                         ${data?.Name?.toLowerCase().startsWith(inputValue)
                                                        ? "block"
                                                        : "hidden"
                                                    }`}
                                                onClick={() => {
                                                    if (data?.Name?.toLowerCase() !== formData.supplier.toLowerCase()) {
                                                        setFormData({ ...formData, supplier: data?.Name })
                                                        setOpen(false);
                                                        setInputValue("");
                                                    }
                                                }}
                                            >
                                                {data?.Name}
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='text-start font-bold'>Status:</h1>
                            <select value={formData.businesLocation} onChange={(e) => { setFormData({ ...formData, businesLocation: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                <option value={"All"}>All</option>
                                <option value={"Ordered"}>Ordered</option>
                                <option value={"Partial"}>Partial</option>
                                <option value={"Completed"}>Completed</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex text-sm text-start font-bold'>
                                <h1>Shipping Status:</h1>
                            </div>
                            <div className='flex flex-col relative'>
                                <div className='flex'>
                                    <input
                                        onClick={() => setOpen1(!open1)}
                                        className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  py-1 mt-1 border-[1px] border-gray-600'
                                        value={formData.shippingStatus}
                                        onChange={(e) => { setFormData({ ...formData, shippingStatus: e.target.value }) }}

                                        placeholder='Select Value'
                                    />
                                    <BiChevronDown size={20} className={`${open && "rotate-180"} absolute top-3 right-4`} />


                                </div>
                                {open1 &&
                                    <ul

                                        className={`bg-white z-10  w-[250px] -right-8 mx-[30px] border-[1px] absolute top-9 border-gray-600 overflow-y-auto ${open1 ? "max-h-60" : "max-h-0"} `}
                                    >
                                        <div className="flex items-center px-2 sticky top-0 bg-white">
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                                className="placeholder:text-gray-700 p-1 outline-none border-[1px] border-gray-500"
                                            />
                                        </div>
                                        {dummyData?.map((data) => (
                                            <li
                                                key={data?.Name}
                                                className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                        ${data?.Name?.toLowerCase() === formData.shippingStatus?.toLowerCase() &&
                                                    "bg-sky-600 text-white"
                                                    }
                                         ${data?.Name?.toLowerCase().startsWith(inputValue)
                                                        ? "block"
                                                        : "hidden"
                                                    }`}
                                                onClick={() => {
                                                    if (data?.Name?.toLowerCase() !== formData.shippingStatus.toLowerCase()) {
                                                        setFormData({ ...formData, shippingStatus: data?.Name })
                                                        setOpen1(false);
                                                        setInputValue("");
                                                    }
                                                }}
                                            >
                                                {data?.Name}
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        </div>
                        <div className='flex flex-col relative'>
                            <h1 className='text-sm font-semibold text-start mb-2'>Date Range:</h1>
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
                    <h1 className='text-xl font-semibold text-start p-5'>All Purchases</h1>
                    <Link to={'/home/purchase/create'}  className='flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                        <AiOutlinePlus size={15} /> Add

                    </Link>

                </div>
               
                <PurchasesTbl />
            </div>
        </div>
    )
}

export default Purchase