import React, { useRef, useState, useEffect } from 'react'
import { FaColumns, FaEdit, FaFileCsv, FaFileExcel, FaFilePdf, FaPowerOff, FaPrint, FaSearch } from 'react-icons/fa'
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx'
import { jsPDF } from 'jspdf';
import * as htmlToImage from 'html-to-image';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import AddorEditSellingPriceGrp from '../Product/sellingPriceGrp/AddorEditSellingPriceGrp';
import axios from 'axios';


const SellingPriceGrpTbl = () => {
    // const dummyData = [
    //     {
    //         id: 1,
    //         Username: "username",
    //         Name: "User",
    //         Role: "Admin",
    //         Email: "username@gmail.com"
    //     },
    //     {
    //         id: 2,
    //         Username: "username1",
    //         Name: "User1",
    //         Role: "Admin",
    //         Email: "username@gmail.com"
    //     },
    //     {
    //         id: 3,
    //         Username: "username2",
    //         Name: "User2",
    //         Role: "Admin",
    //         Email: "username2@gmail.com"
    //     },
    //     {
    //         id: 4,
    //         Username: "username3",
    //         Name: "User3",
    //         Role: "Admin",
    //         Email: "username3@gmail.com"
    //     },
    //     {
    //         id: 5,
    //         Username: "username4",
    //         Name: "User4",
    //         Role: "Admin",
    //         Email: "username4@gmail.com"
    //     },
    //     {
    //         id: 6,
    //         Username: "username5",
    //         Name: "User5",
    //         Role: "Admin",
    //         Email: "username5@gmail.com"
    //     },
    //     {
    //         id: 7,
    //         Username: "username6",
    //         Name: "User6",
    //         Role: "Admin",
    //         Email: "username6@gmail.com"
    //     }
    // ]
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
    const [spgData, setSpgData] = useState([]);

    const [crpage, setCrpage] = useState(1)
    const rcrdprpg = 5
    const lasIndex = crpage * rcrdprpg
    const frstIndex = lasIndex - rcrdprpg
    const record = spgData.slice(frstIndex, lasIndex)
    const npage = Math.ceil(spgData.length / rcrdprpg)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const [colvis, setColvis] = useState(false)
    const [col1, setCol1] = useState(true)
    const [col2, setCol2] = useState(true)
    const [col3, setCol3] = useState(true)
    


    const csvData = [
        ["Username", "Name", "Role", "Email"],
        ...spgData.map(({ Username, Name, Role, Email }) => [
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
    const [isAdd, setIsAdd] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [iseidtId, setIseidtId] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const displayData = () => {
        if (isAdd === true) {
            return <AddorEditSellingPriceGrp id={0} />
        } else if (isEdit === true && iseidtId !== 0) {
            return <AddorEditSellingPriceGrp id={iseidtId} />
        }
    }

    const fetchSPG = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/selling-price-groups`);
            console.log(response.data)
            setSpgData(response.data);
            // console.log(variationData)

        } catch (error) {
            console.error('Error fetching spg:', error);
        }
    };


    const handleDeleteSPG = async (spgId) => {
        try {
          // Make an API call to delete attendance for a specific record
          const response = await axios.delete(`http://localhost:8000/admin/selling-price-groups/${spgId}`);
          console.log('SPG deleted:', response.data); // Handle success response
          fetchSPG()
        } catch (error) {
          console.error('Error deleting spg:', error);
        }
      };


    useEffect(() => {
        // Make an API call to fetch user's user records
        fetchSPG();
    }, []);
    return (
        <div>
            <div className='flex justify-between mt-2 text-sm mx-5'>
                <div className='flex flex-col'>
                <h1 className='text-xl font-semibold text-start'>All Selling Price Group</h1>
                <h1 className='text-xs  text-start '>Set multiple price for products. Name different price and then update price from "Update Price" or List Products -{">"} Actions -{">"} Add or edit Group prices</h1>
                </div>
                <button onClick={() => { setIsAdd(true); setIsClicked(true) }} className='flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                    <AiOutlinePlus size={15} /> Add

                </button>

            </div>
            <div className='flex mt-5 flex-col md:flex-row  items-center justify-center md:justify-between mx-5'>


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
                    <button onClick={() => { handleExportExcl(spgData) }} className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
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
                                <li className={` w-full py-1 ${col1 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol1(!col1) }}>Name</li>
                                <li className={` w-full py-1 ${col2 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol2(!col2) }}>Description</li>
                                <li className={` w-full py-1 ${col3 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol3(!col3) }}>Actions</li>
                            </ul>
                        </div>}
                    </button>
                    <button onClick={generatePDF} className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                        <FaFilePdf size={15} className=' mt-1 pr-[2px]' />
                        <h1 className='text-sm'>Export to PDF</h1>
                    </button>
                </div>
                <div className='flex items-center justify-center  w-[300px] md:w-auto my-2 md:my-0 border-[1px] border-black'>
                    <FaSearch size={15} className=' mt-1 mx-1' />
                    <input className=' focus:outline-none px-2' type='search' id="search" name='serch' placeholder='Search' />
                </div>


            </div>


            <div className='flex flex-col justify-center items-center mt-5 mx-5' ref={printRef} >
                <table id='usertbl' className="table-auto w-full mb-10  whitespace-no-wrap ">
                    <thead>
                        <tr>
                            {col1 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Name</th>}
                            {col2 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Description</th>}
                            {col3 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Actions</th>}
                            

                        </tr>
                    </thead>
                    <tbody >
                        {record.map((value, index) => {
                            return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-100" : ""}`}>
                                {col1 && <td className="px-1 py-1 text-sm">{value.name}</td>}
                                {col2 && <td className="px-1 py-1"> {value.description}</td>}
                                
                                {col3 && <td className='py-1 flex justify-center'>
                                    <button onClick={() => { setIsClicked(true); setIsEdit(true); setIseidtId(value._id) }} className='flex mx-1 p-1 items-center bg-blue-600 text-white justify-center'>
                                        <FaEdit size={15} />
                                        <h1 className='text-sm mx-1'>Edit</h1>
                                    </button>
                                    <button  onClick={ ()=> handleDeleteSPG(value._id)} className='flex mx-3 p-1 items-center bg-red-600 text-white justify-center'>
                                        <FaEdit size={15} />
                                        <h1 className='text-sm mx-1'>Delete</h1>
                                    </button>
                                    <button  className='flex mx-3 p-1 items-center bg-red-500 text-white justify-center'>
                                        <FaPowerOff size={15} />
                                        <h1 className='text-sm mx-1'>Deactivate</h1>
                                        {/* <h1 className='text-sm mx-1'>{spgData.isDefault ? "ACtivate" : "Deactivate"}</h1> */}

                                    </button>
                                </td>}
                            </tr>
                        })}


                    </tbody>
                </table>
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

                {isClicked &&
                    <div className='absolute top-0  flex flex-col  items-center  right-0 bg-black/50 w-full min-h-screen'>
                        <div className='w-full md:w-[50%]   mt-10 bg-white px-5 pt-2'>
                            <div className='flex items-end justify-end '>
                                <MdCancel onClick={() => { setIsClicked(false); setIsAdd(false); setIsEdit(false); setIseidtId(0) }} size={20} />

                            </div>
                            {displayData()}
                        </div>

                    </div>

                }
            </div>
        </div>
    )
}

export default SellingPriceGrpTbl