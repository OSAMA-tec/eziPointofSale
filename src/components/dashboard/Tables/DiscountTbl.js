import React, { useRef, useState ,useEffect} from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { FaColumns,  FaEdit, FaFileCsv, FaFileExcel, FaFilePdf, FaPrint, FaSearch, FaTrash } from 'react-icons/fa'
import { useReactToPrint } from 'react-to-print';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx'
import { jsPDF } from 'jspdf';
import * as htmlToImage from 'html-to-image';
import { MdCancel } from 'react-icons/md';
import AddorEditDiscount from '../discount/AddorEditDiscount';
import axios from 'axios';

const DiscountTbl = () => {
    const [dummyData,setDummyData] = useState([
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
    ])

    const handleChange = (e)=>{
        const {name, checked} = e.target
        if(name === "allSelect"){
            const checkedValue = dummyData.map((val)=>{
                return{
                    ...val, isChecked: checked
                }
            })
            setDummyData(checkedValue)
        }
    }

    const handleSingle = (e,index)=>{
        const { checked} = e.target
        
            const checkedValue = dummyData.map((val,ind)=>{
                if(ind === index){
                    return{
                        ...val, isChecked: checked
                    }
                }
               return val
            })
            setDummyData(checkedValue)
        
    }
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
    const [discountsData, setDiscountsData] = useState([]);

    const [crpage, setCrpage] = useState(1)
    const rcrdprpg = 5
    const lasIndex = crpage * rcrdprpg
    const frstIndex = lasIndex - rcrdprpg
    const record = discountsData.slice(frstIndex, lasIndex)
    const npage = Math.ceil(discountsData.length / rcrdprpg)
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
    
    const [isCliked, setIsCliked] = useState(false)
    const [upid, setUpid] = useState(0)
    const [isEdit, setIsEdit] = useState(false)
    const [actionList, setActionList] = useState(Array(record.length).fill(false))

    const toggleDropdown = (index) => {
        const dropDownAction = [...actionList];
        dropDownAction[index] = !dropDownAction[index];
        setActionList(dropDownAction);
    };

    const csvData = [
        ["Username", "Name", "Role", "Email"],
        ...discountsData.map(({ Username, Name, Role, Email }) => [
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
         if (isEdit) {
            return <AddorEditDiscount id={upid} />
        }
    }


const fetchDiscounts = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/brands`);
            // console.log(response.data)
            setDiscountsData(response.data);

        } catch (error) {
            console.error('Error fetching brand:', error);
        }
    };
    const handleDeleteDiscount = async (discountId) => {
        try {
          // Make an API call to delete attendance for a specific record
          const response = await axios.delete(`http://localhost:8000/admin/discounts/${discountId}`);
          console.log('SPG deleted:', response.data); // Handle success response
          fetchDiscounts()
        } catch (error) {
          console.error('Error deleting spg:', error);
        }
      };
    useEffect(() => {
        
        fetchDiscounts();

  
}, []);
    return (
        <div>

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
                    <button onClick={() => { handleExportExcl(discountsData) }} className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
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
                                <li className={` w-full py-1 ${col2 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol2(!col2) }}>Starts At</li>
                                <li className={` w-full py-1 ${col3 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol3(!col3) }}>Ends At</li>
                                <li className={` w-full py-1 ${col4 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol4(!col4) }}>Discount Amount</li>
                                <li className={` w-full py-1 ${col5 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol5(!col5) }}>Priority</li>
                                <li className={` w-full py-1 ${col6 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol6(!col6) }}>Brand</li>
                                <li className={` w-full py-1 ${col7 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol7(!col7) }}>Category</li>
                                <li className={` w-full py-1 ${col8 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol8(!col8) }}>Products</li>
                                <li className={` w-full py-1 ${col9 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol9(!col9) }}>Location</li>
                                <li className={` w-full py-1 ${col10 ? "" : "bg-blue-600"} hover:bg-blue-400 `} onClick={() => { setCol10(!col10) }}>Action</li>
                                
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
            
            <div className='flex flex-col items-center justify-center  overflow-x-scroll  mt-5 mx-5' ref={printRef} >
                <table id='usertbl' className="table-fixed w-full mb-10   px-5 ">
                    <thead>
                        <tr className='h-[50px] bg-gray-100'>
                            <th className='text-center'><input type='checkbox' name='allSelect' onChange={(e)=>{handleChange(e)}} /> </th>
                            {col1 && <th className=" py-2 title-font   tracking-wider font-medium text-gray-900 text-sm">Name</th>}
                            {col2 && <th className=" py-2 title-font   tracking-wider font-medium text-gray-900 text-sm">Starts At</th>}
                            {col3 && <th className=" py-2 title-font   tracking-wider font-medium text-gray-900 text-sm">Ends At</th>}
                            {col4 && <th className=" py-2 title-font   tracking-wider font-medium text-gray-900 text-sm">Discount Amount</th>}
                            {col5 && <th className=" py-2 title-font   tracking-wider font-medium text-gray-900 text-sm">Priority</th>}
                            {col6 && <th className=" py-2 title-font   tracking-wider font-medium text-gray-900 text-sm">Brand</th>}
                            {col7 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm">Category</th>}
                            {col8 && <th className=" py-2 title-font   tracking-wider font-medium text-gray-900 text-sm">Products</th>}
                            {col9 && <th className=" py-2 title-font tracking-wider font-medium text-gray-900 text-sm">Location</th>}
                            {col10 && <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm">Action</th>}

                        </tr>
                    </thead>
                    <tbody >
                        {record.map((value, index) => {
                            return <tr key={index} className={`${value.isChecked ? "bg-blue-800/60":""}`}>
                                <td className='text-center'><input type='checkbox' name={index} checked={value?.isChecked || false} onChange={(e)=>{handleSingle(e,index)}} /> </td>
                                {col1 && <td className="px-1 py-1 text-sm">{value.Username}</td>}
                                {col2 && <td className="px-1 py-1"> {value.Name}</td>}
                                {col3 && <td className=" py-1 px-1">{value.Name}</td>}
                                {col4 && <td className=" py-1 px-1">{value.Name}</td>}
                                {col5 && <td className="px-1 py-1 text-sm">{value.Username}</td>}
                                {col6 && <td className=" py-1 px-1">{value.Name}</td>}
                                {col7 && <td className=" py-1 px-1">{value.Name}</td>}
                                {col8 && <td className="px-1 py-1 text-sm">{value.Username}</td>}
                                {col9 && <td className=" py-1 px-1">{value.Name}</td>}
                                {col10 && <td className='py-1 flex '>
                                    <div onClick={() => { toggleDropdown(index) }} className='flex px-2 py-1 relative cursor-pointer items-center bg-green-600 rounded-xl text-white justify-center'>
                                        <h1 className='text-sm'>Action</h1>
                                        <AiFillCaretDown size={10} />
                                        {actionList[index] &&
                                            <ul className='absolute top-5 right-10  z-20 flex flex-col items-start w-[100px] bg-white text-gray-600 shadow-xl shadow-gray-400 '>

                                                <li className='w-full'>
                                                    <div onClick={()=>{setIsCliked(true); setUpid(value.id); setIsEdit(true); }} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaEdit size={15} />
                                                        <h1 className='text-sm'>Edit</h1>
                                                    </div>
                                                </li>
                                                <li className='w-full'>
                                                    <div onClick={() => { }} className='flex px-2 py-1 w-full cursor-pointer hover:bg-gray-400 items-center '>
                                                        <FaTrash size={15} />
                                                        <h1 className='text-sm' onClick={ ()=> handleDeleteDiscount(value._id)}>Delete</h1>
                                                    </div>
                                                </li>
                                            </ul>
                                        }
                                    </div>
                                </td>}
                            </tr>
                        })}


                    </tbody>

                </table>
            </div>
            <div className='flex w-1/2 ml-10'>
                <button className='bg-yellow-500 px-1 text-xs mx-2 rounded-md py-1'>Deactivate Selected</button>
            
            </div>
            {isCliked &&
                <div className='absolute top-0 flex flex-col items-center  justify-center right-0 bg-black/70 w-full min-h-screen'>
                    <div className='flex items-end justify-end w-full md:w-[80%]  mt-10 bg-white px-5 pt-2'>
                        <MdCancel onClick={() => { setIsCliked(!isCliked); setUpid(0) }} size={20} />

                    </div>
                    {displayData()}
                </div>

            }
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


            
            {isCliked === true &&
                <div className='absolute top-0 flex flex-col items-center   right-0 bg-black/70 w-full min-h-screen'>
                    <div className="flex flex-col w-full md:w-[50%]">
                        <div onClick={() => { setIsCliked(false); setIsEdit(false)  }} className=' flex items-end justify-end   mt-10 bg-white px-5 pt-2'>
                            <MdCancel size={20} />

                        </div>
                        {displayData()}
                    </div>
                </div>

            }
        </div>
    )
}

export default DiscountTbl