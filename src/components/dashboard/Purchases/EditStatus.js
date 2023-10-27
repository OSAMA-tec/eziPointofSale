import React, { useState } from 'react'

const EditStatus = (props) => {
    const [shippingStatus, setShippingStatus] = useState('')
    // const [porderid, setPorderid] = useState(props.id)
    const handleClick =()=>{
        console.log("Handle Update")
    }
    return (
        <div className='w-1/2 p-5 items-center  flex flex-col'>
            <h1 className='text-start text-lg'>Edit Status</h1>
            <div className='w-full border-t-[3px] justify-center rounded-xl border-blue-400 p-5'>
            <div className='flex flex-col '>
                <h1 className='flex text-sm text-start font-bold'>Shipping Status:</h1>

                <select value={shippingStatus} onChange={(e) => { setShippingStatus(e.target.value) }} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none'>
                    <option value={"Ordered"}>Ordered</option>f
                    <option value={"Partial"}>Partial</option>
                    <option value={"Completed"}>Completed</option>


                </select>

            </div>
            <div className='flex items-end justify-end mt-5'>
                <button onClick={handleClick} className='bg-blue-500 px-2 py-2 items-center justify-center flex'>Update</button>
            </div>
            </div>
            
        </div>
    )
}

export default EditStatus