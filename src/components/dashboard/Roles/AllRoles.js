import React from 'react'
import {  AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import RolesTable from '../Tables/RolesTable'



const AllRoles = () => {
 

    return (
        <div className='flex flex-col w-full '>
            <h1 className='mx-5 mt-5 text-2xl font-bold text-start'>Roles <span className='text-gray-400 text-sm'>Manage roles</span></h1>
            <div className=' w-[96%]  mx-[2%]  shadow-md my-5 shadow-gray-400 min-h-[300px] border-t-[2px] border-blacklue-600 rounded-xl'>
                <div className='flex justify-between mt-2 text-sm mx-5'>
                    <h1 className='text-xl font-semibold text-start p-5'>All Roles</h1>
                    <Link to={'/home/roles/addroles'}  className='flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                        <AiOutlinePlus size={15} /> Add

                    </Link>

                </div>
               
            <RolesTable />
            </div>
        </div>
    )
}

export default AllRoles