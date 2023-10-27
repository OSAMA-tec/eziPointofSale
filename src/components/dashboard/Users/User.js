import React from 'react'
import {  AiOutlinePlus } from 'react-icons/ai'
import UserTable1 from '../Tables/UserTable1'
import { Link } from 'react-router-dom'



const User = () => {
 

    return (
        <div className='flex flex-col w-full '>
            <h1 className='mx-5 mt-5 text-2xl font-bold text-start'>Users <span className='text-gray-400 text-sm'>Manage Users</span></h1>
            <div className=' w-[96%]  mx-[2%]  shadow-md my-5 shadow-gray-400 min-h-[300px] border-t-[2px] border-blacklue-600 rounded-xl'>
                <div className='flex justify-between mt-2 text-sm mx-5'>
                    <h1 className='text-xl font-semibold text-start p-5'>All Users</h1>
                    <Link to={'/home/users/addusers'}  className='flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                        <AiOutlinePlus size={15} /> Add

                    </Link>

                </div>
               
            <UserTable1 />
            </div>
        </div>
    )
}

export default User