import React, { useRef, useState } from 'react'
import { FaArrowCircleDown, FaArrowCircleUp,   FaFilter,   FaMinusCircle, FaPrint } from 'react-icons/fa'
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { DefinedRange } from 'react-date-range';
import { useReactToPrint } from 'react-to-print';
import { Outlet, NavLink } from 'react-router-dom'
import { BiChevronDown } from 'react-icons/bi';


const TaxRpt = () => {
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
    const [open, setOpen] = useState(false)

    const [inputValue, setInputValue] = useState('')
    const [open3, setOpen3] = useState(false)
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
    const [formData, setFormData] = useState({
        businesLocation:"",
        contact:"",
        date:""
    })
    const [isFilter, setIsFilter] = useState(false)

    return (
        <div>
            <div className='flex flex-col  bg-gray-100 px-3 pb-3 min-h-screen'>
                <div className=' flex '>
                <h1 className='font-bold text-xl text-start'>Tax Report</h1>
                <h1 className='font-bold text-sm text-gray-500 mt-2 mx-2 text-start'>Tax details for the selected date range</h1>

                </div>
                <div className='flex flex-col mt-4 w-full bg-white rounded-md p-3 items-start justify-start'>
                <div className='flex cursor-pointer' onClick={() => { setIsFilter(!isFilter) }}>
                    <FaFilter size={20} style={{ color: 'blue' }} />
                    <h1 className='text-xl text-blue-600 font-semibold'>Filters</h1>
                </div>
                {isFilter &&
                    <div className=' grid grid-cols-1 bg-white items-center rounded-md gap-5 md:grid-cols-4 mt-5 w-full'>
                        <div className='flex flex-col'>
                            <h1 className='text-start font-bold text-sm'>Business Location:</h1>
                            <select value={formData.businesLocation} onChange={(e) => { setFormData({ ...formData, businesLocation: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                <option value={""}>Please Selecet</option>
                                <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex text-sm text-start font-bold'>
                                <h1>Contact:</h1>
                            </div>
                            <div className='flex flex-col relative'>
                                <div className='flex'>
                                    <input
                                        onClick={() => setOpen(!open)}
                                        className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  py-1 mt-1 border-[1px] border-gray-600'
                                        value={formData.contact}
                                        onChange={(e) => { setFormData({ ...formData, contact: e.target.value }) }}

                                        placeholder='Select Value'
                                    />
                                    <BiChevronDown size={20} className={`${open && "rotate-180"} absolute top-3 right-4`} />


                                </div>
                                {open &&
                                    <ul

                                        className={`bg-white z-10  w-[250px] -right-7 mx-[30px] border-[1px] absolute top-9 border-gray-600 overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}
                                    >
                                        <div className="flex items-center px-1 sticky top-0 bg-white">
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                                className="placeholder:text-gray-700 w-full py-1 outline-none border-[1px] border-gray-500"
                                            />
                                        </div>
                                        {dummyData?.map((data) => (
                                            <li
                                                key={data?.Name}
                                                className={`p-2 text-sm text-start hover:bg-sky-600 hover:text-white
                                        ${data?.Name?.toLowerCase() === formData.contact?.toLowerCase() &&
                                                    "bg-sky-600 text-white"
                                                    }
                                         ${data?.Name?.toLowerCase().startsWith(inputValue)
                                                        ? "block"
                                                        : "hidden"
                                                    }`}
                                                onClick={() => {
                                                    if (data?.Name?.toLowerCase() !== formData.contact.toLowerCase()) {
                                                        setFormData({ ...formData, contact: data?.Name })
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
                        
                        
                        <div className='flex flex-col relative'>
                            <h1 className='text-sm font-semibold text-start mb-1'>Date Range:</h1>
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

                
                <div ref={printRef}>
                    <h1 className='text-xl font-bold mt-3 flex items-center justify-center '>EZI POS DEMO - Tax Report</h1>


                    

                    <div className='flex flex-col p-5 mt-5 bg-white'>
                        <h1 className='text-2xl text-gray-500 text-start'>Overall (Input - Output - Expense)</h1>
                        <h1 className='text-3xl text-gray-500 mt-10 text-start'>Output Tax - Input Tax - Expense Tax: ₨ 0.00</h1>
                        
                    </div>

                </div>

                <div className='flex items-end justify-end mx-3 mt-3'>
                    <div className='flex bg-blue-500 text-white cursor-pointer px-2 py-1' onClick={() => { handlePrint() }}>
                        <FaPrint size={15} />
                        <h1 className='text-sm mx-1'>Print</h1>
                    </div>
                </div>

                <div className='grid grid-cols-3 mt-3 bg-white w-2/4'>
                <NavLink to={"input_tax_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaArrowCircleDown size={20} />
                    <h1 className='font-bold text-xl'>Input Tax</h1>
                </NavLink>
                <NavLink to={"output_tax_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaArrowCircleUp size={20} />
                    <h1 className='font-bold text-xl'>Output Tax</h1>
                </NavLink>
                <NavLink to={"expense_tax_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaMinusCircle size={20} />

                    <h1 className='font-bold text-xl'>Expense Tax</h1>
                </NavLink>
            </div>


            <div className='flex w-full py-5 min-h-[400px] bg-white'>
                <Outlet />
            </div>

            </div>


            

        </div>
    )
}

export default TaxRpt