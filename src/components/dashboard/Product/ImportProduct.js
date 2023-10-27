import React, { useRef } from 'react'
import { FaDownload } from "react-icons/fa"

const ImportProduct = () => {
    const ref = useRef();
    const record = [
        {
            columnName: "SKU",
            required: "Required",
            instruction: "",
            subinstruction: "",
        },
        {
            columnName: "Purchase Quantity",
            required: "Required",
            instruction: "",
            subinstruction: "",
        },
        {
            columnName: "Unit Cost (Before Discount)",
            required: "Optional",
            instruction: "",
            subinstruction: "",
        },
        {
            columnName: "Discount Percent",
            required: "Optional",
            instruction: "",
            subinstruction: "",
        },
        {
            columnName: "Product Tax",
            required: "Optional",
            instruction: "",
            subinstruction: "",
        },
        {
            columnName: "Lot Number",
            required: "Optional",
            instruction: "Only if Lot number is enabled. You can enable Lot number from",
            subinstruction: "Business Settings > Purchases > Enable Lot number",
        },
        {
            columnName: "MFG Date",
            required: "Optional",
            instruction: "Only if Product Expiry is enabled. You can enable Product expiry from",
            subinstruction: "Business Settings > Product > Enable Product Expiry",
            dateFormat: "Format: yyyy-mm-dd; Ex: 2021-11-25"
        },
        {
            columnName: "EXP Date",
            required: "ReqOptionaluired",
            instruction: "Only if Product Expiry is enabled. You can enable Product expiry from",
            subinstruction: "Business Settings > Product > Enable Product Expiry",
            dateFormat: "Format: yyyy-mm-dd; Ex: 2021-11-25"
        }

    ]
    const handleFileUpload = () => {
        ref.current?.click();
    }
    return (
        <div className='flex flex-col min-h-screen bg-white p-5 relative'>
            <h1 className='text-xl  text-start mb-4 absolute -top-5'>Import Products</h1>
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
                            <td className="px-1 py-1">{value.columnName}</td>
                            <td className=" py-1 px-1">
                                <div className='flex flex-col justify-start'>
                                    <p className='font-bold text-start'>{value.instruction}</p>
                                    <p className='font-bold text-red-500 text-start'>{value.subinstruction}</p>
                                    <p className='text-xl text-start'>{value.dateFormat}</p>

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

export default ImportProduct