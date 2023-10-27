import React, { useState } from 'react'

const SuspendSale = () => {
    const [formData, setFormData] = useState({
        
        suspendNote:""
       
    })
    const handleClick = (e) => {

            console.log("Handle Save", formData)
     
    }
    return (
        <div className='w-full flex flex-col px-5 pb-5 bg-white'>
                    <h1 className='flex text-xl text-gray-600 text-start font-bold' >Suspend Sale</h1>
                    <div className='flex flex-col mt-5'>
                    <h1 className='flex text-sm text-start font-bold' >Suspend Note</h1>
                    <textarea rows={5} value={formData.suspendNote} onChange={(e) => { setFormData({ ...formData, suspendNote: e.target.value }) }} type='text'  className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />
                </div>

            
            <div className='flex items-end justify-end  mt-5 mx-5'>
                <button onClick={handleClick} className='bg-green-500 px-2 py-2 rounded-md items-center justify-center flex'>Save</button>
            </div>
        </div>
    )
}

export default SuspendSale