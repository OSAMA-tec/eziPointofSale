import React, { useState } from 'react'
import { FaPaperclip, FaPenSquare, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo'
import DocNotes from './DocNotes'
import Activites from './Activites'

const ViewUser = () => {
    const [usinfo, setUsinfo] = useState(true)
    const [docNote, setDocNote] = useState(false)
    const [activities, setActivities] = useState(false)
    return (
        <div className='flex w-full bg-gray-200 flex-col min-h-screen py-5'>
            <div className='w-[96%] mx-[2%]'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-semibold'>View User</h1>
                    <select type="text" className='w-[300px] px-2 py-1 border-[1px] border-gray-500'>
                        <option value={"Demo Admin"}>Demo Admin</option>
                        <option value={"Ismail Shah"}>Ismail Shah</option>

                    </select>
                </div>

                <div className='w-full flex flex-col md:flex-row shadow-md shadow-gray-400 mt-5 min-h-[400px] bg-white'>
                    <div className='flex flex-col w-full md:w-1/4 rounded-md shadow-md shadow-gray-600  h-[400px] border-t-[3px] border-blue-600'>
                        <div className='w-[94%] mx-[3%] h-[200px] flex flex-col items-center justify-center'>
                            <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIwAjAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCBgcDAf/EADQQAAICAQIDBgQFAwUAAAAAAAABAgMEBRESMVEGITJBcZETImHBFEJSgaEjseEHFTOC0f/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMLLI1xcpvZLzK7IzZz3VXyR6+bEE+2+urxzS+nmR56jWvDCUv4K1tttt7t+YLianf7i/Kte59Wo/qrf7MgAuGrWGbTN7NuL+qJKkmt0919ChPSq6yp/JLZdPImGrsEXFy427RkuGfTqSiKAAAAAAAAGNk1XByk9kuZkVeoXcc/hrwxff9WIPHIvlfPd90VyR5AGkAAEAR7s3Eolw3ZVFcuk7Eme1c4WQU65xlF8nFpr+AMgAAXdyLPCynZ/Tm1xLk+pWH2LcWmns13pixV8DxxrldWprnya6M9jKgAAAADyyLPhVSl0Xd6lK99+97ssdTltVGPWRXFiAAKgad2n7Q2u6zCwLHCEPlstg9nJ+aT+nU2bVsl4emZWRDxV1tx9eS/k5eUH3tt83zJWn5+Tp1ytxLXDrHf5ZeqIoGI6bo+pVaphRyK1wy5WQ/TLoTjRuxGTKvU7Mf8ALdXv+8e/+zZvJFAABM06zhtcG+6S7vUs0UVUuC2EukkXiJVj6ACKAACu1TxV+jIJP1Rf8cvVEA1EoAAiv1+t26Jmwjz+E3t6d/2OaHWmlJbSSaa2afmjm2t6TbpWXKDTdEn/AErPJrpv1RRXAH1JyaUU229kktwL3sXW562prlCqT9+430ouymkz07EndkLhyL9t4vnCK5L1/wAF6QAAAL6PhXoUKW7S6svo8iVY+gAigAAi6hDjx3su+L3KovpJNNPkykvr+FbKHTl6FiVgACoGF1Vd1cq7oRnW+amt0yh1vtPVhSnj4cY3XrulJv5IP7s1HN1PNzpN5OTOS/SntH2XcBuV2i9n3Y/iRpg/0xvcV7bk7TtN03GaswaaeJfni+J+/ecz2XQyrnKuXFXOUJdYtp+5R1kGh6X2pzcSShlP8TT58XjXo/P9zc8DNx9Qxlfi2KUG9n1i+jXkQSQAB7YcHPIitu5PdlwuRD02rhg7Hzly9CaZrUAAAAAAi52P8WvePjjy+v0JQAoOT9DWu12tSxYfgcWTjdOO9klzhF+Xqzds7FUoysqj86W/D+r/ACcb1GeRZn3zy4She5t2RktnF9PbY1Os1HABrEAADQm6TqV2l5cb6d2uU4b9010IQJhrq2LkV5WPXfRLiqsipRZMxcd32bPwLxP7Gsf6eQycnFuqnCSxoy4q7HybfiS/c3yquNcFGC2SJa0yS25H0AyoAAAAAAAAVWs6Dg6xBLLq3nFbRsi9pR/f/wBLUAcz1TsFqGPJywLYZVflF/JNfZ+6NcytM1DEltk4OTV9ZVPb35HbmtxwrbYupjgz7nszOuqy17VVzm+kIt/2O5uip864P/qjKMIw8EVH0Ww0xyDA7LaznNcOFOmD/NkL4a9n3/wbfo/YPExuGzUrPxU13/DS4YL7s3HhQ2GkjGquNcVCCUYxWySWyRmARQAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k='
                                alt='profile' />
                            <h1 className='flex text-xl font-semibold'>Demo Admin</h1>
                            <h1 className='flex text-sm text-gray-500'>Admin</h1>

                        </div>
                        <div className='flex mt-2 py-2  w-[94%] mx-[3%] items-center justify-between border-t-[1px] border-gray-500'>
                            <h1 className='flex text-sm font-semibold'>Username</h1>
                            <h1 className='flex text-sm text-blue-500'>Demo </h1>

                        </div>
                        <div className='flex  py-2 w-[94%] mx-[3%] mt-2 items-center justify-between  border-t-[1px] border-gray-500'>
                            <h1 className='flex text-sm font-semibold'>Email</h1>
                            <h1 className='flex text-sm text-blue-500 '>demo@eziline.com </h1>

                        </div>
                        <div className='flex  py-2 w-[94%] mx-[3%] mt-2 items-center justify-between  border-t-[1px] border-gray-500'>
                            <h1 className='flex text-sm font-semibold'>Is Active?</h1>
                            <div className='flex text-sm bg-green-500 px-1 rounded-xl text-white'>Active</div>

                        </div>

                        <Link to={"/home/users/viewuser/1"} className='w-[94%] mx-[3%] mt-4 bg-blue-600 text-white px-2 py-1 flex items-center justify-center'> Edit</Link>

                    </div>

                    <div className='w-[73%] ml-[2%]  flex flex-col  '>
                        <div className='md:grid flex-col grid-cols-1 md:grid-cols-3'>
                            <div onClick={()=>{setUsinfo(true); setActivities(false); setDocNote(false)}} className={`flex w-full  py-1 ${usinfo ? "border-t-[3px]  border-blue-500":"border-b-[1px] border-gray-500"} h-[50px] `}>

                                <div className='flex  cursor-pointer items-center justify-center'>
                                    <FaUser size={20} />
                                    <h1 className='text-lg font-bold'>User Information</h1>
                                </div>

                            </div>
                            <div onClick={()=>{setDocNote(true); setUsinfo(false) ;setActivities(false)}} className={`flex w-full py-1  ${docNote ? "border-t-[3px]  border-blue-500":"border-b-[1px] border-gray-500"} h-[50px] `}>

                                <div className='flex cursor-pointer  items-center justify-center'>
                                    <FaPaperclip size={20} />
                                    <h1 className='text-lg font-bold'>Docs & Notes</h1>
                                </div>

                            </div>
                            <div onClick={()=>{setActivities(true); setUsinfo(false); setDocNote(false)}} className={`flex w-full py-1  ${activities ? "border-t-[3px]  border-blue-500":"border-b-[1px] border-gray-500"} h-[50px] `}>

                                <div className='flex items-center cursor-pointer  justify-center'>
                                    <FaPenSquare size={20} />
                                    <h1 className='text-lg font-bold'>Activites</h1>
                                </div>

                            </div>
                            
                        </div>
                        <div className='flex'>
                            {usinfo && <UserInfo /> }
                            {docNote && <DocNotes />}
                            {activities && <Activites />}

                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default ViewUser