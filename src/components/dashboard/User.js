import React from 'react'
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'
import { FaColumns, FaEdit, FaEye, FaFileCsv, FaFileExcel, FaFilePdf, FaPrint, FaSearch } from 'react-icons/fa'

const User = () => {
    const dummyData = [
        {
            id: 1,
            Username: "username",
            Name: "User",
            Role: "Admin",
            Email: "username@gmail.com"
        },
        {
            id: 2,
            Username: "username1",
            Name: "User1",
            Role: "Admin",
            Email: "username@gmail.com"
        },
        {
            id: 3,
            Username: "username2",
            Name: "User2",
            Role: "Admin",
            Email: "username2@gmail.com"
        },
        {
            id: 4,
            Username: "username3",
            Name: "User3",
            Role: "Admin",
            Email: "username3@gmail.com"
        },
        {
            id: 5,
            Username: "username4",
            Name: "User4",
            Role: "Admin",
            Email: "username4@gmail.com"
        },
        {
            id: 6,
            Username: "username5",
            Name: "User5",
            Role: "Admin",
            Email: "username5@gmail.com"
        },
        {
            id: 7,
            Username: "username6",
            Name: "User6",
            Role: "Admin",
            Email: "username6@gmail.com"
        }
    ]
    return (
        <div className='flex flex-col w-full '>
            <h1 className='mx-5 mt-5 text-2xl font-bold text-start'>Users <span className='text-gray-400 text-sm'>Manage Users</span></h1>
            <div className=' w-[96%]  mx-[2%]  shadow-md my-5 shadow-gray-400 min-h-[300px] border-t-[2px] border-blacklue-600 rounded-xl'>
                <div className='flex justify-between mt-2 text-sm mx-5'>
                    <h1 className='text-xl font-semibold text-start p-5'>All Users</h1>
                    <button className='flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                        <AiOutlinePlus size={15} /> Add

                    </button>

                </div>
                <div className='flex items-center justify-between mx-5'>
                    <div className='flex items-center'>
                        <h1 className='text-sm mx-1'>Show</h1>
                        <select className='w-[100px] border-[1px] border-black focus:outline-none text-center' >
                            <option value={"25"}> 25</option>
                            <option value={"50"}> 50</option>
                            <option value={"100"}> 100</option>
                            <option value={"200"}> 200</option>
                            <option value={"500"}> 500</option>
                            <option value={"1,000"}> 1,000</option>
                            <option value={"All"}> All</option>

                        </select>
                        <h1 className='text-sm mx-1'>enteries</h1>

                    </div>
                    <div className='flex items-center justify-center'>
                        <button className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                            <FaFileCsv size={15} className=' mt-1 pr-[2px]' />
                            <h1 className='text-sm'>Export to CSV</h1>
                        </button>
                        <button className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                            <FaFileExcel size={15} className=' mt-1 pr-[2px]' />
                            <h1 className='text-sm'>Export to Excle</h1>
                        </button>
                        <button className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                            <FaPrint size={15} className=' mt-1 pr-[2px]' />
                            <h1 className='text-sm'>Print</h1>
                        </button>
                        <button className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                            <FaColumns size={15} className=' mt-1 pr-[2px]' />
                            <h1 className='text-sm'>Column Visibility</h1>
                        </button>
                        <button className='flex border-[1px] px-2 py-1 hover:bg-gray-400 border-gray-600 bg-gray-200 '>
                            <FaFilePdf size={15} className=' mt-1 pr-[2px]' />
                            <h1 className='text-sm'>Export to PDF</h1>
                        </button>
                    </div>
                    <div className='flex items-center justify-center border-[1px] border-black'>
                        <FaSearch size={15} className=' mt-1 mx-1' />
                        <input className=' focus:outline-none px-2' type='search' id="search" name='serch' placeholder='Search' />
                    </div>


                </div>
                <div className='flex justify-center items-center mt-5 mx-5'>
                    <table className="table-fixed w-full mb-10  whitespace-no-wrap border-[1px] border-gray-400">
                        <thead>
                            <tr>
                                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">Username</th>
                                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Name</th>
                                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Role</th>
                                <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Email</th>
                                <th className=" title-font  text-start tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tr rounded-br">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {dummyData.map((value, index) => {
                                return <tr key={index} className=''>
                                    <td className="px-1 py-1 text-sm">{value.Username}</td>
                                    <td className="px-1 py-1"> {value.Name}</td>
                                    <td className="px-1 py-1">{value.Role}</td>
                                    <td className=" py-1  text-gray-900">{value.Email}</td>
                                    <td className='py-1 flex '>
                                        <div className='flex mx-1 p-1 items-center bg-blue-600 text-white justify-center'>
                                            <FaEdit size={15} />
                                            <h1 className='text-sm'>Edit</h1>
                                        </div>
                                        <div className='flex mx-1 p-1 items-center bg-blue-300 text-white justify-center'>
                                            <FaEye size={15} />
                                            <h1 className='text-sm'>View</h1>
                                        </div>
                                        <div className='flex mx-1 p-1 items-center bg-red-500 text-white justify-center'>
                                            <AiOutlineDelete size={15} />
                                            <h1 className='text-sm'>Delete</h1>
                                        </div>
                                    </td>
                                </tr>
                            })}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default User