import React, { useRef } from 'react'
import { FaDownload } from "react-icons/fa"

const ImportProducts = () => {
    const ref = useRef();
    const record = [
        {
            columnName: "Product Name",
            required: "Required",
            instruction: "Name of the product",
            subinstruction: "",
        },
        {
            columnName: "Brand",
            required: "Optional",
            instruction: "Name of the brand",
            subinstruction: "(If not found new brand with the given name will be created)",
        },
        {
            columnName: "Unit",
            required: "Required",
            instruction: "Name of the unit",
            subinstruction: "",
        },
        {
            columnName: "Category",
            required: "Optional",
            instruction: "Name of the Category",
            subinstruction: "(If not found new category with the given name will be created)",
        },
        {
            columnName: "Sub category",
            required: "Optional",
            instruction: "Name of the Sub-Category",
            subinstruction: "(If not found new sub-category with the given name under theparent Category will be created)",
        },
        {
            columnName: "SKU",
            required: "Optional",
            instruction: "Product SKU. If blank an SKU will be automatically generated",
        },
        {
            columnName: "Barcode Type",
            required: "Optional, Default: C128",
            instruction: "Barcode Type for the product.",
            subinstruction: "Currently supported: C128, C39, EAN-13, EAN-8, UPC-A, UPC-E, ITF-14y",
        },
        {
            columnName: "Manage Stock?",
            required: "Required",
            instruction: "Enable or disable stock managemant",
            subinstruction: "1 = Yes",
            subinstruction1: "0 = No"
        },
        {
            columnName: "Alert quantity ",
            required: "Required",
            instruction: "Alert quantity",
            subinstruction: ""
        },
        {
            columnName: "Expires in ",
            required: "Optional",
            instruction: "Product expiry period (Only in numbers)",
            subinstruction: ""
        },
        {
            columnName: "Expiry Period Unit",
            required: "Optional",
            instruction: "Unit for the expiry period",
            subinstruction: "Available Options: days, months"
        },
        {
            columnName: "Applicable Tax",
            required: "Optional",
            instruction: "Name of the Tax Rate",
            subinstruction: "If purchase Price (Excluding Tax) is not same as",
            subinstruction1: "Purchase Price (Including Tax) then you must supply the tax rate name."
        },
        {
            columnName: "Selling Price Tax Type",
            required: "Required",
            instruction: "Selling Price Tax Type",
            subinstruction: "Available Options: inclusive, exclusive"
        },
        {
            columnName: "Product Type",
            required: "Required",
            instruction: "Product Type",
            subinstruction: "Available Options: single, variable"
        },
        {
            columnName: "Variation Name",
            required: "Required if product type is variable",
            instruction: "Name of the variation ",
            subinstruction: "(Ex: Size, Color etc )"
        },
        {
            columnName: "Variation Values",
            required: "Required if product type is variable)",
            instruction: "Values for the variation separated with '|' ",
            subinstruction: "(Ex: Red|Blue|Green)"
        },
        {
            columnName: "Variation SKUs",
            required: "Optional",
            instruction: "SKUs of each variations separated by '|' if product type is variable",
            subinstruction: ""
        },
        {
            columnName: "Purchase Price (Including Tax)",
            required: "Required if Purchase Price Excluding Tax is not given",
            instruction: "Purchase Price (Including Tax) (Only in numbers)",
            subinstruction: "For variable products '|' separated values with the same order as Variation Values ",
            subinstruction1:"(Ex: 84|85|88)",
        },
        {
            columnName: "Purchase Price (Excluding Tax)",
            required: "Required if Purchase Price Including Tax is not given",
            instruction: "Purchase Price (Excluding Tax) (Only in numbers)",
            subinstruction: "For variable products '|' separated values with the same order as Variation Values ",
            subinstruction1:"(Ex: 84|85|88)",
        },
        {
            columnName: "Profit Margin % ",
            required: "Optional",
            instruction: "Profit Margin (Only in numbers)",
            subinstruction: "If blank default profit margin for the business will be used"
        },
        {
            columnName: "Selling Price",
            required: "Optional",
            instruction: "Selling Price (Only in numbers)",
            subinstruction: "If blank selling price will be calculated with the given Purchase Price and Applicable Tax"
        },
        {
            columnName: "Opening Stock",
            required: "Optional ",
            instruction: "Opening Stock (Only in numbers)",
            subinstruction: "For variable products separate stock quantities with '|' ",
            subinstruction1:"(Ex: 100|150|200)"
        },
        {
            columnName: "Opening stock location",
            required: "Optional If blank first business location will be used",
            instruction: "Name of the business location",
            subinstruction: ""
        },
        {
            columnName: "Expiry Date",
            required: "Optional",
            instruction: "Stock Expiry Date",
            subinstruction: "Format: mm-dd-yyyy; Ex: 11-25-2018"
        },
        {
            columnName: "Enable Product description, IMEI or Serial Number",
            required: "Optional, Default: 0",
            instruction: "1 = Yes",
            subinstruction: "0 = No"
        },
        {
            columnName: "Weight",
            required: "Optional",
            instruction: "Optional",
        },
        {
            columnName: "Rack",
            required: "Optional",
            instruction: "Rack details seperated by '|' for different business locations serially. ",
            subinstruction:"(Ex: R1|R5|R12)",
        },
        {
            columnName: "Row ",
            required: "Optional",
            instruction: "Row details seperated by '|' for different business locations serially.",
            subinstruction: "(Ex: ROW1|ROW2|ROW3)"
        },
        {
            columnName: "Position",
            required: "Optional",
            instruction: "Position details seperated by '|' for different business locations serially.",
            subinstruction: "(Ex: POS1|POS2|POS3)"
        },
        {
            columnName: "Image ",
            required: "Optional",
            instruction: "Image name with extension. (Image name must be uploaded to the server public/uploads/img )",
            subinstruction: "Or URL of the image"
        },
        {
            columnName: "Product Description",
            required: "Optional",
            instruction: "",
            subinstruction: ""
        },
        {
            columnName: "Custom Field1",
            required: "Optional",
            instruction: "",
            subinstruction: ""
        },
        {
            columnName: "Custom Field2",
            required: "Optional",
            instruction: "",
            subinstruction: ""
        },
        {
            columnName: "Custom Field3",
            required: "Optional",
            instruction: "",
            subinstruction: ""
        },
        {
            columnName: "Custom Field4",
            required: "Optional",
            instruction: "",
            subinstruction: ""
        },
        {
            columnName: "Not for selling ",
            required: "Optional",
            instruction: "1 = Yes",
            subinstruction: "0 = No"
        },
        {
            columnName: "Product locations",
            required: "Optional",
            instruction: "Comma separated string of business location names where product will be available",
            subinstruction: ""
        }

    ]
    const handleFileUpload = () => {
        ref.current?.click();
    }
    return (
        <div className='flex flex-col min-h-screen bg-white p-5 '>
            <h1 className='text-xl  text-start mb-4'>Import Products</h1>
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
                            <td className="px-1 py-1 text-start flex flex-col">{value.columnName} <sapn className="text-xs mx-1 mt-1">({value.required})</sapn></td>
                            <td className=" py-1 px-1">
                                <div className='flex flex-col justify-start'>
                                    <p className=' text-start'>{value.instruction}</p>
                                    <p className='text-start text-xs'>{value.subinstruction}</p>
                                    <p className=' text-start text-xs'>{value.subinstruction1}</p>

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

export default ImportProducts