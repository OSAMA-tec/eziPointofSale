import React, { useRef, useState } from 'react'
import { FaArrowDown, FaCalendar, FaChevronCircleDown, FaInfoCircle, FaMoneyBillAlt, FaPlus, FaPlusCircle, FaSearch, FaTimes, FaTrash, FaUser } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineSearch, AiTwotoneFolderOpen } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import AddProduct from '../Product/AddProduct'
import AddorEditContact from "../contacts/AddorEditContact"
import ImportProduct from '../Product/ImportProduct'

const AddorEditPurchase = () => {
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
    const [inputValue, setInputValue] = useState('')
    const [open, setOpen] = useState(false)
    const [addExpenses, setAddExpenses] = useState(false)
    const [isAddSupplier, setIsAddSupplier] = useState(false)
    const [info, setInfo] = useState(false)
    const [info1, setInfo1] = useState(false)
    const [info2, setInfo2] = useState(false)
    const [formData, setFormData] = useState({
        supplier: "",
        referenceNo: "",
        purchaseDate: "",
        businesLocation: "",
        payTerm: "",
        purchaseOrder: "",
        discountType: "",
        discountAmount: 0,
        discount: 0,
        purchaseTaxType: "",
        purchaseTax: 0,
        additionalNotes: "",
        shippingDetails: "",
        additionalShippingCharges: 0,
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
        paymentAccount: "",
        paymentMethod: "",
        documents: "",

    })
    const [isserror, setIsserror] = useState(false)
    const inpuRef = useRef()
    const params = useParams()
    const id = params.id
    console.log(id)
    const [isCliked, setIsCliked] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [inputValue1, setInputValue1] = useState('')
    const [productName, setProductName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [unitCostBeforeDiscount, setUnitCostBeforeDiscount] = useState(0)
    const [discountPercent, setDiscountPercent] = useState(0)
    const [unitConstBeforeTax, setUnitConstBeforeTax] = useState(0)
    const [profitMarginPercentage, setProfitMarginPercentage] = useState(0)
    const [unitSellingPrice, setUnitSellingPrice] = useState(0)
    const [lotNumber, setLotNumber] = useState(0)
    const [newProduct, setNewProduct] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const [selectedRow, setSelectedRow] = useState(-1)
    const [inputData, setInputData] = useState([])

    const [isProductUpload, setIsProductUpload] = useState(false)
    const AddToArray = () => {
        if (isUpdate === true && selectedRow !== -1) {
            let newArray = inputData
            let lineTotal = 0
            lineTotal = quantity * unitConstBeforeTax
            newArray[selectedRow] = { productName, quantity, unitCostBeforeDiscount, discountPercent, unitConstBeforeTax, lineTotal, profitMarginPercentage, unitSellingPrice, lotNumber }
            setInputData(newArray)
            setSelectedRow(-1)
            setIsUpdate(false)
            setProductName("")
            setLotNumber(0.00)
            setQuantity(0.00)
            setUnitConstBeforeTax(0)
            setUnitCostBeforeDiscount(0)
            setProfitMarginPercentage(0)
            setDiscountPercent(0)
            setUnitSellingPrice(0)

        } else {
            let lineTotal = 0
            lineTotal = quantity * unitConstBeforeTax
            setInputData(current => [...current, { productName, quantity, unitCostBeforeDiscount, discountPercent, unitConstBeforeTax, lineTotal, profitMarginPercentage, unitSellingPrice, lotNumber }])
            setProductName("")
            setLotNumber(0.00)
            setQuantity(0.00)
            setUnitConstBeforeTax(0)
            setUnitCostBeforeDiscount(0)
            setProfitMarginPercentage(0)
            setDiscountPercent(0)
            setUnitSellingPrice(0)

        }


    }

    const handleSelcetRow = (index) => {
        let newArray = inputData[index]
        console.log(newArray)

        setLotNumber(newArray.lotNumber)
        setProductName(newArray.productName)
        setQuantity(newArray.quantity)
        setUnitConstBeforeTax(newArray.unitConstBeforeTax)
        setUnitCostBeforeDiscount(newArray.unitCostBeforeDiscount)
        setProfitMarginPercentage(newArray.profitMarginPercentage)
        setDiscountPercent(newArray.discountPercent)
        setUnitSellingPrice(newArray.unitSellingPrice)

    }

    const deleteByIndex = (index) => {
        let newArray = [...inputData]
        newArray.splice(index, 1)
        setInputData(newArray)
    }

    const findTotal = () => {
        let total = 0
        inputData.map(val => {
            return total += val.lineTotal
        })
        return total
    }
    const total = findTotal()

    const handleClick = (e) => {

        if (id) {
            if (formData.supplier.length === 0 ||
                formData.purchaseDate.length === 0) {
                setIsserror(true)
            } else {

                console.log("Handle Update", formData)
            }
        } else {
            if (formData.supplier.length === 0 ||
                formData.purchaseDate.length === 0 ||
                formData.amount.length === 0 ||
                formData.paymentDate.length === 0 ||
                formData.paymentAccount.length === 0 ||
                formData.paymentMethod.length === 0) {
                setIsserror(true)
            } else {

                console.log("Handle Save", formData)
            }
        }
    }


    const displayData = () => {
        if (newProduct === true) {
            return <AddProduct />
        } else if (isProductUpload === true) {
            return <ImportProduct />
        } else if (isAddSupplier === true) {
            return <AddorEditContact id={0} />
        }
    }


    return (
        <div className='w-full p-5 bg-gray-100'>
            <h1 className='text-xl text-start font-bold '>{id ? "Edit Purchase" : "Add Purchase"}</h1>
            <div className='flex w-full  min-h-[300px] flex-col p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='flex flex-col'>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Supplier:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.supplier.length === 0 ? "Required field" : ""}</h2>
                        </div>
                        <div className='flex flex-col relative'>
                            <div className='flex'>
                                < FaUser size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                <input
                                    onClick={() => setOpen(!open)}
                                    className='bg-white w-full  flex items-center  focus:outline-none justify-between px-2  border-[1px] border-gray-600'
                                    value={formData.supplier}
                                    onChange={(e) => { setFormData({ ...formData, supplier: e.target.value }) }}

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
                    <div className='flex flex-col relative'>
                        <div className='flex mx-2'>
                            <h1 className='text-start font-bold'>Reference No:</h1>
                            <FaInfoCircle onMouseOver={() => { setInfo(true) }} onMouseLeave={() => { setInfo(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                            {info &&
                                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                                    <p className='text-start mt-2 text-gray-600'>Leave Empty to autogenerate</p>

                                </div>
                            }
                        </div>
                        <input value={formData.referenceNo} onChange={(e) => { setFormData({ ...formData, referenceNo: e.target.value }) }} type='text' placeholder='Reference No' className='px-2 py-1 border-[1px] border-gray-500' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex text-sm text-start font-bold'>
                            <h1>Purchase Date:*</h1>
                            <h2 className='text-red-400'>{isserror && formData.purchaseDate.length === 0 ? "Required field" : ""}</h2>
                        </div>
                        <div className='flex'>
                            < FaCalendar size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />

                            <input value={formData.purchaseDate} onChange={(e) => { setFormData({ ...formData, purchaseDate: e.target.value }) }} type='Date' placeholder='Select Date Time' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-4'>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start font-bold'>Address:</h1>
                        <h1 className=' text-sm text-start font-bold'>Address</h1>
                    </div>
                    <div className='flex flex-col relative'>
                        <div className='flex mx-2'>
                            <div className='flex text-sm text-start font-bold'>
                                <h1>Business Location:*</h1>
                                <FaInfoCircle onMouseOver={() => { setInfo1(true) }} onMouseLeave={() => { setInfo1(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                                <h2 className='text-red-400'>{isserror && formData.businesLocation.length === 0 ? "Required field" : ""}</h2>
                            </div>
                            {info1 &&
                                <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                                    <p className='text-start mt-2 text-gray-600'>Business Location where the purchased product will be available for sale.</p>

                                </div>
                            }
                        </div>
                        <select value={formData.businesLocation} onChange={(e) => { setFormData({ ...formData, businesLocation: e.target.value }) }} type="text" className='px-2 py-1 w-full border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>Please Selecet</option>
                            <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>
                        </select>

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
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-4'>
                    <div className='flex flex-col'>

                    </div>
                    <div className='flex flex-col'>


                    </div>


                    <div className=' flex flex-col '>
                        <h2 className='text-white text-start font-bold flex mb-1'> Attatch Document:</h2>
                        <div className='flex'>
                            {/* value={formData.img_data} onChange={ (e)=>setFormData({...formData,  img_data: e.target.value})} */}
                            <input value={formData.doucments} onChange={(e) => { setFormData({ ...formData, doucments: e.target.value }) }} type='text' className='px-3 py-1 border-[1px] border-gray-700  focus:outline-none w-[60%]' />
                            <input value={formData.doucments} onChange={(e) => { setFormData({ ...formData, doucments: e.target.value }) }} className='px-3 py-1 focus:outline-none w-[60%] hidden' type='file' ref={inpuRef} accept='application/pdf,text/csv,application/zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/jpg,image/png' />
                            <div onClick={() => { inpuRef.current?.click(); }} className='flex cursor-pointersu bg-blue-600 text-white w-[40%] items-center justify-center'>
                                <AiTwotoneFolderOpen size={32} />
                                Browse
                            </div>
                        </div>
                        <p className='text-start  flex mb-1'>Max File size: 5MB:
                            <br />
                            Allowed File: .pdf, .csv, .zip,	.doc, .docx, .jpeg,	.jpg, .png
                        </p>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-3 gap-4'>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start font-bold'>Purchase Order:</h1>
                        <input value={formData.contact_id} onChange={(e) => { setFormData({ ...formData, contact_id: e.target.value }) }} type='Text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>

                </div>
            </div>
            <div className='flex  w-full   flex-col  p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600'>
                <div className='flex flex-col md:flex-row mt-5 w-full items-center justify-center'>
                    <button onClick={() => { setIsCliked(true); setIsProductUpload(true) }} className='bg-blue-600 mt-4 md:mt-0 md:w-[15%] mx-[2.5%] text-white px-2 py-1' >Import Products</button>
                    <div className='flex flex-col   w-[50%] items-center justify-center'>
                        <div className='flex w-full   md:mt-0 relative'>
                            <div className='flex w-full'>
                                < FaSearch size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                                <input onClick={() => { setIsClicked(!isClicked) }} value={inputValue1} onChange={(e) => { setInputValue1(e.target.value) }} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 w-full py-[2px] border-[1px] border-gray-600 focus:outline-none' />
                            </div>
                            {isClicked &&
                                <ul

                                    className={`bg-white w-full    border-[1px]   z-10 absolute top-8 border-gray-600  ${isClicked ? "max-h-60" : "max-h-0"} `}
                                >

                                    {dummyData?.map((data) => (
                                        <li
                                            key={data?.Name}
                                            className={`p-1 px-9 text-start text-sm hover:bg-sky-600 hover:text-white
                                ${data?.Name?.toLowerCase() === inputValue1?.toLowerCase() &&
                                                "bg-sky-600 text-white"
                                                }
                                 ${data?.Name?.toLowerCase().startsWith(inputValue)
                                                    ? "block"
                                                    : "hidden"
                                                }`}
                                            onClick={() => {
                                                if (data?.Name?.toLowerCase() !== inputValue1.toLowerCase()) {
                                                    setInputValue1(data?.Name)
                                                    let name = data?.Name
                                                    setProductName(name)
                                                    setInputValue1('')
                                                    setIsClicked(!isClicked);
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
                    <button onClick={() => { setIsCliked(true); setNewProduct(true) }} className='flex mt-4 md:mt-0 md:w-[17%] mx-[1.5%] text-blue-600 underline'>
                        < FaPlus size={15} className='w-8 h-8 p-2 ' />
                        <p className='mx-1'> Add new Product</p>
                    </button>
                </div>
                <div className='grid grid-cols-5 md:grid-cols-9  gap-2 mt-4 items-center justify-center '>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-xs text-start'>Product Name</h1>
                        <input type='text' name="name" value={productName} readOnly className='border-[1px] border-black focus:outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-xs text-start'>Quantity</h1>
                        <input name="quantity" type='text' value={quantity} onChange={(e) => setQuantity(e.target.value)} className='border-[1px] border-black focus:outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-xs text-start'>Unit Cost (B.D)</h1>
                        <input name="quantity" type='text' value={unitCostBeforeDiscount} onChange={(e) => setUnitCostBeforeDiscount(e.target.value)} className='border-[1px] border-black focus:outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-xs  text-start'>Discount Percent</h1>
                        <input name="quantity" type='text' value={discountPercent} onChange={(e) => setDiscountPercent(e.target.value)} className='border-[1px] border-black focus:outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-xs text-start'>Unit Const (B.T)</h1>
                        <input name="quantity" type='text' value={unitConstBeforeTax} onChange={(e) => setUnitConstBeforeTax(e.target.value)} className='border-[1px] border-black focus:outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-xs text-start'>Profit Margin %</h1>
                        <input name="quantity" type='text' value={profitMarginPercentage} onChange={(e) => setProfitMarginPercentage(e.target.value)} className='border-[1px] border-black focus:outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-xs text-start'>Unit Selling Price</h1>
                        <input name="quantity" type='text' value={unitSellingPrice} onChange={(e) => setUnitSellingPrice(e.target.value)} className='border-[1px] border-black focus:outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-xs text-start'>Lot Number</h1>
                        <input type='text' name="lotNumber" value={lotNumber} onChange={(e) => setLotNumber(e.target.value)} className='border-[1px] border-black focus:outline-none' />
                    </div>



                    <div className='flex'>

                        <FaArrowDown onClick={AddToArray} size={20} style={{ color: "white", backgroundColor: "green" }} className='mx-3 w-1/3 h-10 mt-2' />
                    </div>
                </div>

                <div className='flex overflow-x-scroll  mt-5 ' >
                    <table className="table-auto    mb-2   px-5 ">
                        <thead>
                            <tr className='h-[50px] bg-green-500'>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">#</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Product Name</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Purchase Quantity</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Unit Cost (Before Discount)</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Discount Percent</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Unit Cost (Before Tax)</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Line Total</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Profit Margin %</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Unit Selling Price (Inc. tax)</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm ">Lot Number</th>
                                <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm "><FaTrash size={15} /> </th>

                            </tr>
                        </thead>
                        <tbody >
                            {inputData.map((value, index) => {
                                return <tr title='Double Click to Edit me' key={index} onDoubleClick={() => { setSelectedRow(index); setIsUpdate(true); handleSelcetRow(index); }} className={`${(index + 1) % 2 === 0 ? "bg-gray-200" : ""}`}>
                                    <td className=" py-1 px-1">{index + 1}</td>
                                    <td className=" py-1 px-1">{value.productName}</td>
                                    <td className="px-1 py-1 text-sm">{value.quantity}</td>
                                    <td className="px-1 py-1"> {value.unitCostBeforeDiscount}</td>
                                    <td className="px-1 py-1">{value.discountPercent}</td>
                                    <td className=" py-1 px-1">{value.unitConstBeforeTax}</td>
                                    <td className=" py-1 px-1">{value.lineTotal}</td>
                                    <td className="px-1 py-1 text-sm">{value.profitMarginPercentage}</td>
                                    <td className="px-1 py-1"> {value.unitSellingPrice}</td>
                                    <td className="px-1 py-1 text-sm">{value.lotNumber}</td>
                                    <td className="px-1 py-1 text-red-400"> <FaTimes size={15} onClick={() => { deleteByIndex(index) }} className='cursor-pointer' /> </td>
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
                        <h1 className=' mx-2'> {inputData.length}.00</h1>

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
                        <h1 className='flex text-sm text-start font-bold'>Discount Type:</h1>
                        <select value={formData.discountType} onChange={(e) => { setFormData({ ...formData, discountType: e.target.value }) }} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>None</option>
                            <option value={"Fixed"}>Fixed</option>
                            <option value={"Percentage"}>Percentage</option>

                        </select>

                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Discount Amount:</h1>
                        <input value={formData.discountAmount} onChange={(e) => { setFormData({ ...formData, discountAmount: e.target.value }) }} type='number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>
                    <div className='flex flex-col items-end'>
                        <h1 className='flex text-sm  font-bold'>Discount <p className='mx-2'>(-) {formData.discount}</p> </h1>

                    </div>
                </div>
                <div className='w-full h-[1px] bg-gray-300 my-5'></div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Purchase Tax:</h1>
                        <select value={formData.purchaseTaxType} onChange={(e) => { setFormData({ ...formData, purchaseTaxType: e.target.value }) }} type='text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>None</option>
                            <option value={"sss"}>sss</option>
                            <option value={"Nikki Wolf"}>Nikki Wolf</option>
                            <option value={"Nikki Wolf"}>Nikki Wolf</option>
                            <option value={"Pepsi"}>Pepsi</option>

                        </select>

                    </div>
                    <div className='flex flex-col '>

                    </div>
                    <div className='flex flex-col items-end'>
                        <h1 className='flex text-sm  font-bold'>Purchase Tax <p className='mx-2'>(+) Rs {formData.purchaseTax}</p> </h1>

                    </div>
                </div>
                <div className='w-full h-[1px] bg-gray-300 my-5'></div>
                <div className='w-full flex flex-col'>
                    <h1 className='flex text-sm  font-bold'>Additional Note</h1>

                    <textarea rows={4} value={formData.additionalNotes} onChange={(e) => { setFormData({ ...formData, additionalNotes: e.target.value }) }} className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>
            </div>
            <div className='flex  w-full   flex-col  p-5 mt-5 bg-white border-t-[3px] rounded-md border-blue-600'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Detials:</h1>
                        <input value={formData.shippingDetails} onChange={(e) => { setFormData({ ...formData, shippingDetails: e.target.value }) }} type='Text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>
                    <div className='flex flex-col'>

                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>(+)Additional Shipping Charges:</h1>
                        <input value={formData.customer} onChange={(e) => { setFormData({ ...formData, customer: e.target.value }) }} type='number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

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
            {!id &&
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

                                <input value={formData.amount} onChange={(e) => { setFormData({ ...formData, amount: e.target.value }) }} type='number' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
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

            }

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

export default AddorEditPurchase