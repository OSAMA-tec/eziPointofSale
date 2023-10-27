import React, { useState,useEffect } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DefinedRange } from 'react-date-range';
import { FaEnvelope, FaFilePdf } from "react-icons/fa"
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LedgerTab = () => {
  const [format1, setFormat1] = useState(true)
  const [format2, setFormat2] = useState(false)
  const [format3, setFormat3] = useState(false)
  const [data,setData]=useState([]);
  const params = useParams();
    const type=params.type
    const { _id } = params;
    console.log("i am id",_id);
    
    
    
    
    
    useEffect(()=>{
        const getDataFromApi=async()=>{
            
            try{
              const token = localStorage.getItem('token');
                const response=await axios.get(`http://localhost:5000/contacts/${type}/${_id}`,{
                  headers: {
                      'Authorization': token
                  }
              });
              
                setData(response.data);
                console.log("single data",response);
            }
            catch(error){
                console.log('view is not fetched', error)
            }
            
        }
        getDataFromApi();

    },[_id,type]);
       
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection"
    }
  ])
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full bg-white px-2'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-3'>
        <div className='flex flex-col'>
          <h1 className='text-sm font-semibold text-start mb-2'>Date Range:</h1>
          <input
            value={`${format(range[0].startDate, "MM/dd/yyyy")} - ${format(range[0].endDate, "MM/dd/yyyy")}`}
            readOnly
            className='focus:outline-none border-[1px] bg-gray-200 border-black px-4 py-1'
            onClick={() => { setOpen(!open) }} />
          {open &&
            <DefinedRange
              onChange={item => setRange([item.selection])}
              ranges={range}
            />
          }
        </div>
        <div className='flex flex-col'>
          <h1 className='text-sm font-semibold text-start mb-2'>Ledger Format:</h1>
          <div className='flex '>
            <button onClick={() => { setFormat1(!format1); setFormat2(false); setFormat3(false) }} className={`px-1  py-1 border-[1px] border-gray-300  ${format1 ? "bg-gradient-to-b from-gray-500 to-gray-300" : "bg-gray-100"} text-lg `}>Format 1</button>
            <button onClick={() => { setFormat2(!format2); setFormat1(false); setFormat3(false) }} className={`px-1  py-1 border-[1px] border-gray-300  ${format2 ? "bg-gradient-to-b from-gray-500 to-gray-300" : "bg-gray-100"} text-lg `}>Format 2</button>
            <button onClick={() => { setFormat3(!format3); setFormat1(false); setFormat2(false) }} className={`px-1  py-1 border-[1px] border-gray-300  ${format3 ? "bg-gradient-to-b from-gray-500 to-gray-300" : "bg-gray-100"} text-lg `}>Format 3</button>

          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-sm font-semibold text-start mb-2'>Business Locations:</h1>
          <select className='focus:outline-none border-[1px] bg-gray-100 border-black px-4 py-1' >
            <option value={"All Locations"}>All Locations</option>
            <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>

          </select>
        </div>
        <div className='flex'>
          <div className='flex items-end justify-end'>
            <div className='w-8 h-8 bg-gray-200 flex items-center justify-center mx-2'><FaFilePdf size={15} className='m-2' /> </div>
            <div className='w-8 h-8 bg-gray-200 flex items-center justify-center mx-2'><FaEnvelope size={15} className='m-2' /></div>


          </div>
        </div>

      </div>
      <div className='flex w-full bg-white'>
        {format1 &&
          <div className='flex flex-col  w-full'>
            <div className='flex flex-col w-full justify-end items-end'>
              <h1 className='text-xl font-bold mb-2'>EZI POS DEMO</h1>
              <p> Address</p>
            </div>
            <div className='flex '>
              <div className='w-1/2 flex-col flex'>
                <div className='w-1/2 px-1 py-1 bg-blue-600 text-white'>
                  <h1 className='text-start'>To:</h1>
                </div>
                <h1 className='font-bold text-sm mx-2 text-start'>data.Username</h1>
                <h1 className=' text-sm mx-2 text-start'>data.addressLine1</h1>
                <h1 className=' text-sm mx-2 text-start'>Mobile: <p className='mx-1'>12345678910</p></h1>

              </div>
              <div className='w-1/2 flex flex-col'>
                <div className='w-full px-1 py-1 bg-blue-600 text-white'>
                  <h1 className='text-end font-semibold text-2xl '>Account Summary</h1>
                </div>
                <h1 className='text-end text-sm '>01/01/2023 to 12/31/2023</h1>
                <div className='w-full h-[1px] bg-black mt-1'></div>
                <div className='flex justify-between'>
                  <h1 className='text-sm '>Opening Balance</h1>
                  <h1 className='text-sm '>Rs 0.00</h1>

                </div>
                <div className='flex justify-between'>
                  <h1 className='text-sm '>Total Purchases</h1>
                  <h1 className='text-sm '>Rs 0.00</h1>

                </div>
                <div className='flex justify-between'>
                  <h1 className='text-sm '>Total Paid</h1>
                  <h1 className='text-sm '>Rs 0.00</h1>

                </div>
                <div className='flex justify-between'>
                  <h1 className='text-sm '>Advance Balance</h1>
                  <h1 className='text-sm '>Rs 0.00</h1>

                </div>
                <div className='flex justify-between'>
                  <h1 className='text-sm font-bold'>Balance due</h1>
                  <h1 className='text-sm '>Rs 0.00</h1>

                </div>
              </div>

            </div>
            <div className='flex items-center justify-center'>
              <h1 className='text-lg font-bold my-2'>Showing all invoices and payments between 01/01/2023 and 12/31/2023</h1>
            </div>
            <div className='overflow-x-scroll w-full mb-10'>
              <table id='usertbl' className="table-auto w-full px-5 border-[1px] border-gray-400">
                <thead className='h-[50px] bg-blue-600'>
                  <tr >
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Date</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Reference No</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Type</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Location</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Payment Status</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Debit</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Credit</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Balance</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Payment Method</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Others</th>
                  </tr>
                </thead>
                <tbody >
                  {data.map((value, index) => {
                    return <tr key={index} className=''>

                      <td className="px-1 py-1 text-sm">{value.Username}</td>
                      <td className="px-1 py-1"> {value.Name}</td>
                      <td className="px-1 py-1">{value.Role}</td>
                      <td className=" py-1 px-1">{value.Email}</td>
                      <td className=" py-1 px-1">{value.Role}</td>
                      <td className="px-1 py-1 text-sm">{value.Username}</td>
                      <td className="px-1 py-1"> {value.Name}</td>
                      <td className="px-1 py-1">{value.Role}</td>
                      <td className=" py-1 px-1">{value.Email}</td>
                      <td className=" py-1 px-1">{value.Role}</td>

                    </tr>
                  })}


                </tbody>
                <tfoot>
                  <tr></tr>
                </tfoot>
              </table>
            </div>

          </div>

        }
        {format2 &&
          <div className='flex flex-col  w-full'>
            <div className='flex '>
              <div className='w-1/2 flex flex-col'>
                <h1 className='text-start font-semibold'>Address:</h1>
                <h1 className='text-start '>Eziline Software House:</h1>
              </div>
              <div className='w-1/2 flex flex-col'>
                <h1 className='text-start font-semibold'>Statement</h1>
                <h1 className='text-start text-sm font-semibold'>Date</h1>
                <h1 className='text-end text-sm '>01/01/2023 to 12/31/2023</h1>
              </div>
            </div>

            <div className='flex '>
              <div className='w-1/2 flex-col flex'>

                <h1 className='text-start'>To:</h1>
                <h1 className='font-bold text-sm mx-2 text-start'>User Name</h1>
                <h1 className=' text-sm mx-2 text-start'>Address</h1>
                <h1 className=' text-sm mx-2 text-start flex'>Mobile: <p className='mx-1'>12345678910</p></h1>

              </div>


            </div>

            <div className='overflow-x-scroll w-full  my-10'>
              <table id='usertbl' className="table-auto w-full">
                <thead>
                  <tr >
                    <th className=" py-2 title-font  tracking-wider font-bold text-sm">Date</th>

                    <th className=" py-2 title-font  tracking-wider font-bold text-sm">Transaction</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-sm">Amount</th>

                    <th className=" py-2 title-font  tracking-wider font-bold text-sm">Balance</th>

                  </tr>
                </thead>
                <tbody >
                  {data.map((value, index) => {
                    return <tr key={index} className=''>

                      <td className="px-1 py-1 text-sm">{value.Username}</td>
                      <td className="px-1 py-1"> {value.Name}</td>
                      <td className="px-1 py-1">{value.Role}</td>
                      <td className=" py-1 px-1">{value.Email}</td>
                    </tr>
                  })}


                </tbody>

              </table>

              <table className='table-auto w-full mt-5'>
                <thead>
                  <tr>
                    <th className=" py-2 title-font  tracking-wider font-bold  text-sm">Current</th>
                    <th className=" py-2 title-font  tracking-wider text-green-500 font-bold  text-sm">1-30 DAYS PAST DUE</th>
                    <th className=" py-2 title-font  tracking-wider text-yellow-500 font-bold  text-sm">30-60 DAYS PAST DUE</th>
                    <th className=" py-2 title-font  tracking-wider text-orange-500 font-bold  text-sm">60-90 DAYS PAST DUE</th>
                    <th className=" py-2 title-font  tracking-wider text-red-500 font-bold  text-sm">Over 90 DAYS PAST DUE</th>
                    <th className=" py-2 title-font  tracking-wider  font-bold  text-sm">AMOUNT DUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className=" py-2 title-font  tracking-wider font-bold  text-sm">Rs 0.00</td>
                    <td className=" py-2 title-font  tracking-wider text-green-500 font-bold  text-sm">Rs 0.00</td>
                    <td className=" py-2 title-font  tracking-wider text-yellow-500 font-bold  text-sm">Rs 0.00</td>
                    <td className=" py-2 title-font  tracking-wider text-orange-500 font-bold  text-sm">Rs 0.00</td>
                    <td className=" py-2 title-font  tracking-wider text-red-500 font-bold  text-sm">Rs 0.00</td>
                    <td className=" py-2 title-font  tracking-wider  font-bold  text-sm">Rs 0.00</td>
                  </tr>
                </tbody>

              </table>
            </div>

          </div>
        }
        {format3 &&
         <div className='flex flex-col  w-full'>
            <div className='flex flex-col w-full justify-end items-end'>
              <h1 className='text-xl font-bold mb-2'>EZI POS DEMO</h1>
              <p> Address</p>
            </div>
            <div className='flex '>
              <div className='w-1/2 flex-col flex'>
                <div className='w-1/2 px-1 py-1 bg-blue-600 text-white'>
                  <h1 className='text-start'>To:</h1>
                </div>
                <h1 className='font-bold text-sm mx-2 text-start'>User Name</h1>
                <h1 className=' text-sm mx-2 text-start'>Address</h1>
                <h1 className=' text-sm mx-2 text-start'>Mobile: <p className='mx-1'>12345678910</p></h1>

              </div>
              <div className='w-1/2 flex flex-col'>
                <div className='w-full px-1 py-1 bg-blue-600 text-white'>
                  <h1 className='text-end font-semibold text-2xl '>Account Summary</h1>
                </div>
                <h1 className='text-end text-sm '>01/01/2023 to 12/31/2023</h1>
                <div className='w-full h-[1px] bg-black mt-1'></div>
                <div className='flex justify-between'>
                  <h1 className='text-sm '>Opening Balance</h1>
                  <h1 className='text-sm '>Rs 0.00</h1>

                </div>
                <div className='flex justify-between'>
                  <h1 className='text-sm '>Total Purchases</h1>
                  <h1 className='text-sm '>Rs 0.00</h1>

                </div>
                <div className='flex justify-between'>
                  <h1 className='text-sm '>Total Paid</h1>
                  <h1 className='text-sm '>Rs 0.00</h1>

                </div>
                <div className='flex justify-between'>
                  <h1 className='text-sm '>Advance Balance</h1>
                  <h1 className='text-sm '>Rs 0.00</h1>

                </div>
                <div className='flex justify-between'>
                  <h1 className='text-sm font-bold'>Balance due</h1>
                  <h1 className='text-sm '>Rs 0.00</h1>

                </div>
              </div>

            </div>
            <div className='flex items-center justify-center'>
              <h1 className='text-lg font-bold my-2'>Showing all invoices and payments between 01/01/2023 and 12/31/2023</h1>
            </div>
            <div className='overflow-x-scroll w-full mb-10'>
              <table id='usertbl' className="table-auto w-full px-5 border-[1px] border-gray-400">
                <thead className='h-[50px] bg-blue-600'>
                  <tr >
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Date</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Reference No</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Type</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Location</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Payment Status</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Debit</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Credit</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Balance</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Payment Method</th>
                    <th className=" py-2 title-font  tracking-wider font-bold text-white text-sm">Others</th>
                  </tr>
                </thead>
                <tbody >
                  {data.map((value, index) => {
                    return <tr key={index} className=''>

                      <td className="px-1 py-1 text-sm">{value.Username}</td>
                      <td className="px-1 py-1"> {value.Name}</td>
                      <td className="px-1 py-1">{value.Role}</td>
                      <td className=" py-1 px-1">{value.Email}</td>
                      <td className=" py-1 px-1">{value.Role}</td>
                      <td className="px-1 py-1 text-sm">{value.Username}</td>
                      <td className="px-1 py-1"> {value.Name}</td>
                      <td className="px-1 py-1">{value.Role}</td>
                      <td className=" py-1 px-1">{value.Email}</td>
                      <td className=" py-1 px-1">{value.Role}</td>

                    </tr>
                  })}


                </tbody>
                <tfoot>
                  <tr></tr>
                </tfoot>
              </table>
            </div>

          </div>
        }
      </div>

    </div>
  )
}

export default LedgerTab