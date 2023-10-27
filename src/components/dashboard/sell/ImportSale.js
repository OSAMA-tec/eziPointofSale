import React, { useRef } from 'react'
import { FaDownload } from "react-icons/fa"

const ImportSale = () => {
    const ref = useRef();
    const record = [
        
        {
            columnName: "Invoice No.",
            instruction:""
        },
        {
            columnName: "Customer Name",
            instruction:""
        },
        {
            columnName: "Customer Phone Number",
            instruction:"Either customer email id or phone number required"
            
        },
        {
            columnName: "Customer Email",
            instruction:"Either customer email id or phone number required"
        },
        {
            columnName: "Sale Date",
            instruction:"Sale date time format should be 'Y-m-d H:i:s' (2020-07-15 17:45:32)"
        },
        {
            columnName: "Product Name",
            instruction:"Either product name (for single and combo only) or product sku required"
        },
        {
            columnName: "Product SKU",
            instruction:"Either product name (for single and combo only) or product sku required"
        },
        {
            columnName: "Quantity",
            instruction:"Required"
        },
        {
            columnName: "Product Unit",
            instruction:""
        },
        {
            columnName: "Item Tax",
            instruction:""
        }
        ,
        {
            columnName: "Item Discount",
            instruction:""
        },
        {
            columnName: "Item Description",
            instruction:""
        },
        {
            columnName: "Order Total",
            instruction:""
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
                <ol type='1'>
                    <li>
                        <p className='mx-1 text-start '>Upload sales data in excel format</p>

                    </li>
                    <li>
                        <p className='mx-1 text-start '>Choose business location and column by which sell lines will be grouped</p>

                    </li>
                    <li>
                        <p className='mx-1 text-start '>Choose respective sales fields for each column</p>

                    </li>
                </ol>

                <table  className="table-auto w-full  my-10   px-5 ">
                    <thead>
                        <tr className='h-[50px]'>
                            <th className=" py-2 title-font  tracking-wider font-bold text-gray-900 text-lg">Column #</th>
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
                                </td>
                                <td className=" py-1 px-1">
                                    <div className='flex flex-col justify-start'>
                                        <p className='font-bold text-start'>{value.instruction}</p>
                                        

                                    </div>
                                </td>

                            </tr>
                        })}


                    </tbody>
                    <tfoot>
                        <tr></tr>
                    </tfoot>
                </table>
                
                <div className='flex flex-col py-5 bg-gray-100'>
                <h1 className='text-start text-xl font-bold mx-2'>Imports</h1>
                <table  className="table-fixed  mt-10   px-5 ">
                    <thead>
                        <tr className='h-[50px]'>
                            <th className=" py-2 title-font  tracking-wider font-bold text-gray-900 text-lg">Import Batch</th>
                            <th className=" py-2 title-font  tracking-wider font-bold text-gray-900 text-lg">Import Time</th>
                            <th className=" py-2 title-font  tracking-wider font-bold text-gray-900 text-lg">Created By</th>
                            <th className=" py-2 title-font  tracking-wider font-bold text-gray-900 text-lg">Invoice</th>
                            <th className=" py-2 title-font  tracking-wider font-bold text-gray-900 text-lg">Actions</th>

                        </tr>
                    </thead>
                    <tbody >
                        


                    </tbody>
                    <tfoot>
                        <tr></tr>
                    </tfoot>
                </table>
                </div>
                

            </div>


        </div>
    )
}

export default ImportSale