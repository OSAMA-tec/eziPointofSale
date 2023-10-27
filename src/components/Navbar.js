import React, { useState } from 'react'
// AiOutlineSetting, BiLogOut
import { AiOutlineMenu  } from "react-icons/ai"
// import { RiAccountBoxFill } from "react-icons/ri"
import { MdOutlineCancel } from "react-icons/md"
import {  motion } from "framer-motion"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    return (
        <div>

            <div className='flex   mt-5   bg-transparent z-10  absolute w-full     justify-between '>
                <div className='w-[50%] md:w-[25%] flex items-center justify-center'>
                    <div  className='flex '>
                        <Link to={"/"} className='text-xl text-gray-400 hover:text-gray-500  font-semibold'>Ezi Point of Sale</Link>
                    </div>

                </div>
                <div className='w-[50%]  items-center justify-start hidden md:flex lg:flex'>
                    <nav>
                        <ul className='flex items-center '>
                            <Link to={'/pricing'}><li  className='text-xl hover:text-gray-300 text-white mx-3'>Pricing</li></Link>
                            <Link to={'/repair-status'}><li  className='text-xl hover:text-gray-300 text-white mx-3'>Repair Status</li></Link>
                            </ul>
                    </nav>
                </div>
                <div className=' w-[10%] lg:w-[5%] md:w-[5%] flex items-center mr-[100px] md:mx-3 lg:mx-3'>
                    <div className='flex lg:hidden md:hidden mx-3'>
                        <AiOutlineMenu onClick={() => { setMenu(!menu) }} className='text-gray-500 cursor-pointer text-4xl' />
                    </div>


                </div>
                
                 <div className='w-[20%]  justify-center relative items-center rounded-r-2xl hidden md:flex lg:flex'>
                    <div className='flex items-center justify-between py-5 px-2 h-[50px]  '>
                        
                        <Link to={'/login'} className='text-xl  mx-3 hover:text-gray-300 text-white '>Login</Link>
                        <Link to={'/business/Register'} className='text-xl hover:text-gray-300  text-white '> Register  </Link>

                    </div>
                    
                </div>

            </div>
            {menu && <div className='absolute  bg-gray-100 top-0 z-20  flex justify-center w-full h-screen'>

                <div className='mt-10 flex justify-center'>
                    <MdOutlineCancel className='text-2xl cursor-pointer' onClick={() => { setMenu(!menu) }} />
                </div>
                <div className='flex items-center'>
                    <nav>
                        <motion.ul className='flex flex-col items-center '>
                            <li className='text-xl text-black my-3'>Home </li>
                            <li className='text-xl text-black my-3'>About</li>
                            <li className='text-xl text-black my-3'>Services </li>
                            <li className='text-xl text-black my-3'>Projects </li>
                            <li className='text-xl text-black my-3'>Blog</li>
                            <li className='text-xl text-black my-3'>Contact </li>
                        </motion.ul>
                    </nav>
                </div>
            </div>}
        </div>
    )
}

export default Navbar