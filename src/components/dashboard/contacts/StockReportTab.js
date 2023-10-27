import React, { useState } from 'react'

import StockReportTbl from '../Tables/StockReportTbl';


const StockReportTab = () => {
  
 const [address, setAddress] = useState('')
  return (
    <div className='w-full bg-white px-3  '>
        <div className='flex flex-col w-1/3'>
          <h1 className='text-sm font-semibold text-start mb-2'>Business Locations:</h1>
          <select value={address} onChange={(e)=>{setAddress(e.target.value)}} className='focus:outline-none border-[1px] bg-gray-100 border-black px-4 py-1' >
            <option value={"All Locations"}>All Locations</option>
            <option value={"Eziline Software House (Pvt.) Ltd (BL0001)"}>Eziline Software House (Pvt.) Ltd (BL0001)</option>

          </select>
        </div>
        <div className='w-full'>
          <StockReportTbl />
        </div>
      
    </div>
  )
}

export default StockReportTab