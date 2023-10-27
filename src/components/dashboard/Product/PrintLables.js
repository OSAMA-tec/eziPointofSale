import React, { useState } from 'react'
import { FaArrowDown, FaCog, FaInfo, FaInfoCircle, FaSearch } from 'react-icons/fa'

const PrintLables = () => {
    const dummyData = [
        {
            id: 1,
            Username: "username",
            Name: "Abrar",
            Role: "Admin",
            Email: "username@gmail.com"
        },
        {
            id: 2,
            Username: "username1",
            Name: "Israr",
            Role: "Admin",
            Email: "username@gmail.com"
        }
    ]
    const [inputData, setInputData] = useState([])
    const [info, setInfo] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [name, setName] = useState('')
    const [lables, setLables] = useState(0)
    const [lotNumber, setLotNumber] = useState(0)
    const [date, setDate] = useState('')
    const [selingPriceGrp, setSelingPriceGrp] = useState('')
    const [isUpdate, setIsUpdate] = useState(false)
    const [selectedRow, setSelectedRow] = useState(-1)

    // const handleChange = (e, index) => {
    //     let newArray = inputData
    //     newArray[index][e.target.name] = e.target.value
    //     setInputData(newArray)
    //     console.log(inputData)
    //     // const {name, value} = e.target
    //     // let i = index
    //     // const newData = inputData.map((val,rec)=>{
    //     //     return val.rec === i ? {...val, [name]:value} : val
    //     // })

    //     // setInputData(newData)
    // }
    const [formData, setformData] = useState({
        isProductName: "true",
        productName: 15,
        isProductVariation: "true",
        productVariation: 17,
        isProductPrice: "true",
        productPrice: 17,
        showPrice: "Inc. Tax",
        isBusinessName: "true",
        businessName: 20,
        isPrintPackingDate: "true",
        printPackingDate: 12,
        isPrintLotNumber: "true",
        printLotNumber: 12,
        barcodeSetting: ""
    })

    const AddToArray = () => {
        if (isUpdate === true && selectedRow !== -1) {
            let newArray = inputData
            newArray[selectedRow] = { name, lables, lotNumber, date, selingPriceGrp }
            setInputData(newArray)
            setSelectedRow(-1)
            setIsUpdate(false)
            setDate("")
            setName("")
            setLables(0)
            setLotNumber(0)
            setSelingPriceGrp("")
        } else {
            setInputData(current => [...current, { name, lables, lotNumber, date, selingPriceGrp }])
            setDate("")
            setName("")
            setLables(0)
            setLotNumber(0)
            setSelingPriceGrp("")
        }


    }
    const handleSelcetRow = (index) => {
        let newArray = inputData[index]
        console.log(newArray)

        setName(newArray.name)
        setLables(newArray.lables)
        setLotNumber(newArray.lotNumber)
        setDate(newArray.date)
        setSelingPriceGrp(newArray.selingPriceGrp)

        // for(let item in newArray){
        //     set
        // }
    }



    return (
        <div className='w-full bg-gray-100 px-3 py-4 min-h-screen flex flex-col'>
            <div className='flex relative'>
                <h1 className='text-start text-xl font-bold'>Print Lables</h1>
                <FaInfoCircle onMouseOver={() => { setInfo(true) }} onMouseLeave={() => { setInfo(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                {info &&
                    <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                        <p className='text-start'>Add products -{'>'} Choose Informations to show in Lables -{'>'} Select Barcode Setting -{'>'} Preview Lables -{'>'} Print</p>

                    </div>
                }
            </div>
            <div className='flex flex-col  border-t-[3px] border-blue-600 rounded-md mx-2 py-[20px] bg-white mt-5'>
                <h1 className='flex text-start justify-start my-3 px-2 text-lg font-medium'>Add products to generate Labels</h1>
                <div className='flex flex-col w-full justify-center items-center text-center mt-10 '>
                    <div className='flex flex-col items-center justify-center w-full '>
                        <div className='flex w-3/4 relative'>
                            < FaSearch size={15} className='w-8 h-8 p-2 border-[1px] border-gray-600' />
                            <input onClick={() => { setIsClicked(!isClicked) }} value={inputValue} onChange={(e) => setInputValue(e.target.value.toLowerCase())} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                            {isClicked &&
                                <ul

                                    className={`bg-white w-full    border-[1px]   z-10 absolute top-8 border-gray-600  ${isClicked ? "max-h-60" : "max-h-0"} `}
                                >

                                    {dummyData?.map((data) => (
                                        <li
                                            key={data?.Name}
                                            className={`p-1 px-9 text-start text-sm hover:bg-sky-600 hover:text-white
                                ${data?.Name?.toLowerCase() === inputValue?.toLowerCase() &&
                                                "bg-sky-600 text-white"
                                                }
                                 ${data?.Name?.toLowerCase().startsWith(inputValue)
                                                    ? "block"
                                                    : "hidden"
                                                }`}
                                            onClick={() => {
                                                if (data?.Name?.toLowerCase() !== inputValue.toLowerCase()) {
                                                    setInputValue(data?.Name)
                                                    let name = data?.Name
                                                    setName(name)
                                                    setInputValue('')
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

                        <div className='grid grid-cols-5 gap-3 mt-4 items-center justify-center w-5/6'>
                            <input type='text' name="name" value={name} readOnly className='border-[1px] border-black focus:outline-none' />
                            <input type='text' name="lables" value={lables} onChange={(e) => setLables(e.target.value)} className='border-[1px] border-black focus:outline-none' />
                            <input name="lotNumber" type='text' value={lotNumber} onChange={(e) => setLotNumber(e.target.value)} className='border-[1px] border-black focus:outline-none' />
                            <input name="date" value={date} onChange={(e) => setDate(e.target.value)} type='datetime-local' className='border-[1px]  border-black focus:outline-none' />
                            <div className='flex'>
                                <select name="selingPriceGrp" value={selingPriceGrp} onChange={(e) => setSelingPriceGrp(e.target.value)} className='border-[1px] w-2/3   border-black focus:outline-none'>
                                    <option value={"None"}>None</option>
                                    <option value={"retail"}>retail</option>
                                    <option value={"Saleman"}>Saleman</option>
                                    <option value={"Local Sale"}>Local Sale</option>
                                    <option value={"Minimum Price"}>Minimum Price</option>
                                    <option value={"Sale Points"}>Sale Points</option>

                                </select>
                                <FaArrowDown onClick={AddToArray} size={20} style={{ color: "white", backgroundColor: "green" }} className='mx-3 w-1/3 h-8' />
                            </div>
                        </div>
                    </div>
                    <div className='flex w-3/4'>
                        <div className='flex overflow-x-scroll  mt-5 ' >
                            <table className="table-fixed w-full    mb-2   px-5 ">
                                <thead>
                                    <tr className='h-[50px] '>
                                        <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">Product</th>
                                        <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">No. of Lables</th>
                                        <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">Lot Number</th>
                                        <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">Packing Date</th>
                                        <th className=" py-2 title-font  tracking-wider font-bold  text-sm ">Selling Price Group</th>

                                    </tr>
                                </thead>
                                <tbody >
                                    {inputData.map((value, index) => {
                                        return <tr key={index} onClick={() => { handleSelcetRow(index); setIsUpdate(true); setSelectedRow(index) }} className={`${(index + 1) % 2 === 0 ? "bg-gray-200" : ""}`}>

                                            <td className=" py-1 px-1">{value.name}</td>
                                            <td className=" py-1 px-1"> {value.lables}</td>
                                            <td className="px-1 py-1 text-sm">{value.lotNumber}</td>
                                            <td className="px-1 py-1"> {value.date}</td>
                                            <td className="px-1 py-1 text-sm">{value.selingPriceGrp}</td>
                                        </tr>
                                    })}


                                </tbody>
                                <tfoot>
                                    <tr></tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col p-5 border-t-[3px] border-blue-600 rounded-md mx-2 py-[20px] bg-white mt-5'>
                <h1 className='flex text-start justify-start my-3 px-2 text-lg font-medium'>Information to show in Labels</h1>
                <div className='grid grid-cols-1 md:grid-cols-4 mt-5 gap-5'>
                    <div className='flex flex-col'>
                        <div className='flex items-center '>
                            <input value={formData.isProductName} onChange={(e) => setformData({ ...formData, isProductName: e.target.value })} checked={formData.isProductName ? true : false} type='checkbox' className='h-4 w-4' />
                            <h1 className=' text-start mx-2 font-medium'>Product Name</h1>
                        </div>
                        <div className='flex mt-2'>
                            <h1 className='font-bold border-[1px] p-1 px-2 border-gray-600' >Size</h1>
                            <input value={formData.productName} onChange={(e) => setformData({ ...formData, productName: e.target.value })} type="text" className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center '>
                            <input value={formData.isProductVariation} onChange={(e) => setformData({ ...formData, isProductVariation: e.target.value })} checked={formData.isProductVariation ? true : false} type='checkbox' className='h-4 w-4' />
                            <h1 className=' text-start mx-2 text-xs font-medium'>Product Variation (Recomended)</h1>
                        </div>
                        <div className='flex mt-4'>
                            <h1 className='font-bold border-[1px] p-1 px-2 border-gray-600' >Size</h1>
                            <input value={formData.productVariation} onChange={(e) => setformData({ ...formData, productVariation: e.target.value })} type="text" className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center '>
                            <input value={formData.isProductPrice} onChange={(e) => setformData({ ...formData, isProductPrice: e.target.value })} checked={formData.isProductPrice ? true : false} type='checkbox' className='h-4 w-4' />
                            <h1 className=' text-start mx-2 font-medium'>Product Price</h1>
                        </div>
                        <div className='flex mt-2'>
                            <h1 className='font-bold border-[1px] p-1 px-2 border-gray-600' >Size</h1>
                            <input value={formData.productPrice} onChange={(e) => setformData({ ...formData, productPrice: e.target.value })} type="text" className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center '>
                            <h1 className=' text-start mx-2 font-medium'>Show Price</h1>
                        </div>
                        <div className='flex mt-2'>
                            <FaInfo size={15} className=' border-[1px] w-8 h-8 p-1 border-gray-600' />
                            <select value={formData.shoshowPrice} onChange={(e) => setformData({ ...formData, showPrice: e.target.value })} className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' >
                                <option value={"Inc. Tax"}>Inc. Tax</option>
                                <option value={"Ex. Tax"}>Ex. Tax</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center '>
                            <input value={formData.isBusinessName} onChange={(e) => setformData({ ...formData, isBusinessName: e.target.value })} checked={formData.isBusinessName ? true : false} type='checkbox' className='h-4 w-4' />
                            <h1 className=' text-start mx-2 font-medium'>Business Name</h1>
                        </div>
                        <div className='flex mt-2'>
                            <h1 className='font-bold border-[1px] p-1 px-2 border-gray-600' >Size</h1>
                            <input value={formData.businessName} onChange={(e) => setformData({ ...formData, businessName: e.target.value })} type="text" className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center '>
                            <input value={formData.isPrintPackingDate} onChange={(e) => setformData({ ...formData, isPrintPackingDate: e.target.value })} checked={formData.isPrintPackingDate ? true : false} type='checkbox' className='h-4 w-4' />
                            <h1 className=' text-start mx-2 font-medium'>Print Packing Date</h1>
                        </div>
                        <div className='flex mt-2'>
                            <h1 className='font-bold border-[1px] p-1 px-2 border-gray-600' >Size</h1>
                            <input value={formData.printPackingDate} onChange={(e) => setformData({ ...formData, printPackingDate: e.target.value })} type="text" className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center '>
                            <input value={formData.isPrintLotNumber} onChange={(e) => setformData({ ...formData, isPrintLotNumber: e.target.value })} checked={formData.isPrintLotNumber ? true : false} type='checkbox' className='h-4 w-4' />
                            <h1 className=' text-start mx-2 font-medium'>Print Lot Number</h1>
                        </div>
                        <div className='flex mt-2'>
                            <h1 className='font-bold border-[1px] p-1 px-2 border-gray-600' >Size</h1>
                            <input value={formData.printLotNumber} onChange={(e) => setformData({ ...formData, printLotNumber: e.target.value })} type="text" className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                        </div>
                    </div>


                </div>

                <div className='w-full h-[1px] mt-10 bg-black'></div>

                <div className='flex flex-col mt-5 w-full md:w-1/3'>
                    <h1 className='flex text-start justify-start my-3 px-2 text-lg font-medium'>Barcode Setting:</h1>
                    <div className='flex mt-2'>
                        <FaCog size={15} className=' border-[1px] w-8 h-8 p-1 border-gray-600' />
                        <select value={formData.barcodeSetting} onChange={(e) => setformData({ ...formData, barcodeSetting: e.target.value })} className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' >
                            <option value={"1"}>20 Labels per Sheet, Sheet Size: 8.5" x 11", Label Size: 4" x 1", Labels per sheet: 20</option>
                            <option value={"2"}>30 Labels per sheet, Sheet Size: 8.5" x 11", Label Size: 2.625" x 1", Labels per sheet: 30</option>
                            <option value={"3"}>32 Labels per sheet, Sheet Size: 8.5" x 11", Label Size: 2" x 1.25", Labels per sheet: 32</option>
                            <option value={"4"}>40 Labels per sheet, Sheet Size: 8.5" x 11", Label Size: 2" x 1", Labels per sheet: 40</option>
                            <option value={"5"}>50 Labels per Sheet, Sheet Size: 8.5" x 11", Label Size: 1.5" x 1", Labels per sheet: 50</option>
                            <option value={"6"}>Continuous Rolls - 31.75mm x 25.4mm, Label Size: 31.75mm x 25.4mm, Gap: 3.18mm</option>

                        </select>
                    </div>
                </div>

                <div className='flex items-center justify-center py-[50px]'>
                    <button className='bg-blue-500 text-white text-xl  px-4 py-2 rounded-sm'>Preview</button>
                </div>

            </div>



        </div>
    )
}

export default PrintLables