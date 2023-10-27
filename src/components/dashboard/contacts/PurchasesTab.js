import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import { addDays } from 'date-fns';
import PurchasesTbl from '../Tables/PurchasesTbl';


const PurchasesTab = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection"
    }
  ])
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full bg-white px-3  '>
      <div className='flex flex-col relative w-full md:w-1/3'>
          <h1 className='text-sm font-semibold text-start mb-2'>Date Range:</h1>
          <input
            value={`${format(range[0].startDate, "MM/dd/yyyy")} - ${format(range[0].endDate, "MM/dd/yyyy")}`}
            readOnly
            className='focus:outline-none  border-[1px] bg-gray-200 border-black px-4 py-1'
            onClick={() => { setOpen(!open) }} />
          {open &&
            <DateRangePicker
              onChange={item => setRange([item.selection])}
              ranges={range}
              className='absolute top-16 left-10 z-10'
            />
          }
        </div>
        <div className='w-full'>
          <PurchasesTbl />
        </div>
      
    </div>
  )
}

export default PurchasesTab