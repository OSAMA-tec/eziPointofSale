import React, { useState, useEffect } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { FaEdit, FaEye, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import axios from 'axios';

import { Button} from 'react-bootstrap';

const RolesTable = () => {
    // const dummyData = [
    //     {
    //         id: 1,
    //         Username: "username",
    //         Name: "User",
    //         Role: "Admin",
    //         Email: "username@gmail.com"
    //     },
    //     {
    //         id: 2,
    //         Username: "username1",
    //         Name: "User1",
    //         Role: "Admin",
    //         Email: "username@gmail.com"
    //     },
    //     {
    //         id: 3,
    //         Username: "username2",
    //         Name: "User2",
    //         Role: "Admin",
    //         Email: "username2@gmail.com"
    //     },
    //     {
    //         id: 4,
    //         Username: "username3",
    //         Name: "User3",
    //         Role: "Admin",
    //         Email: "username3@gmail.com"
    //     },
    //     {
    //         id: 5,
    //         Username: "username4",
    //         Name: "User4",
    //         Role: "Admin",
    //         Email: "username4@gmail.com"
    //     },
    //     {
    //         id: 6,
    //         Username: "username5",
    //         Name: "User5",
    //         Role: "Admin",
    //         Email: "username5@gmail.com"
    //     },
    //     {
    //         id: 7,
    //         Username: "username6",
    //         Name: "User6",
    //         Role: "Admin",
    //         Email: "username6@gmail.com"
    //     }
    // ]
    const [rolesData, setRolesData] = useState([]);
    const fetchRoles = async () => {

        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8000/admin/roles`);
            // console.log(response)
            setRolesData(response.data);
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };
    useEffect(() => {
        // Make an API call to fetch user's roles records
        fetchRoles();
    }, []);
    const [crpage, setCrpage] = useState(1)
    const rcrdprpg = 5
    const lasIndex = crpage * rcrdprpg
    const frstIndex = lasIndex - rcrdprpg
    const record = rolesData.slice(frstIndex, lasIndex)
    const npage = Math.ceil(rolesData.length / rcrdprpg)
    const numbers = [...Array(npage + 1).keys()].slice(1)




    const prevPage = () => {
        if (crpage !== 1) {
            setCrpage(crpage - 1)
        }
    }
    const nextPage = () => {
        if (crpage !== numbers.length) {
            setCrpage(crpage + 1)
        }
    }


    return (
        <div>
            <div className='flex  flex-col md:flex-row  items-center justify-center md:justify-between mx-5'>
                <div className='flex items-center justify-center my-2 md:my-0'>
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

                <div className='flex items-center justify-center  w-[300px] md:w-auto my-2 md:my-0 border-[1px] border-black'>
                    <FaSearch size={15} className=' mt-1 mx-1' />
                    <input className=' focus:outline-none px-2' type='search' id="search" name='serch' placeholder='Search' />
                </div>


            </div>
            <div className='flex flex-col justify-center items-center mt-5 mx-5'  >
                <table id='usertbl' className="table-auto w-full mb-10  whitespace-no-wrap border-[1px] border-gray-400">
                    <thead>
                        <tr>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Roles</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {record.map((value, index) => {
                            return <tr key={index} className=''>

                                <td className=" py-1 px-1">{value.name}</td>
                                <td className='py-1 flex '>
                                    
                                    <Button as={Link} to={`/home/roles/editroles/${value._id}`} className='flex mx-1 p-1 items-center bg-blue-600 text-white justify-center'>
                                        <FaEdit size={15} />
                                        <h1 className='text-sm'>Edit</h1>
                                    </Button>
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
                <nav className='  my-2 w-full'>
                    <ul className='flex justify-end'>
                        <li>
                            <button disabled={crpage === 1 ? true : false} className='p-3 mx-1 bg-green-400 text-white' onClick={prevPage}> Previous</button>
                        </li>
                        {
                            numbers.map((n, i) => {
                                return <li key={i} className={`${crpage === n ? 'bg-blue-500' : ''} py-3 px-4 mx-1 border-[1px] border-gray-400`}>
                                    <button onClick={() => { setCrpage(n) }}>{n}</button>
                                </li>
                            })
                        }
                        <li>
                            <button className='p-3 bg-green-400 text-white mx-1 ' onClick={nextPage}> Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default RolesTable