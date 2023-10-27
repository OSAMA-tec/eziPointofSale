import React, { useState } from 'react'

const AddorEditSalesCmsnPerc = (props) => {
    const [iserror, setIserror] = useState(false)
    const [formData, setFormData] = useState({
        prefix:"",
        firstName:"",
        lastName:"",
        email:"",
        contactNumber:"",
        address:"",
        slscmsnPercnetage:0
    })

    const handleClick = () =>{
        if(formData.firstName.length === 0 ){
            setIserror(true)
        }else if(props.id === 0){
            console.log("Handle Save", formData)
        }else if (props.id !== 0){
            console.log("Handle Update", formData)
        }
    }

    return (
        <div  className='flex w-full md:w-[50%] flex-col justify-center items-center bg-white p-5'>
            <h1 className=' text-xl font-bold flex justify-start w-full'>{props.id !== 0 ? "Edit Sales Commission Agent" : "Add Sale Commission Agent"}</h1>
            <div className=' w-full flex flex-col'>
                <div className='grid grid-cols-1 mt-2 md:grid-cols-3 gap-2'>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Prefix;</h1>
                        <input value={formData.prefix} onChange={(e)=>{setFormData({...formData, prefix : e.target.value})}} type='text' placeholder='Prefix' className='px-2 py-1 border-[1px] border-gray-600 focus:outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>First Name:* {iserror && formData.firstName.length === 0 &&<p className='text-red-500 text-xs'> Field Required </p>}</h1>
                        <input value={formData.firstName} onChange={(e)=>{setFormData({...formData, firstName : e.target.value})}} type='text' placeholder='First Name' className='px-2 py-1 border-[1px] border-gray-600 focus:outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Last Name:</h1>
                        <input value={formData.lastName} onChange={(e)=>{setFormData({...formData, lastName : e.target.value})}} type='text' placeholder='Last Name' className='px-2 py-1 border-[1px] border-gray-600 focus:outline-none' />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-2 gap-2'>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Email:</h1>
                        <input value={formData.email} onChange={(e)=>{setFormData({...formData, email : e.target.value})}} type='email' placeholder='Email' className='px-2 py-1 border-[1px] border-gray-600 focus:outline-none' />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Contact Number:</h1>
                        <input value={formData.contactNumber} onChange={(e)=>{setFormData({...formData, contactNumber : e.target.value})}} type='text' placeholder='Contact Number' className='px-2 py-1 border-[1px] border-gray-600 focus:outline-none' />
                    </div>
                </div>
                <div className='flex w-full flex-col mt-2'>
                    <h1 className='flex text-sm text-start'>Address:</h1>
                    <textarea value={formData.address} onChange={(e)=>{setFormData({...formData, address : e.target.value})}} rows={5} type='text' placeholder='Address' className='px-2 py-1 border-[1px] border-gray-600 focus:outline-none' />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 mt-2'>
                    <div className='flex flex-col'>
                        <h1 className='flex text-sm text-start'>Sales Commission Percentage (%):</h1>
                        <input value={formData.slscmsnPercnetage} onChange={(e)=>{setFormData({...formData, slscmsnPercnetage : e.target.value})}} type='email' placeholder='Sales Commission Percentage' className='px-2 py-1 border-[1px] border-gray-600 focus:outline-none' />
                    </div>
                    <div className=''>

                    </div>
                    
                </div>

                <div className='flex items-end justify-end'>
            <button onClick={handleClick}  className='w-[100px] text-center px-3 py-1 border-[1px] border-gray-400 bg-green-400 mx-2'>{props.id !==0 ? "Update" : "Save"}</button>

          </div>
            </div>
        </div>
    )
}

export default AddorEditSalesCmsnPerc