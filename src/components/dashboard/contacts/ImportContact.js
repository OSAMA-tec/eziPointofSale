import React, { useRef } from 'react'
import { FaDownload } from "react-icons/fa"

const ImporContact = () => {
    const ref = useRef();
    const record = [
        {
            columnName: "Contact type",
            required: "Required",
            instruction: "Availabale Options:",
            subinstruction: "1= Customer",
            subinstruction1: "2= Supplier",
            subinstruction2: "3= Both",
        },
        {
            columnName: "Prefix",
            required: "Optional"
        },
        {
            columnName: "First Name",
            required: "Required"
        },
        {
            columnName: "Middle Name",
            required: "Optional"
        },
        {
            columnName: "Last Name",
            required: "Optional"
        },
        {
            columnName: "Business Name",
            required: "Required if contact type is supplier or both"
        },
        {
            columnName: "Contact ID",
            required: "Optional",
            instruction: "Leave Blank to auto generate Contact ID"
        },
        {
            columnName: "Tax Number",
            required: "Optional"
        },
        
        {
            columnName: "Opening Balance",
            required: "Optional"
        },
        {
            columnName: "Pay Term",
            required: "Required if contact type is supplier or both"
        },
        {
            columnName: "Pay term period",
            required: "Required if contact type is supplier or both",
            instruction: "Available Options:",
            subinstructio: "Days and Months"
        },
        {
            columnName: "Credit Limit",
            required: "Optional"
        },
        {
            columnName: "Email",
            required: "Optional"
        },
        {
            columnName: "Mobile",
            required: "Required"
        },
        {
            columnName: "Alternate Contact number",
            required: "Optional"
        },
        {
            columnName: "Landline",
            required: "Optional"
        },
        {
            columnName: "City",
            required: "Optional"
        },
        {
            columnName: "State",
            required: "Optional"
        },
        {
            columnName: "Country",
            required: "Optional"
        },
        {
            columnName: "Address Line 1",
            required: "Optional"
        },
        {
            columnName: "Address Line 2",
            required: "Optional"
        },
        {
            columnName: "Zip Code",
            required: "Optional"
        },
        {
            columnName: "Date of Birth",
            required: "Optional",
            instruction: "Format Y-m-d (2023-09-15)"
        },
        {
            columnName: "Custom Filed 1",
            required: "Optional"
        },
        {
            columnName: "Custom Filed 2",
            required: "Optional"
        },
        {
            columnName: "Custom Filed 3",
            required: "Optional"
        },
        {
            columnName: "Custom Filed 4",
            required: "Optional"
        }


    ]
    const handleFileUpload = () => {
        ref.current?.click();
    }
    return (
        <div className='flex flex-col min-h-screen bg-white p-5'>
            <h1 className='text-xl  text-start mb-4'>Import Contacts</h1>
            <div className='flex flex-col bg-white border-t-[3px] border-blue-500 rounded-md p-3'>
                <div onClick={handleFileUpload} className='flex flex-col w-full p-3'>
                    <h1 className='text-xl  text-start '>File To Import</h1>
                    <div className='flex w-full h-[200px] border-[2px] border-gray-700 cursor-pointer items-center justify-center '>
                        <span>Drop Files Here to Upload</span>
                        <input type='file' className='hidden' ref={ref} />
                    </div>


                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex text-white mx-2 bg-green-500 w-[250px] items-center justify-center p-2'>
                        <FaDownload size={15} />
                        <h1 className='text-start mx-1'>Download Sample Format</h1>
                    </div>
                    <div className='flex items-end justify-end mt-5'>
                        <button className='bg-blue-500 px-2 py-2 rounded-md items-center justify-center flex'>Import</button>
                    </div>
                </div>

            </div>

            <div className='flex flex-col mt-5 bg-white border-t-[3px] border-blue-500 rounded-md p-3'>
                <h1 className='text-start text-xl  mx-1'>Instructions:</h1>
                <p className='mx-1 mt-2 font-bold text-start'>Follow the Instructions carefully before importing the file</p>
                <p className='mx-1 text-start '>The columns of the file should be in the following order.</p>

                <table id='usertbl' className="table-fixed  my-10   px-5 ">
                    <thead>
                        <tr className='h-[50px]'>
                            <th className=" py-2 title-font  tracking-wider font-bold text-gray-900 text-lg">Column Number</th>
                            <th className=" py-2 title-font  tracking-wider font-bold text-gray-900 text-lg">Column Name</th>
                            <th className=" py-2 title-font  tracking-wider font-bold text-gray-900 text-lg">Instruction</th>

                        </tr>
                    </thead>
                    <tbody >
                        {record.map((value, index) => {
                            return <tr key={index} className={`${(index + 1) % 2 !== 0 ? "bg-gray-100" : ""}`}>
                                <td className="px-1 py-1 text-start "> {index + 1}</td>
                                <td className="px-1 py-1 flex ">
                                    <p className='font-bold text-gray-700 text-start'>{value.columnName}</p>
                                    <p className='text-xs text-gray-400 text-start mx-1 mt-1'>({value.required})</p>
                                </td>
                                <td className=" py-1 px-1">
                                    <div className='flex flex-col justify-start'>
                                        <p className='font-bold text-start'>{value.instruction}</p>
                                        <p className=' text-start'>{value.subinstruction}</p>
                                        <p className=' text-start'>{value.subinstruction1}</p>
                                        <p className=' text-start'>{value.subinstruction2}</p>

                                    </div>
                                </td>

                            </tr>
                        })}


                    </tbody>
                    <tfoot>
                        <tr></tr>
                    </tfoot>
                </table>

            </div>


        </div>
    )
}

export default ImporContact