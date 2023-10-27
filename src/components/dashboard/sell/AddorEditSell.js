import React, { useRef, useState, useEffect } from 'react'
import { FaCalendar, FaChevronCircleDown, FaGift, FaInfo, FaInfoCircle, FaMapMarker, FaMinus, FaMoneyBillAlt, FaPlus, FaPlusCircle, FaSearch, FaTable, FaTimes, FaTrash, FaUser, FaUserSecret } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineSearch, AiTwotoneFolderOpen } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import AddProduct from '../Product/AddorEditProduct'
import AddorEditContact from "../contacts/AddorEditContact"
import ImportProduct from '../Product/ImportProduct'
import axios from 'axios';
import { useNavigate } from "react-router-dom"


const AddorEditSell = () => {
    const Navigate = useNavigate();

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
    const [productsData, setProductsData] = useState([]);
    // const [customersData, setCustomersData] = useState([]);
    const [spgsData, setSPGsData] = useState([]);
    const [usersData, setUsersData] = useState([]);
    // const [unitsData, setUnitsData] = useState([]);


    const [inputValue, setInputValue] = useState('')
    const [inputValue1, setInputValue1] = useState('')

    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)

    const [selected, setSelected] = useState('')
    const [addExpenses, setAddExpenses] = useState(false)
    const [isAddSupplier, setIsAddSupplier] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [info2, setInfo2] = useState(false)
    const [info3, setInfo3] = useState(false)
    const [info4, setInfo4] = useState(false)

    const [formData, setFormData] = useState({
        customer: "",
        invoiceNo: "",
        salesDate: "",
        status: "",
        invoiceSchema: "",
        sellingPrice: "",
        // tables: "",
        // serviceStaff: "",
        businesLocation: "",
        inputData: [],
        payTerm: "",
        // payTerm1: "",
        discountType: "",
        discountAmount: 0,
        // redeemed: "",
        // available: "",
        // redeemedAmount: "",
        discount: 0,

        orderTaxType: "",
        orderTax: 0,
        sellNotes: "",

        shippingDetails: "",
        shippingAddress: "",
        shippingCharges: 0,
        shippingStatus: "",
        deliveredTo: "",
        deliveryPerson: "",

        additionalExpenseName: "",
        additionalExpenseAmount: 0,
        additionalExpenseName1: "",
        additionalExpenseAmount1: 0,
        additionalExpenseName2: "",
        additionalExpenseAmount2: 0,
        additionalExpenseName3: "",
        additionalExpenseAmount3: 0,
        amount: "",
        paymentDate: "",
        paymentMethod: "",
        paymentAccount: "",
        paymentNote: ""

    })
    const params = useParams()
    const id = params.id
    const type = params.type
    // console.log(params.type)



    const handleChange = (e, index) => {
        const updatedData = formData.inputData.map((item, ind) => {
            if (ind === index) {
                // Create a new copy of the item with the modified subItem
                return {
                    ...item, [e.target.name]: e.target.value
                };
            }
            return item;
        });
        // console.log(updatedData)
        setFormData({ ...formData, inputData: updatedData });
    }

    const handleIncDec = (index, type) => {
        const val = formData.inputData
        if (type === "Inc") {
            val[index].quantity += 1
        } else {
            val[index].quantity -= 1
        }
        setFormData({ ...formData, inputData: val })
    }
    const deleteByIndex = (index) => {
        let newArray = [...formData.inputData]
        newArray.splice(index, 1)
        setFormData({ ...formData, inputData: newArray })
    }
    const subtotal = (q, p, d, dt) => {
        let total = 0
        if (dt === "Percentage") {
            total = (q * p) - (d / 100) * (q * p)
            return total
        } else if (dt === "Fixed") {
            total = (q * p) - d
            return total
        }else{
            total = q*p
            return total
        }
    }
    const findTotal = () => {
        let total = 0
        formData.inputData.map(val => {
            return total += val.subtotal
        })
        return total
    }
    const total = findTotal()

    const [isserror, setIsserror] = useState(false)

    const inpuRef = useRef()
    const inpuRef1 = useRef()


    const [isCliked, setIsCliked] = useState(false)
    const [newProduct, setNewProduct] = useState(false)
    const [isProductUpload, setIsProductUpload] = useState(false)
    const displayData = () => {
        if (newProduct === true) {
            return <AddProduct />
        } else if (isProductUpload === true) {
            return <ImportProduct />
        } else if (isAddSupplier === true) {
            return <AddorEditContact id={0} />
        }
    }

    const fetchSaleById = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/sales/${type}/${id}`);
            // console.log(response)
            setFormData(response.data);
        } catch (error) {
            console.error('Error fetching sale:', error);
        }
    };
    const fetchProducts = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/products`);
            // console.log(response)
            setProductsData(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    //   const fetchCustomers = async () => {

    //     try {
    //       // const token = localStorage.getItem('token');
    //       const response = await axios.get(`http://localhost:8000/admin/contacts/customer`);
    //       // console.log(response)
    //       setCustomersData(response.data);
    //     } catch (error) {
    //       console.error('Error fetching customers:', error);
    //     }
    //   };
    const fetchSPGs = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/selling-price-groups`);
            // console.log(response)


            setSPGsData(response.data);
        } catch (error) {
            console.error('Error fetching SPGs:', error);
        }
    };

    const fetchUsers = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/users`);
            // console.log(response)
            setUsersData(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    // const fetchUnitsById = async () => {

    //     try {
    //         // const token = localStorage.getItem('token');
    //         const response = await axios.get(`http://localhost:8000/admin/units/${_id}`);
    //         // console.log(response)
    //         setData(response.data);

    //     } catch (error) {
    //         console.error('Error fetching Selling price Group:', error);
    //     }
    // };
    const addSale = async () => {

        try {
            // const token = localStorage.getItem('token');
            // console.log(finalFormData)
            const response = await axios.post(`http://localhost:8000/admin/sales/${type}`, formData);
            console.log(response)
            if (response.status === 201 && type === "draft") {
                Navigate("/home/draft");

            }
            else if (response.status === 201 && type === "quotations") {
                Navigate("/home/quotations");

            }
            else {
                Navigate("/home/sells");

            }
        } catch (error) {
            console.error('Error Adding Sale:', error);
        }
    };

    const addSaleById = async () => {

        try {
            // const token = localStorage.getItem('token');
            // console.log(finalFormData)
            const response = await axios.put(`http://localhost:8000/admin/sales/${type}/${id}`, formData);
            console.log(response)
            if (response.status === 200 && type === "draft") {
                Navigate("/home/draft");

            }
            else if (response.status === 200 && type === "quotations") {
                Navigate("/home/quotations");

            }
            else {
                Navigate("/home/sells");

            }
        } catch (error) {
            console.error('Error Adding Sale:', error);
        }
    };
    useEffect(() => {
        // Make an API call to fetch SPG's records
        if (id) {
            fetchSPGs()
            fetchProducts()
            fetchUsers()
            fetchSaleById();
        }
        else {
            fetchSPGs()
            fetchProducts()
            fetchUsers()
        }
    }, [])
    const handleClick = (e) => {

        if (formData.customer.length === 0 ||

            formData.status.length === 0 ||

            formData.amount.length === 0) {
            setIsserror(true)
            console.log(isserror)
        } else if (id) {
            addSaleById()
            console.log("Handle Update", formData)
        } else {
            addSale()
            console.log("Handle Save", formData)
        }
    }

    return (
        <div className='w-full p-5 bg-gray-100'>
            <h1 className='text-xl text-start font-bold '>{id ? `Edit ${type ? type : "Sale"}` : `Add ${type ? type : "Sale"}`}</h1>
            <div className='flex my-3 w-full md:w-1/3 relative'>
                < FaMapMarker size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                <select value={formData.businesLocation} onChange={(e) => { setFormData({ ...formData, businesLocation: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                    <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>
                </select>
                <div className='flex items-center border-[1px] border-gray-400'>
                    <FaInfoCircle onMouseOver={() => { setInfo3(true) }} onMouseLeave={() => { setInfo3(false) }} size={15} style={{ color: "skyblue" }} className='mx-2  cursor-help' />
                    {info3 &&
                        <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                            <p className='text-start mt-2 text-gray-600'>Business Location from where you want to sell</p>

                        </div>
                    }
                </div>



            </div>
            <div className='flex w-full  min-h-[300px] flex-col p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600'>
                <div className='flex my-2 w-full md:w-1/3 relative'>
                    < FaUser size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                    <input
                        onClick={() => setOpen1(!open1)}
                        className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  border-[1px] border-gray-600'
                        value={formData.sellingPrice}
                        onChange={(e) => { setFormData({ ...formData, sellingPrice: e.target.value }) }}
                        placeholder='Select Value'
                    />
                    <BiChevronDown size={20} className={`${open && "rotate-180"} absolute top-1 right-8`} />

                    <div className='flex items-center border-[1px] border-gray-400'>
                        <FaInfoCircle onMouseOver={() => { setInfo4(true) }} onMouseLeave={() => { setInfo4(false) }} size={15} style={{ color: "skyblue" }} className='mx-2  cursor-help' />
                        {info4 &&
                            <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                                <p className='text-start mt-2 text-gray-600'>Selling price group in which you want to sell</p>

                            </div>
                        }
                    </div>


                    {open1 &&
                        <ul

                            className={`bg-white  w-[278px] mx-[30px] border-[1px] z-10 absolute top-8 border-gray-600 overflow-y-auto ${open1 ? "max-h-60" : "max-h-0"} `}
                        >
                            <div className="flex items-center px-2 sticky top-0 bg-white">
                                <AiOutlineSearch size={18} className="text-gray-700" />
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                    className="placeholder:text-gray-700 p-1 outline-none border-[1px] border-gray-500"
                                />
                            </div>
                            {spgsData?.map((data) => (
                                <li
                                    key={data?._id}
                                    className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                        ${data?.name?.toLowerCase() === formData.sellingPrice?.toLowerCase() &&
                                        "bg-sky-600 text-white"
                                        }
                                         ${data?.name?.toLowerCase().startsWith(inputValue)
                                            ? "block"
                                            : "hidden"
                                        }`}
                                    onClick={() => {
                                        if (data?.name?.toLowerCase() !== formData.sellingPrice.toLowerCase()) {

                                            setFormData({ ...formData, sellingPrice: data?._id });
                                            setOpen1(false);
                                            setInputValue("");
                                        }
                                    }}
                                >
                                    {data?.name}
                                </li>
                            ))}
                        </ul>
                    }
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-4'>
                    <div className='flex flex-col'>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Customer:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.customer.length === 0 ? "Required field" : ""}</h2>
                        </div>
                        <div className='flex flex-col relative'>
                            <div className='flex'>
                                < FaUser size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                <input
                                    onClick={() => setOpen(!open)}
                                    className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  border-[1px] border-gray-600'
                                    value={formData.customer}
                                    onChange={(e) => { setFormData({ ...formData, customer: e.target.value }) }}
                                    placeholder='Select Value'
                                />
                                <BiChevronDown size={20} className={`${open && "rotate-180"} absolute top-1 right-7`} />

                                <FaPlusCircle onClick={() => { setIsAddSupplier(true); setIsCliked(true) }} size={20} style={{ color: "blue" }} className='w-8 h-8 p-1 border-[1px] border-gray-600' />

                            </div>
                            {open &&
                                <ul

                                    className={`bg-white  w-[278px] mx-[30px] border-[1px] absolute top-8 border-gray-600 overflow-y-auto ${open ? "max-h-60" : "max-h-0"} `}
                                >
                                    <div className="flex items-center px-2 sticky top-0 bg-white">
                                        <AiOutlineSearch size={18} className="text-gray-700" />
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
                                        ${data?.Name?.toLowerCase() === formData.customer?.toLowerCase() &&
                                                "bg-sky-600 text-white"
                                                }
                                         ${data?.Name?.toLowerCase().startsWith(inputValue)
                                                    ? "block"
                                                    : "hidden"
                                                }`}
                                            onClick={() => {
                                                if (data?.Name?.toLowerCase() !== formData.customer.toLowerCase()) {
                                                    setFormData({ ...formData, customer: data?.Name });
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
                        <div className='flex mx-2'>
                            <h1 className='text-start font-bold'>Pay Term:</h1>
                            <FaInfoCircle onMouseOver={() => { setInfo2(true) }} onMouseLeave={() => { setInfo2(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                            {info2 &&
                                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                                    <p className='text-start mt-2 text-gray-800'>Payments to be paid for purchase/sales within the given time period.</p>
                                    <p className='text-start mt-2 text-xs text-gray-600'>All Upcoming or due payments will be displayed in Dashboard - payments-due section.</p>

                                </div>
                            }
                        </div>
                        <div className='flex'>
                            <input value={formData.payTerm} onChange={(e) => { setFormData({ ...formData, payTerm: e.target.value }) }} type='text' placeholder='Salary' className='px-2 py-[3px] w-1/2 border-[1px] border-gray-600 focus:outline-none' />
                            <select value={formData.payTerm1} onChange={(e) => { setFormData({ ...formData, payTerm1: e.target.value }) }} type='text' className='px-2 py-[3px] w-1/2 border-[1px] border-gray-600 focus:outline-none'>
                                <option value={""}>Please Select</option>
                                <option value={"Months"}>Months</option>
                                <option value={"Days"}>Days</option>
                            </select>

                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Sale Date:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.salesDate.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaCalendar size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <input value={formData.salesDate} onChange={(e) => { setFormData({ ...formData, salesDate: e.target.value }) }} type='Date' placeholder='Select Date Time' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-4'>
                    <div className='flex flex-col mt-2'>
                        <h1 className='flex text-sm text-start font-bold'>Billing Address:</h1>
                        <h1 className=' text-sm text-start '>Walk-in Customer</h1>
                    </div>

                    <div className='flex flex-col '>
                        <div className='flex mx-2'>
                            <div className='text-start font-bold'>
                                <h1>Status:*</h1>
                                <h2 className='text-red-400'>{isserror && formData.status.length === 0 ? "Required field" : ""}
                                </h2>
                            </div>


                        </div>
                        <select value={formData.status} onChange={(e) => { setFormData({ ...formData, status: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>Please Selecet</option>
                            <option value={"Final"}>Final</option>
                            <option value={"Draft"}>Draft</option>
                            <option value={"Quotation"}>Quotation</option>
                            <option value={"Proforma"}>Proforma</option>
                        </select>

                    </div>
                    {!id === 0 &&
                        <div className='flex flex-col '>
                            <div className='flex mx-2'>
                                <h1 className='text-start font-bold'>Invoice Schema:*</h1>

                            </div>
                            <select value={formData.invoiceSchema} onChange={(e) => { setFormData({ ...formData, invoiceSchema: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                <option value={""}>Please Selecet</option>
                                <option value={"Default"}>Default</option>

                            </select>

                        </div>
                    }


                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-4'>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Address:</h1>
                        <h1 className=' text-sm text-start '>Walk-in Customer</h1>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start font-bold'>Invoice No:</h1>
                        <input value={formData.invoiceNo} onChange={(e) => { setFormData({ ...formData, invoiceNo: e.target.value }) }} type='Text' placeholder='Invoice No' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        <h1 className='flex text-sm text-start '>Keep Blank to autogenerate</h1>

                    </div>


                    <div className=' flex flex-col '>
                        <h2 className='text-start font-bold '> Attatch Document:</h2>
                        <div className='flex'>
                            {/* value={formData.img_data} onChange={ (e)=>setFormData({...formData,  img_data: e.target.value})} */}
                            <input type='text' className='px-3  border-[1px] border-gray-700  focus:outline-none w-[60%]' />
                            <input className='px-3   focus:outline-none w-[60%] hidden' type='file' ref={inpuRef} accept='application/pdf,text/csv,application/zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/jpg,image/png' />
                            <div onClick={() => { inpuRef.current?.click(); }} className='flex cursor-pointersu bg-blue-600 text-white w-[40%] items-center justify-center'>
                                <AiTwotoneFolderOpen size={32} />
                                Browse
                            </div>
                        </div>
                        <p className='text-start  flex '>Max File size: 5MB:
                            <br />
                            Allowed File: .pdf, .csv, .zip,	.doc, .docx, .jpeg,	.jpg, .png
                        </p>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-4'>

                    <div className='flex '>
                        < FaTable size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                        <select value={formData.tables} onChange={(e) => { setFormData({ ...formData, tables: e.target.value }) }} type='text' className='px-2 w-full py-[3px]  border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>Please Select</option>
                            <option value={"woo"}>woo</option>
                            <option value={"pepsi"}>pepsi</option>
                        </select>
                    </div>
                    <div className='flex '>
                        < FaUserSecret size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                        <select value={formData.serviceStaff} onChange={(e) => { setFormData({ ...formData, serviceStaff: e.target.value }) }} type='text' className='px-2 w-full py-[3px]  border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>Select Service Staff</option>

                        </select>
                    </div>

                </div>
            </div>
            <div className='flex  w-full   flex-col  p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600'>
                <div className='flex flex-col items-center justify-center md:flex-row w-full'>
                    <div className='flex md:w-[60%] mt-4 md:mt-0'>
                        <div className='flex w-full   md:mt-0 relative'>
                            <div className='flex w-full'>
                                < FaSearch size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                <input onClick={() => { setIsClicked(!isClicked) }} value={inputValue1} onChange={(e) => { setInputValue1(e.target.value) }} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 w-full py-[2px] border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            {isClicked &&
                                <ul

                                    className={`bg-white w-full    border-[1px]   z-10 absolute top-8 border-gray-600  ${isClicked ? "max-h-60" : "max-h-0"} `}
                                >

                                    {productsData?.map((data) => (
                                        <li
                                            key={data?._id}
                                            className={`p-1 px-9 text-start text-sm hover:bg-sky-600 hover:text-white
                                ${data?.productName?.toLowerCase() === inputValue1?.toLowerCase() &&
                                                "bg-sky-600 text-white"
                                                }
                                 ${data?.productName?.toLowerCase().startsWith(inputValue)
                                                    ? "block"
                                                    : "hidden"
                                                }`}
                                            onClick={() => {
                                                if (data?.productName?.toLowerCase() !== inputValue1.toLowerCase()) {
                                                    setInputValue1(data?.productName)
                                                    // let name = data?.productName
                                                    let array = formData.inputData
                                                    // let _id = data?._id
                                                    array = [...array, { product: data?._id, quantity: 0, unitPrice: 0, discount: 0, subtotal: 0 }]
                                                    setFormData({ ...formData, inputData: array })
                                                    setInputValue1('')
                                                    setIsClicked(!isClicked);
                                                }
                                            }}
                                        >
                                            {data?.productName}
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                        <FaPlusCircle onClick={() => { setNewProduct(true); setIsCliked(true) }} size={20} style={{ color: "blue" }} className='w-8 h-8 p-1 border-[1px] border-gray-600' />

                    </div>

                </div>
                <div className='flex overflow-x-scroll  mt-5 ' >
                    <table className="table-auto  mb-2 w-full  px-5 ">
                        <thead>
                            <tr className='h-[50px]'>
                                <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">Product</th>
                                <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">Quantity</th>
                                <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">Unit Price</th>
                                <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">Discount </th>
                                <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">Subtotal</th>
                                <th className=" py-2 title-font  tracking-wider font-bold  text-sm "><FaTrash size={15} /> </th>

                            </tr>
                        </thead>
                        <tbody >
                            {formData.inputData.map((value, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-200" : ""} `}>
                                    <td className=" py-1 px-1">
                                        <div className='flex flex-col'>
                                            <p className='text-start'>{value.productName}</p>
                                            <textarea rows={2} type='text' name="info" value={value.info} onChange={(e) => { handleChange(e, index) }} className='border-[1px] w-3/4 px-1 border-black focus:outline-none' />
                                            <h1 className='text-xs text-start text-gray-500'>Add product IMEI, Serial number or other informations here.</h1>
                                        </div>
                                    </td>
                                    <td className="px-1 py-1 text-sm">
                                        <div className='flex flex-col'>
                                            <div className='flex'>
                                                <FaMinus onClick={() => { handleIncDec(index, "Dec") }} size={15} className='border-[1px] h-8 text-red-400 w-1/6 p-1 border-black' />
                                                <input type='number' name="quantity" value={value.quantity} onChange={(e) => { handleChange(e, index) }} className='border-[1px] w-4/6 px-1 py-1 border-black focus:outline-none' />                                                <FaPlus onClick={() => { handleIncDec(index, "Inc") }} size={15} className='border-[1px] h-8 w-1/6 p-1 text-green-400 border-black' />

                                            </div>
                                            <select name="unit" value={value.unit} onChange={(e) => { handleChange(e, index) }} className='border-[1px] mt-2 w-full px-1 py-1 border-black focus:outline-none'>
                                                <option value={"Litter"}>Litter</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td className="px-1 py-1">
                                        <div className='flex flex-col'>
                                            <input name="unitPrice" type='number' value={value.unitPrice} onChange={(e) => handleChange(e, index)} className='border-[1px] w-full px-1 py-1 border-black focus:outline-none' />
                                            <h1 className='text-xs mt-3 text-gray-500'>Previous Unit Price:  Rs. {20.50}</h1>

                                        </div>
                                    </td>
                                    <td className="px-1 py-1">
                                        <div className='flex flex-col'>
                                            <input name="discount" type='number' value={value.discount} onChange={(e) => handleChange(e, index)} className='border-[1px] w-full px-1 py-1 border-black focus:outline-none' />
                                            <select name="discountType" value={value.discountType} onChange={(e) => { handleChange(e, index) }} className='border-[1px] mt-2 w-full px-1 py-1 border-black focus:outline-none'>
                                                <option value={"Fixed"}>Fixed</option>
                                                <option value={"Percentage"}>Percentage</option>

                                            </select>

                                        </div>
                                    </td>

                                    <td className=" py-1 px-1 text-start">
                                        <input name="subtotal" type='number' value={value.subtotal = subtotal(value.quantity, value.unitPrice, value.discount, value.discountType)} onChange={(e) => handleChange(e, index)} className='border-[1px] w-3/4 px-1 border-black focus:outline-none' />
                                    </td>
                                    <td className="px-1 py-1 ">
                                        <FaTimes size={15} onClick={() => { deleteByIndex(index) }} className='cursor-pointer text-red-400' />
                                    </td>
                                </tr>
                            })}


                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
                <div className='w-full h-[1px] bg-black mt-5'></div>
                <div className='flex flex-col items-end mt-5 justify-end'>
                    <div className='flex '>
                        <h1 className='font-bold mx-2'>Total Items</h1>
                        <h1 className=' mx-2'> {formData.inputData.length}.00</h1>

                    </div>
                    <div className='flex '>
                        <h1 className='font-bold mx-2'>Net Total Amount</h1>
                        <h1 className=' mx-2'> {total}</h1>

                    </div>
                </div>
            </div>
            <div className='flex  w-full   flex-col  p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Discount Type:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.discountType.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaInfo size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <select value={formData.discountType} onChange={(e) => { setFormData({ ...formData, discountType: e.target.value }) }} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none'>
                                <option value={""}>None</option>
                                <option value={"Fixed"}>Fixed</option>
                                <option value={"Percentage"}>Percentage</option>

                            </select>
                        </div>

                    </div>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Discount Amount:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.discountAmount.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaInfo size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <input value={formData.discountAmount} onChange={(e) => { setFormData({ ...formData, discountAmount: e.target.value }) }} type='number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>

                    </div>
                    <div className='flex flex-col items-end'>
                        <h1 className='flex text-sm  font-bold'>Discount <p className='mx-2'>(-) {formData.discount}</p> </h1>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 border-[1px] border-gray-300 p-3'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Redeemed:</h1>
                        <div className='flex'>
                            < FaGift size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <input disabled="disabled" value={formData.redeemed} onChange={(e) => { setFormData({ ...formData, redeemed: e.target.value }) }} type='number' className='px-2 cursor-not-allowed py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>

                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Available:</h1>
                        <h1 className=' text-sm text-start '>{formData.available}</h1>

                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm  font-bold'>Redeemed Amount <p className='mx-2'>(-) Rs {formData.redeemedAmount}</p> </h1>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-gray-300 my-5'></div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Order Tax:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.orderTaxType.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaInfo size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <select value={formData.orderTaxType} onChange={(e) => { setFormData({ ...formData, orderTaxType: e.target.value }) }} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none'>
                                <option value={""}>None</option>
                                <option value={"sss"}>sss</option>f
                                <option value={"Nikki Wolf"}>Nikki Wolf</option>
                                <option value={"Nikki Wolf"}>Nikki Wolf</option>
                                <option value={"Pepsi"}>Pepsi</option>

                            </select>
                        </div>

                    </div>
                    <div className='flex flex-col '>

                    </div>
                    <div className='flex flex-col items-end'>
                        <h1 className='flex text-sm  font-bold'>Order Tax <p className='mx-2'>(+) {formData.orderTax}</p> </h1>

                    </div>
                </div>
                <div className='w-full h-[1px] bg-gray-300 my-5'></div>
                <div className='w-full flex flex-col'>
                    <h1 className='flex text-sm  font-bold'>Sell Note</h1>

                    <textarea rows={4} value={formData.sellNotes} onChange={(e) => { setFormData({ ...formData, sellNotes: e.target.value }) }} className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>
            </div>
            <div className='flex  w-full   flex-col  p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Detials:</h1>
                        <textarea rows={4} value={formData.shippingDetails} onChange={(e) => { setFormData({ ...formData, shippingDetails: e.target.value }) }} placeholder='Shipping Details' type='Text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Address:</h1>
                        <textarea rows={4} value={formData.shippingAddress} onChange={(e) => { setFormData({ ...formData, shippingAddress: e.target.value }) }} placeholder='Shipping Details' type='Text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Charges:</h1>
                        <input value={formData.shippingCharges} onChange={(e) => { setFormData({ ...formData, shippingCharges: e.target.value }) }} type='number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Status:</h1>

                        <select value={formData.shippingStatus} onChange={(e) => { setFormData({ ...formData, shippingStatus: e.target.value }) }} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>Please Selecet</option>
                            <option value={"Ordered"}>Ordered</option>f
                            <option value={"Packed"}>Packed</option>
                            <option value={"Shipped"}>Shipped</option>
                            <option value={"Delivered"}>Delivered</option>
                            <option value={"Cancelled"}>Cancelled</option>

                        </select>

                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Delivery Person:</h1>

                        <select value={formData.deliveryPerson} onChange={(e) => { setFormData({ ...formData, deliveryPerson: e.target.value }) }} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>Please Selecet</option>
                            <option value={"Demo Admin"}>Demo Admin</option>f
                            <option value={"Ismail Shah"}>Ismail Shah</option>f
                        </select>
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Delivered to:</h1>
                        <input value={formData.deliveredTo} onChange={(e) => { setFormData({ ...formData, deliveredTo: e.target.value }) }} placeholder='Delivered to' type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>
                    <div className=' flex flex-col '>
                        <h2 className='text-start font-bold '> Shipping Documents:</h2>
                        <div className='flex'>
                            {/* value={formData.img_data} onChange={ (e)=>setFormData({...formData,  img_data: e.target.value})} */}
                            <input type='text' className='px-3  border-[1px] border-gray-700  focus:outline-none w-[60%]' />
                            <input className='px-3  focus:outline-none w-[60%] hidden' type='file' ref={inpuRef1} accept='application/pdf,text/csv,application/zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/jpg,image/png' />
                            <div onClick={() => { inpuRef1.current?.click(); }} className='flex cursor-pointersu bg-blue-600 text-white w-[40%] items-center justify-center'>
                                <AiTwotoneFolderOpen size={32} />
                                Browse
                            </div>
                        </div>
                        <p className='text-start  flex '>Max File size: 5MB:
                            <br />
                            Allowed File: .pdf, .csv, .zip,	.doc, .docx, .jpeg,	.jpg, .png
                        </p>

                    </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div onClick={() => { setAddExpenses(!addExpenses) }} className='flex w-[250px] px-2 py-2 items-center justify-center bg-blue-700 text-white'>
                        <FaPlus size={15} />
                        <h1 className='text-sm mx-1'> Add Additional Expenses</h1>
                        <FaChevronCircleDown size={15} className={`${addExpenses ? "rotate-180" : ""}`} />
                    </div>
                    {addExpenses &&
                        <div className='flex w-full md:w-1/2 justify-center '>
                            <div className='grid grid-cols-2 gap-2'>
                                <h1 className='text-sm mx-1 font-bold'> Additional Expense Name</h1>
                                <h1 className='text-sm mx-1 font-bold'> Amount</h1>
                                <input value={formData.additionalExpenseName} onChange={(e) => { setFormData({ ...formData, additionalExpenseName: e.target.value }) }} type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                <input value={formData.additionalExpenseAmount} onChange={(e) => { setFormData({ ...formData, additionalExpenseAmount: e.target.value }) }} type='number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                <input value={formData.additionalExpenseName1} onChange={(e) => { setFormData({ ...formData, additionalExpenseName1: e.target.value }) }} type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                <input value={formData.additionalExpenseAmount1} onChange={(e) => { setFormData({ ...formData, additionalExpenseAmount1: e.target.value }) }} type='number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                <input value={formData.additionalExpenseName2} onChange={(e) => { setFormData({ ...formData, additionalExpenseName2: e.target.value }) }} type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                <input value={formData.additionalExpenseAmount2} onChange={(e) => { setFormData({ ...formData, additionalExpenseAmount2: e.target.value }) }} type='number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                <input value={formData.additionalExpenseName3} onChange={(e) => { setFormData({ ...formData, additionalExpenseName3: e.target.value }) }} type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                                <input value={formData.additionalExpenseAmount3} onChange={(e) => { setFormData({ ...formData, additionalExpenseAmount3: e.target.value }) }} type='number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                            </div>
                        </div>

                    }
                </div>
                <div className='flex items-end justify-end mt-5'>
                    <div className='flex '>
                        <h1 className='font-bold mx-2'>Purchase Total:</h1>
                        <h1 className=' mx-2'>Rs 0.00</h1>

                    </div>
                </div>

            </div>

            <div className='flex  w-full   flex-col  p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600'>
                <h1 className='flex text-sm text-start font-bold mb-5'>Add Payment</h1>

                <h1 className='flex text-sm text-start font-bold'>Advance Balance: <p className='mx-2'> 0</p></h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Amount:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.amount.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <input value={formData.amount} onChange={(e) => { setFormData({ ...formData, amount: e.target.value }) }} type='number' placeholder='Select Date Time' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>

                    </div>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Paid On :*</h1>
                            <h2 className='text-red-400'>{isserror && formData.paymentDate.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaCalendar size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <input value={formData.paymentDate} onChange={(e) => { setFormData({ ...formData, paymentDate: e.target.value }) }} type='Date' placeholder='Select Date Time' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>


                    </div>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Payment method:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.paymentMethod.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <select value={formData.paymentMethod} onChange={(e) => { setFormData({ ...formData, paymentMethod: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                <option value={""}>Please Selecet</option>
                                <option value={"Advance"}>Advance</option>
                                <option value={"Cash"}>Cash</option>
                                <option value={"Card"}>Card</option>
                                <option value={"Checque"}>Checque</option>
                                <option value={"Bank Transfer"}>Bank Transfer</option>
                                <option value={"Other"}>Other</option>
                                <option value={"Easypais"}>Easypais</option>
                                <option value={"Custom Payment 6"}>Custom Payment 6</option>

                            </select>
                        </div>

                    </div>
                    <div className='flex flex-col '>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Payment Account:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.paymentAccount.length === 0 ? "Required field" : ""}</h2>

                        </div>
                        <div className='flex'>
                            < FaMoneyBillAlt size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <select value={formData.paymentAccount} onChange={(e) => { setFormData({ ...formData, paymentAccount: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                                <option value={""}>None</option>
                                <option value={"Test Account"}>Test Account</option>
                                <option value={"Askari Bank"}>Askari Bank</option>
                                <option value={"asd"}>asd</option>

                            </select>
                        </div>

                    </div>

                </div>
                <div className='w-full flex flex-col mt-3'>
                    <h1 className='flex text-sm  font-bold'>Payment Note:</h1>

                    <textarea rows={4} value={formData.paymentNote} onChange={(e) => { setFormData({ ...formData, paymentNote: e.target.value }) }} className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>
                <div className='w-full h-[1px] bg-black my-5'></div>
                <div className='flex flex-col items-start'>
                    <h1 className='font-bold mx-2'>Change Return:</h1>
                    <h1 className='font-bold text-xl mx-2'>Rs 0.00:</h1>

                </div>
                <div className='w-full h-[1px] bg-black my-5'></div>

                <div className='flex items-end justify-end mt-5'>
                    <div className='flex '>
                        <h1 className='font-bold mx-2'>Payment Due:</h1>
                        <h1 className=' mx-2'>Rs 0.00</h1>

                    </div>
                </div>

            </div>


            <div className='flex items-end justify-end mt-5'>
                <button onClick={handleClick} className='bg-green-500 px-2 py-2 items-center justify-center flex'>{id ? "Update" : "Save"}</button>
            </div>
            {isCliked &&
                <div className='absolute top-0 flex flex-col items-center  justify-center right-0 bg-black/70 w-full min-h-screen'>
                    <div className="w-full md:w-[70%]">
                        <div onClick={() => { setIsCliked(false); setIsAddSupplier(false); setNewProduct(false); setIsProductUpload(false); }} className=' flex items-end justify-end  w-full mt-10 bg-white px-5 pt-2'>
                            <MdCancel size={20} />

                        </div>
                        {displayData()}
                    </div>
                </div>

            }
        </div>
    )
}

export default AddorEditSell