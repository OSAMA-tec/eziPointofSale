import React, { useRef, useState } from 'react'
import { FaColumns, FaFileCsv, FaFileExcel, FaFilePdf, FaPrint, FaSearch } from 'react-icons/fa'
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx'
import { jsPDF } from 'jspdf';
import * as htmlToImage from 'html-to-image';



const ProfitByCustomer = () => {
    const dummyData = [
        {

           customer: "Product1",
            amount: 210,

        },
        {
           customer: "Product2",
            amount: 190,
        },
        {
           customer: "Product3",
            amount: 200,
        },
        {
           customer: "Product4",
            amount: 270,
        },
        {
           customer: "Product5",
            amount: 250,
        },
        {
           customer: "Product6",
            amount: 230,
        },
        {
           customer: "Product7",
            amount: 200,
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
    const findTotal = (data) => {
        let total = 0
        data.map(val => {
            return total += val.amount
        })
        return total
    }
    const total = findTotal(dummyData)



    return (
        <div className='w-full'>


            <div className='flex  flex-col md:flex-row  items-center justify-center md:justify-between mx-5'>

                <div className='flex items-center justify-center my-2 md:my-0'>
                    <h1 className='text-sm mx-1'>Show</h1>
                    <select className='w-[70px] border-[1px] border-black focus:outline-none text-center' >
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
                <div className='flex flex-col items-center justify-center  my-2 md:my-0'>
                    <div className='flex items-center justify-center'>
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
                    </div>
                    <div className='flex items-center justify-center'>
                        <button onClick={() => { setColvis(!colvis) }} className='flex border-[1px] relative px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                            <FaColumns size={15} className=' mt-1 pr-[2px]' />
                            <h1 className='text-sm'>Column Visibility</h1>
                            {colvis && <div className='absolute top-7 shadow-md shadow-gray-400 bg-white w-[150px]'>
                                <ul className='flex flex-col items-center justify-center'>
                                    <li className={` w-full py-1 ${col1 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol1(!col1) }}>Customer</li>
                                    <li className={` w-full py-1 ${col2 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol2(!col2) }}>Gross Profit</li>

                                </ul>
                            </div>}
                        </button>
                        <button onClick={generatePDF} className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                            <FaFilePdf size={15} className=' mt-1 pr-[2px]' />
                            <h1 className='text-sm'>Export to PDF</h1>
                        </button>
                    </div>


                </div>
                <div className='flex items-center justify-center  w-[200px] md:w-auto my-2 md:my-0 border-[1px] border-black'>
                    <FaSearch size={15} className=' mt-1 mx-1' />
                    <input className=' focus:outline-none px-2' type='search' id="search" name='serch' placeholder='Search' />
                </div>


            </div>
            <div className='flex flex-col justify-center items-center mt-5 mx-5' ref={printRef} >
                <table id='usertbl' className="table-auto w-full mb-10  whitespace-no-wrap ">
                    <thead>
                        <tr>
                            {col1 && <th className=" py-2 title-font text-start tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Customer</th>}
                            {col2 && <th className=" py-2 title-font text-start tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Gross Profit</th>}
                        </tr>
                    </thead>
                    <tbody >
                        {record.map((value, index) => {
                            return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-200" : ""}`}>


                                {col1 && <td className="px-1 py-1 text-start">{value.customer}</td>}
                                {col1 && <td className=" py-1 px-1 text-start">{value.amount}</td>}

                            </tr>
                        })}


                    </tbody>
                    <tfoot>
                        <td>
                            <h1 className='text-sm text-start font-bold'>Total</h1>
                        </td>
                        <td>
                            <h1 className='text-sm text-start font-bold'>{total}</h1>
                        </td>
                    </tfoot>
                </table>
                <div className='flex w-full'>
                    <div className='flex justify-start items-start flex-col w-3/4'>
                        <p>Showing {frstIndex +1} to {lasIndex} of {dummyData.length + 1} enteries</p>


                    </div>
                    <nav className='  my-2 w-1/4'>
                        <ul className='flex justify-end items-end'>
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

            </div>


        </div>
    )
}

export default ProfitByCustomer