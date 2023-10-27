import React, { useState } from 'react'
import { FaInfo } from 'react-icons/fa'

const EditOrderTax = () => {
    const [orderTax, setOrderTax] = useState(0)
    const handleUpdate = () => {
        console.log("Update", orderTax)
    }
    return (
        <div className='flex flex-col w-full px-5 pb-2  bg-white'>
            <h1 className='text-sm text-start font-bold'>Edit Order Tax</h1>

            <div className='flex flex-col items-start mt-5 w-1/2 '>
                <h1 className='text-sm text-start font-bold'>Order Tax:*</h1>
                <div className='flex items-center w-full justify-center mt-1'>
                    <FaInfo size={15} className='w-8 h-8 p-1 border-[1px] border-gray-500' />
                    <select type='number' value={orderTax} onChange={(e) => { setOrderTax(e.target.value) }} className='px-2 w-full  py-1 border-[1px] border-gray-500' >
                        <option value={""}>Please Selecet</option>
                        <option selected="slected">None</option>
                        <option value={"5"} data-rate="5.000">sss</option>
                        <option value={"6"} data-rate="6.000">Nikki Wolf</option>
                        <option value={"7"} data-rate="7.000">Nikki Wolf</option>
                        <option value={"8"} data-rate="8.00">pepsi</option>

                    </select>
                </div>



            </div>
            <div className='flex items-end justify-end'>

                <button onClick={handleUpdate} className='bg-blue-600 text-white px-2 py-1 mt-5  mx-5'>Update</button>
            </div>
        </div>
    )
}

export default EditOrderTax