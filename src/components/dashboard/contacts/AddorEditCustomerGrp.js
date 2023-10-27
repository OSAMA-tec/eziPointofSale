import React, { useState,useEffect} from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import axios from 'axios'

const AddorEditCustomerGrp = (props) => {
    const [info, setInfo] = useState(false)
    const [calcType, setCalcType] = useState('Percentage')
    const [sellingPriceGroup, setSellingPriceGroup] = useState('');
  const [percentage, setPercentage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:5000/contact/customergroup', {
          customerGroupName: props.customerGroupName,
          calculationType: calcType,
          sellingPriceGroup: sellingPriceGroup,
          percentage: percentage,
        },{
            headers: {
                'Authorization': token
            }
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
    return (
        <div className='w-full bg-gray-50 flex flex-col'>
            <h1 className='text-xl font-bold text-start'>{props.id === 0 ? "Add Customer Group" : "Edit Customer Group"}</h1>
            <div className='flex flex-col mt-3'>
                <div className='flex'>
                    <h1 className='text-start text-gray-700'>Customer Group Name:*</h1>
                </div>
                <input type='text' placeholder='Customer Group Name' className='focus:outline-none w-2/3 border-[1px] border-gray-500 p-2' />
            </div>
            <div className='flex flex-col mt-3'>
                <div className='flex'>
                    <h1 className='text-start text-gray-700'>Price Calculation type:</h1>
                </div>
                <select type='text'value={calcType} onChange={(e)=>{setCalcType(e.target.value)}}  className='focus:outline-none w-2/3 border-[1px] border-gray-500 p-2'>
                    <option value={"Percentage"}>Percentage</option>
                    <option value={"Selling Price Group"}>Selling Price Group</option>

                </select>
            </div>
            {calcType === "Selling Price Group" &&
            <div className='flex flex-col mt-3'>
            <div className='flex'>
                <h1 className='text-start text-gray-700'>Selling Price Group:</h1>
            </div>
            <select type='text'value={calcType} onChange={(e)=>{setCalcType(e.target.value)}}  className='focus:outline-none w-2/3 border-[1px] border-gray-500 p-2'>
                <option value={"Percentage"}>Percentage</option>
                <option value={"Selling Price Group"}>Selling Price Group</option>

            </select>
        </div>
            }
            {calcType === "Percentage" &&
                <div className='flex flex-col mt-3 relative'>
                <div className='flex mx-2'>
                    <h1 className='text-start text-gray-700 font-bold'>Calculation Percentage (%):</h1>
                    <FaInfoCircle onMouseOver={() => { setInfo(true) }} onMouseLeave={() => { setInfo(false) }} size={15} style={{ color: "skyblue" }} className='mx-1 mt-1 cursor-help' />
                    {info &&
                        <div className='flex flex-col w-[280px] rounded-md border-[2px] border-gray-400 absolute top-8 p-2 z-10 bg-white shadow-md shadow-gray-300'>
                            <p className='text-start font-bold  text-gray-600'>Selling Price = Selling Price set for the product + Calculation Percentage</p>
                            <p className='text-start  mt-2 text-gray-600'>You can specify percentage as positive to increase and negative to decrease selling price</p>

                        </div>
                    }
                </div>
                <input type='text' placeholder='Customer Group Name' className='focus:outline-none w-2/3 border-[1px] border-gray-500 p-2' />
            </div>
            }
            
            <div className='flex items-end justify-end py-2'>
                <button className='text-center bg-blue-500 text-white py-2 px-3 rounded-md'>{props.id ? "Update":"Save"}</button>
            </div>
        </div>
    )
}

export default AddorEditCustomerGrp