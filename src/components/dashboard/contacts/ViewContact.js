import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaGift, FaHourglassHalf, FaInfo, FaMapMarker, FaMobile, FaMoneyBillAlt, FaPaperclip, FaPenSquare, FaScroll, FaUserTie } from 'react-icons/fa'
import {Outlet , NavLink,useParams} from 'react-router-dom'
import axios from 'axios'


const ViewContact = () => {
   
    const [data,setData]=useState([]);
    const params = useParams();
    const type=params.type
    const { _id } = params;
    console.log("i am id",_id);
    
    
    
    
    
    useEffect(()=>{
        const getDataFromApi=async()=>{
            
            try{
                const token = localStorage.getItem('token');
                const response=await axios.get(`http://localhost:5000/contacts/${type}/${_id}`, {
                    headers: {
                        'Authorization': token
                    }
                } );
              
                setData(response.data);
                console.log("single data",response);

            }
            catch(error){
                console.log('view is not fetched', error)
            }
            
        }
        getDataFromApi();

    },[_id,type]);
       
    return (
        <div className='w-full p-2 bg-gray-200 min-h-screen'>
            
            <div className='flex mt-3 flex-col  p-4 shadow-lg shadow-gray-300 bg-white '>
                <div className='flex items-center justify-start'>
                    <FaUserTie size={20} />
                    <h1 className='font-bold text-gray-700 text-lg mt-1'>Supplier </h1>
                    <h1 className=' text-lg mt-1 mx-2'>{data.firstName}</h1>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-4'>
                    <div className='flex flex-col justify-start items-start'>
                        <div className='flex items-center'>
                            <FaMapMarker size={15} />
                            <h1 className='font-bold text-gray-700 text-lg'>Address </h1>
                        </div>
                        <h1 className=' text-sm'>{data.addressLine1}</h1>
                    </div>
                    <div className='flex flex-col justify-start items-start'> 
                        <div className='flex items-center'>
                            <FaInfo size={15} />
                            <h1 className='font-bold text-gray-700 text-lg'>Tax Number</h1>
                        </div>
                        <h1 className=' text-sm'>{data.taxNumber}</h1>

                    </div>
                </div>
                <div className='flex flex-col mt-2 justify-start items-start'>
                    <div className='flex items-center '>
                        <FaMobile size={15} />
                        <h1 className='font-bold text-gray-700 text-lg'>Mobile</h1>
                    </div>
                    <h1 className=' text-sm'>{data.mobile}</h1>

                </div>
                <div className='flex items-end justify-end flex-col'>
                    <div className='flex text-white bg-blue-600 items-center p-2 justify-center'>
                        <FaMoneyBillAlt size={15} />
                        <h1 className=' text-sm mx-1'>Pay Due Amount</h1>
                    </div>
                    <div className='flex mt-2 text-white p-2 bg-blue-600 items-center justify-center'>
                        <h1 className=' text-sm'>Add Discount</h1>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-6 mt-3 bg-white'>
                <NavLink to={"ledger_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaScroll size={20} />
                    <h1 className='font-bold text-xl'>Ledger</h1>
                </NavLink>
                <NavLink to={"sales_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaArrowAltCircleUp size={20} />
                    <h1 className='font-bold text-xl'>Sales</h1>
                </NavLink>
                <NavLink to={"purchase_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaArrowAltCircleDown size={20} />
                    <h1 className='font-bold text-xl'>Purchases</h1>
                </NavLink>
                <NavLink to={"stock_report_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaHourglassHalf size={20} />
                    <h1 className='font-bold text-xl'>Stock Report</h1>
                </NavLink>
                <NavLink to={"document_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaPaperclip size={20} />
                    <h1 className='font-bold text-xl'>Documents & Notes</h1>
                </NavLink>
                <NavLink to={"rewards_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaGift size={20} />
                    <h1 className='font-bold text-xl'>Reward Points</h1>
                </NavLink>
                <NavLink to={"payment_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaMoneyBillAlt size={20} />
                    <h1 className='font-bold text-xl'>Payments</h1>
                </NavLink>
                <NavLink to={"activities_tab"} className={`flex aria-[current=page]:border-t-[3px] aria-[current=page]:border-blue-600  items-center justify-center`}>
                    <FaPenSquare size={20} />
                    <h1 className='font-bold text-xl'>Activities</h1>
                </NavLink>
            </div>
            <div className='flex w-full  min-h-[400px] bg-white'>
                <Outlet />
            </div>


        </div>
    )
}

export default ViewContact