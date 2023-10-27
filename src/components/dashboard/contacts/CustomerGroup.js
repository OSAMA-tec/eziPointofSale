import React from 'react'
import CustomerGrpTbl from '../Tables/CustomerGrpTbl'

const CustomerGroup = () => {
  return (
    <div className='w-full bg-gray-50 p-5 flex flex-col'>
        <h1 className='text-xl font-bold text-start'>Customer Groups</h1>
        <div className='flex w-full mt-5 bg-white border-t-[3px] border-blue-500 rounded-md'>
            <CustomerGrpTbl />  
        </div>
    </div>
  )
}

export default CustomerGroup