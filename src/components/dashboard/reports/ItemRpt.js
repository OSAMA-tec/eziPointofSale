import React, { useRef, useState } from 'react'
import {  FaFilter } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi';
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { DefinedRange } from 'react-date-range';
import ItemReportTbl from '../reportTables/ItemReportTbl';


const ItemRpt = () => {
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
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)

    const [inputValue, setInputValue] = useState('')
    const [open1, setOpen1] = useState(false)

    const [inputValue1, setInputValue1] = useState('')

    const printRef = useRef()
    // const handlePrint = useReactToPrint({
    //     content: () => printRef.current,
    //     documentTitle: "SellReport",
    //     copyStyles: true,
    // });
    const [sellDate, setSellDate] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection"
        }
    ])

    const [purchaseDate, setPurchaseDate] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection1"
        }
    ])
        
    const [formData, setFormData] = useState({
        businesLocation: "",
        supplier: "",
        customer: "",
        
        manufacturedProducts: false
    })
    const [isFilter, setIsFilter] = useState(false)

    return (
        <div>
            <div className='flex flex-col  bg-gray-100 px-3 pb-3 min-h-screen'>
                <div className=' flex '>
                    <h1 className='font-bold text-xl text-start'>Item Report</h1>

                </div>
                <div className='flex flex-col mt-4 w-full bg-white rounded-md p-3 items-start justify-start'>
                    <div className='flex cursor-pointer' onClick={() => { setIsFilter(!isFilter) }}>
                        <FaFilter size={20} style={{ color: 'blue' }} />
                        <h1 className='text-xl text-blue-600 font-semibold'>Filters</h1>
                    </div>
                    {isFilter &&
                        <div className=' grid grid-cols-1 bg-white rounded-md gap-5 md:grid-cols-4 mt-5 w-full'>
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

                                            className={`bg-white z-10  w-full -right-7 mx-[30px] border-[1px] absolute top-9 border-gray-600  overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}
                                        >
                                            <div className="flex items-center px-1 sticky top-0 bg-white">
                                                <input
                                                    type="text"
                                                    value={inputValue}
                                                    onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                                    className="placeholder:text-gray-700 w-full p-1 outline-none border-[1px] border-gray-500"
                                                />
                                            </div>
                                            {dummyData?.map((data) => (
                                                <li
                                                    key={data?.Name}
                                                    className={`p-2 text-sm text-start hover:bg-sky-600 hover:text-white
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
                                <div className='flex text-sm text-start font-bold'>
                                    <h1>Purchase Date:</h1>
                                </div>

                                <div className=' bg-gray-300 mt-2 px-2 flex items-center relative py-1'>
                                    <input
                                        value={`${format(purchaseDate[0].startDate, "MM/dd/yyyy")} - ${format(purchaseDate[0].endDate, "MM/dd/yyyy")}`}
                                        readOnly
                                        className='focus:outline-none bg-gray-300 '
                                        onClick={() => { setOpen3(!open3) }} />
                                    {open3 &&
                                        <div onClick={() => { setOpen3(!open3) }} className='absolute top-10 left-4 text-black z-10'>
                                            <DefinedRange
                                                onChange={item => setPurchaseDate([item.selection] )}
                                                ranges={purchaseDate}

                                            />
                                        </div>

                                    }
                                </div>
                            </div>



                            <div className='flex flex-col'>
                                <div className='flex text-sm text-start font-bold'>
                                    <h1>Customer:</h1>
                                </div>
                                <div className='flex flex-col relative'>
                                    <div className='flex'>
                                        <input
                                            onClick={() => setOpen1(!open1)}
                                            className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  py-1 mt-1 border-[1px] border-gray-600'
                                            value={formData.customer}
                                            onChange={(e) => { setFormData({ ...formData, customer: e.target.value }) }}

                                            placeholder='Select Value'
                                        />
                                        <BiChevronDown size={20} className={`${open1 && "rotate-180"} absolute top-3 right-4`} />


                                    </div>
                                    {open1 &&
                                        <ul

                                            className={`bg-white z-10  w-full -right-7 mx-[30px] border-[1px] absolute top-9 border-gray-600  overflow-y-auto ${open1 ? "max-h-60" : "max-h-0"} `}
                                        >
                                            <div className="flex items-center px-1 sticky top-0 bg-white">
                                                <input
                                                    type="text"
                                                    value={inputValue1}
                                                    onChange={(e) => setInputValue1(e.target.value.toLowerCase())}
                                                    className="placeholder:text-gray-700 w-full p-1 outline-none border-[1px] border-gray-500"
                                                />
                                            </div>
                                            {dummyData?.map((data) => (
                                                <li
                                                    key={data?.Name}
                                                    className={`p-2 text-sm text-start hover:bg-sky-600 hover:text-white
                                                        ${data?.Name?.toLowerCase() === formData.customer?.toLowerCase() &&
                                                        "bg-sky-600 text-white"
                                                        }
                                                         ${data?.Name?.toLowerCase().startsWith(inputValue1)
                                                            ? "block"
                                                            : "hidden"
                                                        }`}
                                                    onClick={() => {
                                                        if (data?.Name?.toLowerCase() !== formData.customer.toLowerCase()) {
                                                            setFormData({ ...formData, customer: data?.Name })
                                                            setOpen1(false);
                                                            setInputValue1("");
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
                                <div className='flex text-sm text-start font-bold'>
                                    <h1>Sell Date:</h1>
                                </div>

                                <div className=' bg-gray-300 mt-2  px-2 flex items-center relative py-1'>
                                    <input
                                        value={`${format(sellDate[0].startDate, "MM/dd/yyyy")} - ${format(sellDate[0].endDate, "MM/dd/yyyy")}`}
                                        readOnly
                                        className='focus:outline-none bg-gray-300 '
                                        onClick={() => { setOpen4(!open4) }} />
                                    {open4 &&
                                        <div onClick={() => { setOpen4(!open4) }} className='absolute top-10 left-4 text-black z-10'>
                                            <DefinedRange
                                                onChange={item => setSellDate([item.selection] )}
                                                ranges={sellDate}

                                            />
                                        </div>

                                    }
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <h1 className='text-start font-bold '>Business Location:</h1>
                                <select value={formData.businesLocation} onChange={(e) => { setFormData({ ...formData, businesLocation: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                    <option value={""}>Please Selecet</option>
                                    <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>
                                </select>
                            </div>
                            <div className='flex items-center mt-5'>
                                <input type='checkbox' checked={formData.manufacturedProducts} onChange={(e) => { setFormData({ ...formData, manufacturedProducts: e.target.checked }) }} className='w-5 h-5'/>
                                <h1 className='text-start mx-2 font-bold'> Only manufactured products</h1>

                            </div>

                        </div>}
                </div>


                <div ref={printRef} className='mt-5'>
                    {/* <h1 className='text-xl font-bold mt-3 flex items-center justify-center '>EZI POS DEMO - Tax Report</h1> */}


                    



                </div>

                {/* <div className='flex items-end justify-end mx-3 mt-3'>
                    <div className='flex bg-blue-500 text-white cursor-pointer px-2 py-1' onClick={() => { handlePrint() }}>
                        <FaPrint size={15} />
                        <h1 className='text-sm mx-1'>Print</h1>
                    </div>
                </div> */}
                <div className='flex w-full'>
                    <ItemReportTbl />
                </div>





            </div>




        </div>
    )
}

export default ItemRpt