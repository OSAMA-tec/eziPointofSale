import React from 'react'
import SalesCommissionTbl from '../Tables/SalesCommissionTbl'



const SalesCommission = () => {
    

    

    return (
        <div className='flex flex-col w-full '>
            <h1 className='mx-5 mt-5 text-2xl font-bold text-start'>Sales Commission Agents</h1>
            <div className=' w-[96%]  mx-[2%]  shadow-md my-5 shadow-gray-400 min-h-[300px] border-t-[2px] border-blacklue-600 rounded-xl'>
                

                <SalesCommissionTbl />
            </div>
            
        </div>
    )
}

export default SalesCommission