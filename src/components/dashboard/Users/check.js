import React, { useRef, useState,useEffect } from 'react'
import { AiFillCaretDown, AiOutlinePlus } from 'react-icons/ai'
import { FaArrowCircleDown, FaColumns, FaEdit, FaEye, FaFileCsv, FaFileExcel, FaFilePdf, FaHourglassHalf, FaMoneyBillAlt, FaPaperclip, FaPowerOff, FaPrint, FaScroll, FaSearch, FaTrash } from 'react-icons/fa'
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx'
import { jsPDF } from 'jspdf';
import * as htmlToImage from 'html-to-image';
import { MdCancel } from 'react-icons/md';
import AddorEditContact from '../contacts/AddorEditContact';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const ContactTbl = () => {
    const params = useParams()
    const type = params.type
    console.log(type);
   const [data,setData]=useState([]);

useEffect(()=>{
    
    const getDataFromApi=async()=>{
        try{
            const response= await axios.get(`http://localhost:5000/contacts/${type}`);
            console.log(response);
            setData(response.data);

        }catch(e){
            console.error(e)
        }

    }

    getDataFromApi();


},[type])
    const printRef = useRef()
    let xlDatas = []
    //Export to Excel
    const handleExportExcl = (userDatas) => {
        userDatas.map(xlData => {
            return xlDatas.push(xlData)
        })

        const wb = XLSX.utils.book_new(),
            ws = XLSX.utils.json_to_sheet(xlDatas)
        XLSX.utils.book_append_sheet(wb, ws, "MySheet");
        XLSX.writeFile(wb, "user.xlsx")
    }

    //Export to pdf

    const generatePDF = () => {
        // const input = document.getElementById('mytable');
        htmlToImage.toCanvas(document.getElementById('usertbl'), { quality: 0.95 })
            .then(function (dataUrl) {
                const imgData = dataUrl.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save("download.pdf");
            });

    }

    const [crpage, setCrpage] = useState(1)
    const rcrdprpg = 5
    const lasIndex = crpage * rcrdprpg
    const frstIndex = lasIndex - rcrdprpg
    const record = data.slice(frstIndex, lasIndex)
    const npage = Math.ceil(data.length / rcrdprpg)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const [colvis, setColvis] = useState(false)
    const [col1, setCol1] = useState(true)
    const [col2, setCol2] = useState(true)
    const [col3, setCol3] = useState(true)
    const [col4, setCol4] = useState(true)
    const [col5, setCol5] = useState(true)
    const [col6, setCol6] = useState(true)
    const [col7, setCol7] = useState(true)
    const [col8, setCol8] = useState(true)
    const [col9, setCol9] = useState(true)
    const [col10, setCol10] = useState(true)
    const [col11, setCol11] = useState(true)
    const [col12, setCol12] = useState(true)
    const [col13, setCol13] = useState(true)
    const [col14, setCol14] = useState(true)
    const [col15, setCol15] = useState(true)
    const [col16, setCol16] = useState(true)
    const [col17, setCol17] = useState(true)
    const [col18, setCol18] = useState(true)
    const [col19, setCol19] = useState(true)
    const [col20, setCol20] = useState(true)
    const [col21, setCol21] = useState(true)
    const [col22, setCol22] = useState(true)
    const [col23, setCol23] = useState(true)
    const [col24, setCol24] = useState(true)
    const [isedit, setIsedit] = useState(false)
    const [editId, setEditId] = useState(0)
    const [isCliked, setIsCliked] = useState(false)
    const [actionList, setActionList] = useState(Array(record.length).fill(false))

    const toggleDropdown = (index) => {
        const dropDownAction = [...actionList];
        dropDownAction[index] = !dropDownAction[index];
        setActionList(dropDownAction);
    };

    const csvData = [
        ["Username", "Name", "Role", "Email"],
        ...data.map(({ Username, Name, Role, Email }) => [
            Username,
            Name,
            Role,
            Email
        ]),
    ];

    //Function to print
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: "ConsignmentReport",
        copyStyles: true,
        // pageStyle: "@page { size: 8.3in 11.7in }"
    });

    const prevPage = () => {
        if (crpage !== 1) {
            setCrpage(crpage - 1)
        }
    }
    const nextPage = () => {
        if (crpage !== numbers.length) {
            setCrpage(crpage + 1)
        }
    }
    const displayData = () => {
        if (editId === 0 && isedit === false) {
            return <AddorEditContact id={0} />
        } else if (editId !== 0 && isedit === true) {
            return <AddorEditContact id={editId} />
        }
    }


    console.log(data)


    return (
        <div>
            <div className='flex justify-between items-center mt-5 text-sm mx-5'>
                <h1 className='text-xl mx-1'>All Your {type === "supplier" ? "Suppliers" : "Customer"}</h1>

                <button onClick={() => { setIsCliked(!isCliked) }} className='flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                    <AiOutlinePlus size={15} /> Add

                </button>

            </div>
            <div className='flex  flex-col md:flex-row  items-center justify-center mt-3 md:justify-between mx-5'>

                <div className='flex items-center justify-center my-2 md:my-0'>
                    <h1 className='text-sm mx-1'>Show</h1>
                    <select className='w-[100px] border-[1px] border-black focus:outline-none text-center' >
                        <option value={"25"}> 25</option>
                        <option value={"50"}> 50</option>
                        <option value={"100"}> 100</option>
                        <option value={"200"}> 200</option>
                        <option value={"500"}> 500</option>
                        <option value={"1,000"}> 1,000</option>
                        <option value={"All"}> All</option>

                    </select>
                    <h1 className='text-sm mx-1'>enteries</h1>

                </div>
                <div className='flex items-center justify-center my-2 md:my-0'>
                    <button className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                        <FaFileCsv size={15} className=' mt-1 pr-[2px]' />
                        <CSVLink filename="users.csv" data={csvData}>
                            <h1 className='text-sm'>Export to CSV</h1>

                        </CSVLink>
                    </button>
                    <button onClick={() => { handleExportExcl(data) }} className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                        <FaFileExcel size={15} className=' mt-1 pr-[2px]' />
                        <h1 className='text-sm'>Export to Excle</h1>
                    </button>
                    <button onClick={handlePrint} className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                        <FaPrint size={15} className=' mt-1 pr-[2px]' />
                        <h1 className='text-sm'>Print</h1>
                    </button>
                    <button onClick={() => { setColvis(!colvis) }} className='flex border-[1px] relative px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                        <FaColumns size={15} className=' mt-1 pr-[2px]' />
                        <h1 className='text-sm'>Column Visibility</h1>
                        {colvis && <div className='absolute top-7 shadow-md shadow-gray-400 bg-white w-[150px]'>
                            <ul className='flex flex-col items-center justify-center'>
                                <li className={` w-full py-1 ${col1 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol1(!col1) }}>Action</li>
                                <li className={` w-full py-1 ${col2 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol2(!col2) }}>Contact ID</li>
                                <li className={` w-full py-1 ${col3 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol3(!col3) }}>Business Name</li>
                                <li className={` w-full py-1 ${col4 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol4(!col4) }}>Name</li>
                                <li className={` w-full py-1 ${col5 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol5(!col5) }}>Email</li>
                                <li className={` w-full py-1 ${col6 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol6(!col6) }}>Tax Number</li>
                                <li className={` w-full py-1 ${col7 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol7(!col7) }}>Pay Term</li>
                                <li className={` w-full py-1 ${col8 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol8(!col8) }}>Opening Balance</li>
                                <li className={` w-full py-1 ${col9 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol9(!col9) }}>Advance Balance </li>
                                <li className={` w-full py-1 ${col10 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol10(!col10) }}>Added On</li>
                                <li className={` w-full py-1 ${col11 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol11(!col11) }}>Address</li>
                                <li className={` w-full py-1 ${col12 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol12(!col12) }}>Mobile</li>
                                <li className={` w-full py-1 ${col13 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol13(!col13) }}>Total Purchase Due</li>
                                <li className={` w-full py-1 ${col14 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol14(!col14) }}>Total Purchase Return Due</li>
                                <li className={` w-full py-1 ${col15 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol15(!col15) }}>Custom Field 1</li>
                                <li className={` w-full py-1 ${col16 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol16(!col16) }}>Custom Field 2</li>
                                <li className={` w-full py-1 ${col17 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol17(!col17) }}>Custom Field 3</li>
                                <li className={` w-full py-1 ${col18 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol18(!col18) }}>Custom Field 4</li>
                                <li className={` w-full py-1 ${col19 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol19(!col19) }}>Custom Field 5</li>
                                <li className={` w-full py-1 ${col20 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol20(!col20) }}>Custom Field 6</li>
                                <li className={` w-full py-1 ${col21 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol21(!col21) }}>Custom Field 7</li>
                                <li className={` w-full py-1 ${col22 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol22(!col22) }}>Custom Field 8</li>
                                <li className={` w-full py-1 ${col23 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol23(!col23) }}>Custom Field 9</li>
                                <li className={` w-full py-1 ${col24 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol24(!col24) }}>Custom Field 10</li>

                            </ul>
                        </div>}
                    </button>
                    <button onClick={generatePDF} className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                        <FaFilePdf size={15} className=' mt-1 pr-[2px]' />
                        <h1 className='text-sm'>Export to PDF</h1>
                    </button>
                </div>
                <div className='flex items-center justify-center  w-[250px] md:w-auto my-2 md:my-0 border-[1px] border-black'>
                    <FaSearch size={15} className=' mt-1 mx-1' />
                    <input className=' focus:outline-none px-2 py-1' type='search' id="search" name='serch' placeholder='Search' />
                </div>


            </div>
            <div className='flex flex-col  overflow-x-scroll  mt-5 mx-5' ref={printRef} >
                <table id='usertbl' className="table-fixed  mb-10   px-5 border-[1px] border-gray-400">
                    <thead>
                        <tr className='h-[100px]'>
                            {col1 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Action</th>}
                            {col2 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Contact ID</th>}
                            {col3 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Business Name</th>}
                            {col4 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Name</th>}
                            {col5 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Email</th>}
                            {col6 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Tax Number</th>}
                            {col7 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Pay Term</th>}
                            {col8 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Opening Balance</th>}
                            {col9 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Advance Balance</th>}
                            {col10 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Added On</th>}
                            {col11 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Address</th>}
                            {col12 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Mobile</th>}
                            {col13 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Total Purchase Due</th>}
                            {col14 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Total Purchase Return Due</th>}
                            {col15 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Custome Field 1</th>}
                            {col16 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Custome Field 2</th>}
                            {col17 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Custome Field 3</th>}
                            {col18 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Custome Field 4</th>}
                            {col19 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Custome Field 5</th>}
                            {col20 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Custome Field 6</th>}
                            {col21 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Custome Field 7</th>}
                            {col22 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Custome Field 8</th>}
                            {col23 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Custome Field 9</th>}
                            {col24 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Custome Field 10</th>}

                        </tr>
                    </thead>
                    <tbody >
                        {record.map((value, index) => {
                            return <tr key={index} className=''>
                                {col1 && <td className='py-1 flex '>
                                    <div onClick={() => { toggleDropdown(index) }} className='flex px-2 py-1 relative cursor-pointer items-center bg-green-600 rounded-xl text-white justify-center'>
                                        <h1 className='text-sm'>Action</h1>
                                        <AiFillCaretDown size={10} />
                                        {actionList[index] &&
                                            <ul className='absolute top-5 left-10 z-20 flex flex-col items-start w-[150px] bg-white text-gray-600 shadow-xl shadow-gray-400 '>
                                                <li className='w-full'>
                                                    <div onClick={() => { setEditId(value.id); setIsedit(!isedit); setIsCliked(!isCliked) }} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaMoneyBillAlt size={15} />
                                                        <h1 className='text-sm'>Pay</h1>
                                                    </div>
                                                </li>

                                                <li className='w-full'>
                                                    <Link to={`/home/contact/view/${value.id}`} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaEye size={15} />
                                                        <h1 className='text-sm'>View</h1>
                                                    </Link >
                                                </li>
                                                <li className='w-full'>
                                                    <div onClick={() => { setEditId(value.id); setIsedit(!isedit); setIsCliked(!isCliked) }} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaEdit size={15} />
                                                        <h1 className='text-sm'>Edit</h1>
                                                    </div>
                                                </li>
                                                <li className='w-full'>
                                                    <div onClick={() => { setEditId(value.id); setIsedit(!isedit); setIsCliked(!isCliked) }} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaTrash size={15} />
                                                        <h1 className='text-sm'>Delete</h1>
                                                    </div>
                                                </li>
                                                <li className='w-full'>
                                                    <div onClick={() => { setEditId(value.id); setIsedit(!isedit); setIsCliked(!isCliked) }} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaPowerOff size={15} />
                                                        <h1 className='text-sm'>Activate</h1>
                                                    </div>
                                                </li>
                                                <li className='mt-5 w-full'>
                                                    <Link to={`/home/contact/${value.id}/ledger_tab`} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaScroll size={15} />
                                                        <h1 className='text-sm'>Ledger</h1>
                                                    </Link >
                                                </li>
                                                {type === 'customer' && <li className='w-full'>
                                                    <Link to={`/home/contact/view/${value.id}/sales_tab`} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaArrowCircleDown size={15} />
                                                        <h1 className='text-sm'>Sales</h1>
                                                    </Link>
                                                </li>}
                                                {type === 'supplier' && <li className='w-full'>
                                                    <Link to={`/home/contact/view/${value.id}/purchase_tab`} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaArrowCircleDown size={15} />
                                                        <h1 className='text-sm'>Purchases</h1>
                                                    </Link>
                                                </li>}
                                                {type === "supplier" && <li className='w-full'>
                                                    <Link to={`/home/contact/view/${value.id}/stock_report_tab`} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaHourglassHalf size={15} />
                                                        <h1 className='text-sm'>Stock Report</h1>
                                                    </Link>
                                                </li>}
                                                <li className='w-full'>
                                                    <Link to={`/home/contact/view/${value.id}/document_tab`} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaPaperclip size={15} />
                                                        <h1 className='text-sm'>Document & Note</h1>
                                                    </Link>
                                                </li>
                                            </ul>
                                        }
                                    </div>
                                </td>}
                            
                                {data.map((value,index)=> 
                                
                                    <tr key={index}>

                                    
                                     <td>{value.contactId}</td>
                                     <td>{value.businessName}</td>
                                     <td>{value.firstName} </td>
                                     <td>{value.email} </td>
                                     <td>{value.taxNumber} </td>
                                     <td>{value.payTerm} </td>
                                     <td>{value.openingBalance} </td>
                                     <td>{value.advanceBalance} </td>
                                     <td>{value.addressLine1} </td>
                                     <td>{value.mobile} </td>
                                     <td>{value.purchaseDue} </td>
                                     <td>{value.purchaseReturn} </td>
                                     <td>{value.customField1} </td>
                                     <td>{value.customField2} </td>
                                     <td>{value.customField3} </td>
                                     <td>{value.customField4} </td>
                                     <td>{value.customField5} </td>
                                     <td>{value.customField6} </td>
                                     <td>{value.customField7} </td>
                                     <td>{value.customField8} </td>
                                     <td>{value.customField9} </td>
                                     <td>{value.customField10} </td>
                                     </tr>
                                     

                                     
                                     
                            
                               )}


                                {/* {col2 && <td className="px-1 py-1 text-sm">{value.Username}</td>}
                                {col3 && <td className="px-1 py-1"> {value.Name}</td>}
                                {col4 && <td className="px-1 py-1">{value.Role}</td>}
                                {col5 && <td className=" py-1 px-1">{value.Email}</td>}
                                {col6 && <td className=" py-1 px-1">{value.Role}</td>}
                                {col7 && <td className="px-1 py-1 text-sm">{value.Username}</td>}
                                {col8 && <td className="px-1 py-1"> {value.Name}</td>}
                                {col9 && <td className="px-1 py-1">{value.Role}</td>}
                                {col10 && <td className=" py-1 px-1">{value.Email}</td>}
                                {col11 && <td className=" py-1 px-1">{value.Role}</td>}
                                {col12 && <td className="px-1 py-1 text-sm">{value.Username}</td>}
                                {col13 && <td className="px-1 py-1"> {value.Name}</td>}
                                {col14 && <td className="px-1 py-1">{value.Role}</td>}
                                {col15 && <td className=" py-1 px-1">{value.Email}</td>}
                                {col16 && <td className=" py-1 px-1">{value.Role}</td>}
                                {col17 && <td className="px-1 py-1 text-sm">{value.Username}</td>}
                                {col18 && <td className="px-1 py-1"> {value.Name}</td>}
                                {col19 && <td className="px-1 py-1">{value.Role}</td>}
                                {col20 && <td className=" py-1 px-1">{value.Email}</td>}
                                {col21 && <td className=" py-1 px-1">{value.Role}</td>}
                                {col22 && <td className="px-1 py-1"> {value.Name}</td>}
                                {col23 && <td className="px-1 py-1">{value.Role}</td>}
                                {col24 && <td className=" py-1 px-1">{value.Email}</td>} */}
                            </tr>
                        })}


                    </tbody>
                    <tfoot>
                        <tr></tr>
                    </tfoot>
                </table>
                
            </div>
            <nav className='  my-2 w-full'>
                <ul className='flex justify-end'>
                    <li>
                        <button disabled={crpage === 1 ? true : false} className='p-3 mx-1 bg-green-400 text-white' onClick={prevPage}> Previous</button>
                    </li>
                    {
                        numbers.map((n, i) => {
                            return <li key={i} className={`${crpage === n ? 'bg-blue-500' : ''} py-3 px-4 mx-1 border-[1px] border-gray-400`}>
                                <button onClick={() => { setCrpage(n) }}>{n}</button>
                            </li>
                        })
                    }
                    <li>
                        <button className='p-3 bg-green-400 text-white mx-1 ' onClick={nextPage}> Next</button>
                    </li>
                </ul>
            </nav>
            {isCliked &&
                <div className='absolute top-0 flex flex-col items-center  justify-center right-0 bg-black/70 w-full min-h-screen'>
                    <div className='flex items-end justify-end w-full md:w-[75%]  mt-10 bg-white px-5 pt-2'>
                        <MdCancel onClick={() => { setIsCliked(!isCliked); setEditId(0);; setIsedit(false); }} size={20} />

                    </div>
                    {displayData()}
                </div>

            }
        </div>
    )
}

export default ContactTbl