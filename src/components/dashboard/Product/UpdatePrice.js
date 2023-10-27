import React from 'react'

const UpdatePrice = () => {
    return (
        <div className='w-full p-5 bg-gray-200 flex  min-h-screen flex-col '>
            <h1 className='text-xl text-start font-bold'>Update Price</h1>
            <div className='flex flex-col bg-white border-t-[3px] rounded-md p-4 border-blue-500'>
                <h1 className='text-xl text-start'>Import Export Product Price</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                    <div className='flex'>
                    <button className='flex bg-blue-500 h-[50px] text-white py-1 px-2 mt-5 items-center'>
                        Export product prices
                    </button>
                    </div>
                    
                    <div className='flex flex-col'>
                        <h1 className='text-sm text-start font-bold'>Update Price:</h1>
                        <input type='file' />

                        <button className='flex justify-center w-[80px] bg-blue-500 text-white py-1 px-2 mt-5 items-center'>
                            Submit
                        </button>
                    </div>

                </div>
                <div className='flex justify-start flex-col mt-5'>
                <h1 className='text-lg text-start font-bold'>Instructions:</h1>

                    <ol type="1" className='text-gray-500 text-start'>
                        <li>Export product prices by clicking on above button</li>
                        <li>Make changes in product price including tax & selling price groups.</li>
                        <li>Do not change any product name, sku & headers</li>
                        <li>After making changes import the file</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default UpdatePrice