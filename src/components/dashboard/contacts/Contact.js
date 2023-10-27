import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import ContactTbl from '../Tables/ContactTbl'
import { useParams } from 'react-router-dom'

const Contact = () => { 
    const params = useParams()
    const type= params.type
    const [isFilter, setIsFilter] = useState(false)
    return (
        <div className='flex flex-col items-center min-h-screen justify-self-center w-full p-5 bg-gray-100'>
            <div className='flex justify-start items-start w-full'>
                <h1 className='text-2xl font-semibold text-start'>{type=== "supplier"? "Suppliers" :"Customer"}</h1>
                <p className='text-sm text-gray-500 mt-2 mx-2'>Manage your {type=== "supplier"? "Suppliers" :"Customer"}</p>
            </div>
            <div className='flex flex-col mt-4 w-full bg-white rounded-md p-3 items-start justify-start'>
                <div className='flex cursor-pointer' onClick={() => { setIsFilter(!isFilter) }}>
                    <FaFilter size={20} style={{ color: 'blue' }} />
                    <h1 className='text-xl text-blue-600 font-semibold'>Filters</h1>
                </div>
            {isFilter && <div className=' grid grid-cols-1 bg-white rounded-md gap-5 md:grid-cols-4 mt-5 w-full'>
                    <div className='flex  items-start justify-start'>
                        <input type='checkbox' className='w-5 h-5'/>
                        <h1 className='text-sm mx-2  font-semibold'>Purchase Due</h1>
                    </div>
                    <div className='flex  items-start justify-start'>
                        <input type='checkbox' className='w-5 h-5'/>
                        <h1 className='text-sm mx-2  font-semibold'>Purchase Return</h1>
                    </div>
                    <div className='flex  items-start justify-start'>
                        <input type='checkbox' className='w-5 h-5'/>
                        <h1 className='text-sm mx-2 font-semibold'>Advance Balance</h1>
                    </div>
                    <div className='flex  items-start justify-start'>
                        <input type='checkbox' className='w-5 h-5'/>
                        <h1 className='text-sm mx-2  font-semibold'>Opening Balance</h1>
                    </div>
                    <div className='flex flex-col w-full items-start justify-start'>
                        <h1 className='text-sm mx-2 font-semibold'>Assigned to:</h1>
                        <select type='text' className='px-2 py-1 w-full border-[1px] border-black focus:outline-none'>
                            <option value={""}>None</option>
                            <option value={"Demo Admin"}>Demo Admin</option>
                            <option value={"Ismail Shah"}>Ismail Shah</option>
                        </select>
                    </div>
                    <div className='flex flex-col w-full items-start justify-start'>
                        <h1 className='text-sm mx-2  font-semibold'>Status:</h1>
                        <select type='text' className='px-2 py-1 w-full border-[1px] border-black focus:outline-none'>
                            <option value={""}>None</option>
                            <option value={"Active"}>Active</option>
                            <option value={"Inactive"}>Inactive</option>
                        </select>
                    </div>

                </div>}
                
            </div>

            <div className='flex flex-col bg-white border-t-[3px] rounded-md w-full mt-5 border-blue-500'>
               <ContactTbl /> 
            </div>
        </div>
    )
}

export default Contact