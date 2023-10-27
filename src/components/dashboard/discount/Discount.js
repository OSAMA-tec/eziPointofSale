import React, { useState } from 'react'



import { AiOutlinePlus } from 'react-icons/ai';
import DiscountTbl from '../Tables/DiscountTbl';
import { MdCancel } from 'react-icons/md';
import AddorEditDiscount from './AddorEditDiscount';

const Discount = () => {
   const [isClicked, setIsClicked] = useState(false)
   const [isAdd, setIsAdd] = useState(false)

   const displayData = ()=>{
    if(isAdd){
        return <AddorEditDiscount id={0} />
    }
   }
   
    return (
        <div className='flex flex-col items-center min-h-screen justify-self-center w-full p-5 bg-gray-100'>
            <div className='flex justify-start items-start w-full'>
                <h1 className='text-xl font-semibold'>Discounts</h1>

            </div>
           

            <div className='flex flex-col bg-white border-t-[3px] rounded-md w-full mt-5 border-blue-500'>
                <div className='flex justify-between  mt-2 text-sm mx-5'>
                <h1 className='text-sm font-semibold'>All your Discounts</h1>

                    <div onClick={()=>{setIsAdd(true); setIsClicked(true);}} className='flex cursor-pointer items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                        <AiOutlinePlus size={15} /> Add 

                    </div>

                </div>

                <DiscountTbl />
            </div>
            {isClicked &&
                <div className='absolute top-0 flex flex-col items-center  justify-center right-0 bg-black/70 w-full min-h-screen'>
                    <div className="w-full md:w-[50%]">
                        <div onClick={() => { setIsClicked(false); setIsAdd(false);  }} className=' flex items-end justify-end  w-full mt-10 bg-white px-5 pt-2'>
                            <MdCancel size={20} />

                        </div>
                        {displayData()}
                    </div>
                </div>

            }
        </div>
    )
}

export default Discount