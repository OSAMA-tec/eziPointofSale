import React from 'react'
import SellingPriceGrpTbl from '../../Tables/SellingPriceGrpTbl'



const SellingPriceGrp = () => {
 

    return (
        <div className='flex flex-col w-full '>
            <div className='mx-5 mt-5 flex'>
                <h1 className='text-2xl font-bold text-start '>Selling Price Group</h1> 
            </div>
            <div className=' w-[96%]  mx-[2%]  shadow-md my-5 shadow-gray-400 min-h-[300px] border-t-[2px] border-blue-600 rounded-xl'>
                
               
            <SellingPriceGrpTbl />
            </div>
        </div>
    )
}

export default SellingPriceGrp