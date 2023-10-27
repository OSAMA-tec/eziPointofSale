import React, { useRef, useState } from 'react'
import { FaColumns,  FaFileCsv, FaFileExcel, FaFilePdf,  FaPrint, FaSearch } from 'react-icons/fa'
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx'
import { jsPDF } from 'jspdf';
import * as htmlToImage from 'html-to-image';
// import { Link } from 'react-router-dom';


const PsrCategoryTbl = () => {
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
    const record = dummyData.slice(frstIndex, lasIndex)
    const npage = Math.ceil(dummyData.length / rcrdprpg)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const [colvis, setColvis] = useState(false)
    const [col1, setCol1] = useState(true)
    const [col2, setCol2] = useState(true)
    const [col3, setCol3] = useState(true)
    const [col4, setCol4] = useState(true)
    
   
    
    
    
    // const [actionList, setActionList] = useState(Array(record.length).fill(false))

    // const toggleDropdown = (index) => {
    //     const dropDownAction =[...actionList];
    //     dropDownAction[index] = !dropDownAction[index];
    //     setActionList(dropDownAction);
    // };

    const csvData = [
        ["Username", "Name", "Role", "Email"],
        ...dummyData.map(({ Username, Name, Role, Email }) => [
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
    


    return (
        <div>
            
            <div className='flex  flex-col md:flex-row items-center justify-center mt-3 md:justify-between mx-5'>

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
                    <button onClick={() => { handleExportExcl(dummyData) }} className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
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
                            <ul className='flex flex-col text-start px-2 justify-start'>
                                <li className={` w-full py-[1px] ${col1 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol1(!col1) }}>Category</li>
                                <li className={` w-full py-[1px] ${col2 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol2(!col2) }}>Current Stock</li>
                                <li className={` w-full py-[1px] ${col3 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol3(!col3) }}>Total Unit Sold</li>
                                <li className={` w-full py-[1px] ${col4 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol4(!col4) }}>Total</li>
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
            <div className='flex flex-col  overflow-x-scroll  mt-5 ' ref={printRef} >
                <table id='usertbl'  className="table-fixed w-full ">
                    <thead>
                        <tr className='h-[50px] bg-white text-sm px-1 text-center'>
                            {col1 && <th className=" py-2   border-l-[1px] border-r-[1px] border-gray-200  tracking-wider  text-gray-900 "> Category</th>}
                            {col2 && <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-gray-200  tracking-wider font-medium text-gray-900 ">Current Stock</th>}
                            {col3 && <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-gray-200  tracking-wider font-medium text-gray-900 ">Total Unit Sold</th>}
                            {col4 && <th className=" py-2 title-font border-l-[1px] border-r-[1px] border-gray-200  tracking-wider font-medium text-gray-900 ">Total</th>}
                        </tr>
                    </thead>
                    <tbody >
                        {record.map((value, index) => {
                            return <tr key={index} className='text-sm'>
                                {col1 && <td className=" py-1 px-1 w-full ">{value.Name}</td>}
                                {col2 && <td className="px-1 py-1 ">{value.Name}</td>}
                                {col3 && <td className="px-1 py-1"> {value.Name}</td>}
                                {col4 && <td className="px-1 py-1">{value.Role}</td>}
                                
                                
                            </tr>
                        })}


                    </tbody>
                    <tfoot>
                    <tr className='font-bold h-[50px] items-center bg-gray-400'>
                            <td  className='text-center border-l-[1px] border-r-[1px] border-white'>Total</td>
                            <td  className='text-center border-l-[1px] border-r-[1px] border-white'> 0.00</td>
                            <td  className='text-center border-l-[1px] border-r-[1px] border-white'> 0.00</td>
                            <td  className='text-center border-l-[1px] border-r-[1px] border-white'>Rs 0.00</td>
                        
                        </tr>
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
            
        </div>
    )
}

export default PsrCategoryTbl