import React, { useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi';
import StockReportTbl from '../Tables/StockReportTbl';


const StockRpt = () => {
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

    const printRef = useRef()
    // const handlePrint = useReactToPrint({
    //     content: () => printRef.current,
    //     documentTitle: "SellReport",
    //     copyStyles: true,
    // });
    const [formData, setFormData] = useState({
        businesLocation: "",
        category: "",
        subcategory: "",
        brand: "",
        unit: "",
        manufacturedProducts: false
    })
    const [isFilter, setIsFilter] = useState(false)

    return (
        <div>
            <div className='flex flex-col  bg-gray-100 px-3 pb-3 min-h-screen'>
                <div className=' flex '>
                    <h1 className='font-bold text-xl text-start'>Stock Report</h1>
                    <h1 className='font-bold text-sm text-gray-500 mt-2 mx-2 text-start'>Tax details for the selected date range</h1>

                </div>
                <div className='flex flex-col mt-4 w-full bg-white rounded-md p-3 items-start justify-start'>
                    <div className='flex cursor-pointer' onClick={() => { setIsFilter(!isFilter) }}>
                        <FaFilter size={20} style={{ color: 'blue' }} />
                        <h1 className='text-xl text-blue-600 font-semibold'>Filters</h1>
                    </div>
                    {isFilter &&
                        <div className=' grid grid-cols-1 bg-white rounded-md gap-5 md:grid-cols-4 mt-5 w-full'>
                            <div className='flex flex-col'>
                                <h1 className='text-start font-bold '>Business Location:</h1>
                                <select value={formData.businesLocation} onChange={(e) => { setFormData({ ...formData, businesLocation: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                    <option value={""}>Please Selecet</option>
                                    <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-start font-bold '>Category:</h1>
                                <select value={formData.category} onChange={(e) => { setFormData({ ...formData, category: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                    <option value={"All"}>All</option>
                                    <option value={"test cat2-2"}>test cat2-2</option>

                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-start font-bold '>Sub Category:</h1>
                                <select value={formData.subcategory} onChange={(e) => { setFormData({ ...formData, subcategorycategory: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                    <option value={"All"}>All</option>

                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className='text-start font-bold '>Brand:</h1>
                                <select value={formData.brand} onChange={(e) => { setFormData({ ...formData, brand: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                    <option value={"All"}>All</option>
                                    <option value={"Test Brand"}>Test Brand</option>
                                </select>
                            </div>

                            <div className='flex flex-col'>
                                <div className='flex text-sm text-start font-bold'>
                                    <h1>Unit:</h1>
                                </div>
                                <div className='flex flex-col relative'>
                                    <div className='flex'>
                                        <input
                                            onClick={() => setOpen(!open)}
                                            className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  py-1 mt-1 border-[1px] border-gray-600'
                                            value={formData.unit}
                                            onChange={(e) => { setFormData({ ...formData, unit: e.target.value }) }}

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
                                                        ${data?.Name?.toLowerCase() === formData.unit?.toLowerCase() &&
                                                        "bg-sky-600 text-white"
                                                        }
                                                         ${data?.Name?.toLowerCase().startsWith(inputValue)
                                                            ? "block"
                                                            : "hidden"
                                                        }`}
                                                    onClick={() => {
                                                        if (data?.Name?.toLowerCase() !== formData.unit.toLowerCase()) {
                                                            setFormData({ ...formData, unit: data?.Name })
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



                            <div className='flex items-center'>
                                <input type='checkbox' checked={formData.manufacturedProducts} onChange={(e) => { setFormData({ ...formData, manufacturedProducts: e.target.checked }) }} />
                                <h1 className='text-start mx-2 font-bold'> Only manufactured products</h1>

                            </div>

                        </div>}
                </div>


                <div ref={printRef} className='mt-5'>
                    {/* <h1 className='text-xl font-bold mt-3 flex items-center justify-center '>EZI POS DEMO - Tax Report</h1> */}


                    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 bg-white py-10 items-center'>
                        <div className='flex flex-col p-1  bg-white'>
                            <h1 className='text-sm  text-start'>Closing Stock (By Purchase Price)</h1>
                            <h1 className='text-3xl text-gray-600 mt-10 text-start'>₨ 0.00</h1>
                        </div>
                        <div className='flex flex-col p-1  bg-white'>
                            <h1 className='text-sm ttext-start'>Closing stock (By sale price)</h1>
                            <h1 className='text-3xl text-gray-600 mt-10 text-start'>₨ 0.00</h1>
                        </div>
                        <div className='flex flex-col p-1 bg-white'>
                            <h1 className='text-sm  text-start'>Potential profit</h1>
                            <h1 className='text-3xl text-gray-600 mt-10 text-start'>₨ 0.00</h1>
                        </div>
                        <div className='flex flex-col p-1  bg-white'>
                            <h1 className='text-sm  text-start'>Profit Margin %</h1>
                            <h1 className='text-3xl text-gray-600 mt-10 text-start'>₨ 0.00</h1>
                        </div>
                    </div>



                </div>

                {/* <div className='flex items-end justify-end mx-3 mt-3'>
                    <div className='flex bg-blue-500 text-white cursor-pointer px-2 py-1' onClick={() => { handlePrint() }}>
                        <FaPrint size={15} />
                        <h1 className='text-sm mx-1'>Print</h1>
                    </div>
                </div> */}
                <div className='flex w-full'>
                    <StockReportTbl />
                </div>





            </div>




        </div>
    )
}

export default StockRpt