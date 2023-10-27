import React, { useRef } from 'react'
import { FaDownload } from "react-icons/fa"

const ImportOpeningStock = () => {
    const ref = useRef();
    const record = [
        {
            columnName: "SKU",
            required: "Required",
            instruction: "",
            subinstruction: "",
        },
        {
            columnName: "Location",
            required: "Required (If blank first business location will be used)",
            instruction: "Name of the business location",
            subinstruction: "",
        },
        {
            columnName: "Quantity ",
            required: "Required",
            instruction: "",
            subinstruction: "",
        },
        {
            columnName: "Unit Cost (Before Tax) ",
            required: "Required",
            instruction: "",
            subinstruction: "",
        },
        {
            columnName: "Lot Number",
            required: "Optional",
            
        },
        {
            columnName: "EXP Date",
            required: "Optional",
            instruction: "Stock Expiry date in Bussiness",
            subinstruction: "Date Format mm/dd/yyyy",
            subinstruction1: "Type: text, Example: 09/23/2023"
        }

    ]
    const handleFileUpload = () => {
        ref.current?.click();
    }
    return (
        <div className='flex flex-col min-h-screen bg-white p-5 '>
            <h1 className='text-xl  text-start mb-4 '>Import Opening Stock</h1>
            <div onClick={handleFileUpload} className='flex flex-col w-full p-3'>
                <h1 className='text-xl  text-start '>File To Import</h1>
                <div className='flex w-full h-[200px] border-[2px] border-gray-700 cursor-pointer items-center justify-center '>
                    <span>Drop Files Here to Upload</span>
                    <input type='file' className='hidden' ref={ref} />
                </div>


            </div>
            <div className='flex text-white mx-2 bg-green-500 w-[250px] items-center justify-center p-2'>
                <FaDownload size={15} />
                <h1 className='text-start mx-1'>Download Sample Format</h1>
            </div>
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
                            <td className="px-1 py-1"> {index + 1}</td>
                            <td className="px-1 py-1 flex items-center">{value.columnName} <sapn className="text-xs mx-1 mt-1">({value.required})</sapn></td>
                            <td className=" py-1 px-1">
                                <div className='flex flex-col justify-start '>
                                    <p className='font-bold text-start'>{value.instruction}</p>
                                    <p className=' text-start'>{value.subinstruction}</p>
                                    <p className=' text-start'>{value.subinstruction1}</p>

                                </div>
                            </td>

                        </tr>
                    })}


                </tbody>
                <tfoot>
                    <tr></tr>
                </tfoot>
            </table>

            <div className='flex items-end justify-end mt-5'>
                <button className='bg-blue-500 px-2 py-2 rounded-md items-center justify-center flex'>Import</button>
            </div>
        </div>
    )
}

export default ImportOpeningStock