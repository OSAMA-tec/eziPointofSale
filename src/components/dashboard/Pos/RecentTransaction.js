import React, { useState } from 'react'
import { FaCheck, FaPen, FaPrint, FaTerminal, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RecentTransaction = () => {
    const dummyData1 = [
        {
            id:1,
            customer:"Customer1",
            total:233
        },
        {
            id:2,
            customer:"Customer2",
            total:330
        },
        {
            id:3,
            customer:"Customer3",
            total:230
        },
        {
            id:4,
            customer:"Customer4",
            total:500
        },
        {
            id:5,
            customer:"Customer5",
            total:350
        },
        {
            id:6,
            customer:"Customer6",
            total:100
        },
        {
            id:7,
            customer:"Cutomer7",
            total:200
        }
    ]

    const [final, setFinal] = useState(false)
    const [quotation, setQuotation] = useState(false)
    const [draft, setDraft] = useState(false)
    return (
        <div className='flex flex-col bg-white px-4 pb-4'>
            <h1 className='text-xl font-bold text-start'>Recent Transaction</h1>

            <div className='flex items-center mt-5'>
                <div onClick={() => { setFinal(true); setQuotation(false); setDraft(false) }} className={`flex mx-3  py-1 ${final ? "border-t-[3px]  border-blue-500" : "border-b-[1px] border-gray-500"} h-[50px] `}>
                    <div className='flex  cursor-pointer items-center justify-center'>
                        <FaCheck size={15} />
                        <h1 className='text-lg font-bold'>Final</h1>
                    </div>
                </div>
                <div onClick={() => { setFinal(false); setQuotation(true); setDraft(false) }} className={`flex mx-3  py-1 ${quotation ? "border-t-[3px]  border-blue-500" : "border-b-[1px] border-gray-500"} h-[50px] `}>
                    <div className='flex  cursor-pointer items-center justify-center'>
                        <FaTerminal size={15} />
                        <h1 className='text-lg font-bold'>Quotation</h1>
                    </div>
                </div>
                <div onClick={() => { setFinal(false); setQuotation(false); setDraft(true) }} className={`flex mx-3  py-1 ${draft ? "border-t-[3px]  border-blue-500" : "border-b-[1px] border-gray-500"} h-[50px] `}>
                    <div className='flex  cursor-pointer items-center justify-center'>
                        <FaTerminal size={15} />
                        <h1 className='text-lg font-bold'>Draft</h1>
                    </div>
                </div>
            </div>
            <div className='flex'>
                {final &&
                    <div className='flex w-full   mt-5 ' >
                    <table className="table-fixed   mb-2 w-full  px-5 ">
                        
                        <tbody >
                            {dummyData1.map((value, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-100" : ""} text-start`}>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td>
                                        {value.customer}
                                    </td>
                                    <td >
                                        {value.total}
                                    </td>
                                    <td >
                                       <Link to={`/pos/edit/${value.id}`} >
                                       <FaPen size={15} />
                                        </Link> 
                                    </td>
                                    <td>
                                        <FaTrash size={15} style={{color:"red"}} />
                                    </td>
                                    <td>
                                        <FaPrint size={15} style={{color:"gray"}} />
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
                }
                {quotation &&
                    <div className='flex w-full   mt-5 ' >
                    <table className="table-fixed   mb-2 w-full  px-5 ">
                        
                        <tbody >
                            {dummyData1.map((value, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-100" : ""} text-start`}>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td>
                                        {value.customer}
                                    </td>
                                    <td >
                                        {value.total}
                                    </td>
                                    <td >
                                       <Link to={`/pos/edit/${value.id}`} >
                                       <FaPen size={15} />
                                        </Link> 
                                    </td>
                                    <td>
                                        <FaTrash size={15} style={{color:"red"}} />
                                    </td>
                                    <td>
                                        <FaPrint size={15} style={{color:"gray"}} />
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
                }
                {draft &&
                    <div className='flex w-full   mt-5 ' >
                    <table className="table-fixed   mb-2 w-full  px-5 ">
                        
                        <tbody >
                            {dummyData1.map((value, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 0 ? "bg-gray-100" : ""} text-start`}>
                                    <td>
                                        {index+1}
                                    </td>
                                    <td>
                                        {value.customer}
                                    </td>
                                    <td >
                                        {value.total}
                                    </td>
                                    <td >
                                       <Link to={`/pos/edit/${value.id}`} >
                                       <FaPen size={15} />
                                        </Link> 
                                    </td>
                                    <td>
                                        <FaTrash size={15} style={{color:"red"}} />
                                    </td>
                                    <td>
                                        <FaPrint size={15} style={{color:"gray"}} />
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr></tr>
                        </tfoot>
                    </table>
                </div>
                }
            </div>
        </div>
    )
}

export default RecentTransaction