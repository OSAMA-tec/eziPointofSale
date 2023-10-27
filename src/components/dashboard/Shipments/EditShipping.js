import React, { useRef, useState } from 'react'

const EditShipping = (props) => {



    const inpuRef1 = useRef()
    const [formData, setFormData] = useState({
        shippingDetails: "",
        shippingAddress: "",
        shippingStatus: "",
        shippingCharges: 0,
        deliveredTo: "",
        deliveryPerson: "",
        record: []
    })

    const handleClick = (e) => {
        console.log("Handle Update", formData)
    }





    return (
        <div className='w-full px-2 pb-3 bg-white'>
            <h1 className='text-xl text-start font-bold '>Shipping</h1>

            <div className='flex  w-full   flex-col  mt-2 bg-white '>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Detials:</h1>
                        <textarea rows={4} value={formData.shippingDetails} onChange={(e) => { setFormData({ ...formData, shippingDetails: e.target.value }) }} placeholder='Shipping Details' type='Text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Address:</h1>
                        <textarea rows={4} value={formData.shippingAddress} onChange={(e) => { setFormData({ ...formData, shippingAddress: e.target.value }) }} placeholder='Shipping Details' type='Text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>

                </div>
                <div className='grid grid-cols-3 gap-5 mt-5'>
                   
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Shipping Status:</h1>

                        <select value={formData.shippingStatus} onChange={(e) => { setFormData({ ...formData, shippingStatus: e.target.value }) }} className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>Please Selecet</option>
                            <option value={"Ordered"}>Ordered</option>f
                            <option value={"Packed"}>Packed</option>
                            <option value={"Shipped"}>Shipped</option>
                            <option value={"Delivered"}>Delivered</option>
                            <option value={"Cancelled"}>Cancelled</option>

                        </select>

                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Delivered to:</h1>
                        <input value={formData.deliveredTo} onChange={(e) => { setFormData({ ...formData, deliveredTo: e.target.value }) }} placeholder='Delivered to' type='text' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none' />

                    </div>
                    <div className='flex flex-col '>
                        <h1 className='flex text-sm text-start font-bold'>Delivery Person:</h1>

                        <select value={formData.deliveryPerson} onChange={(e) => { setFormData({ ...formData, deliveryPerson: e.target.value }) }} type='Text' placeholder='Enter Product name / SKU / Scan bar code' className='px-2 py-[2px] w-full border-[1px] border-gray-600 focus:outline-none'>
                            <option value={""}>Please Selecet</option>
                            <option value={"Demo Admin"}>Demo Admin</option>f
                            <option value={"Ismail Shah"}>Ismail Shah</option>f
                        </select>
                    </div>

                </div>



            </div>
            <div className=' flex flex-col mt-5 '>
                <h2 className='text-start font-bold '> Shipping Documents:</h2>
                <div className='flex'>
                    {/* value={formData.img_data} onChange={ (e)=>setFormData({...formData,  img_data: e.target.value})} */}
                    <input className=' hidden' type='file' ref={inpuRef1} accept='application/pdf,text/csv,application/zip,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/jpg,image/png' />
                    <div onClick={() => { inpuRef1.current?.click(); }} className='flex cursor-pointersu  cursor-pointer w-full border-[2px] border-gray-600 h-[200px] items-center justify-center'>
                        Drop files here to upload
                    </div>
                </div>


            </div>

            <div className='flex flex-col justify-center items-center mt-5'  >
                <table id='usertbl' className="table-fixed w-full mb-10  whitespace-no-wrap ">
                    <thead>
                        <tr>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Date</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Action</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">By</th>
                            <th className=" py-2 title-font  tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Note</th>
                        </tr>
                    </thead>
                    {formData.record.length === 0 ? <p className='text-center w-full'>No records found</p> :
                        <tbody >
                            {formData.record.map((value, index) => {
                                return <tr key={index} className=''>

                                    <td className="px-1 py-1 text-sm">{value.Username}</td>
                                    <td className="px-1 py-1"> {value.Name}</td>
                                    <td className="px-1 py-1">{value.Role}</td>
                                    <td className=" py-1 px-1">{value.Email}</td>

                                </tr>
                            })}


                        </tbody>
                    }

                </table>

            </div>







            <div className='flex items-end justify-end mt-5'>
                <button onClick={handleClick} className='bg-green-500 px-2 py-2 items-center justify-center flex'>Updade</button>
            </div>

        </div>
    )
}

export default EditShipping