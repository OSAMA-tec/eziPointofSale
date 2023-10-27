import React, { useRef } from 'react'
import { FaPrint } from "react-icons/fa"
import { useReactToPrint } from 'react-to-print';
import PaymentsTbl from '../Tables/PaymentsTbl';
// import { AiOutlinePlus } from 'react-icons/ai';

const ViewPayment = () => {


    const printRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
        documentTitle: "PurchaseReport",
        copyStyles: true,
    });
    return (
        <div className='w-full   flex    flex-col pb-4  bg-white'>
            <div className='w-full px-2 my-2' ref={printRef}>
                <div className='flex items-start '>
                    <h1 className='text-xl'>View Payments (</h1>
                    <h1 className='text-xl font-bold'>Reference No:</h1>
                    <h1 className='text-xl '>123 )</h1>
                </div>
                <div className='h-[1px] bg-gray-300 mt-1 w-full'></div>
                
                <div className='grid grid-cols-1 mt-4 gap-2 md:grid-cols-3'>
                    <div className='flex  items-start flex-col '>
                        <h1 className=''>Supplier:</h1>
                        <h1 className=''>Mr Asim</h1>
                        <h1 className=' flex'>Mobile: <p className='mx-1'>1123345566</p></h1>

                    </div>
                    <div className='flex  items-start flex-col '>
                        <h1 className=''>Business:</h1>
                        <h1 className=''> <span className='font-bold'>EZI POS DEMO</span> Eziline Software House (Pvt.) Ltd</h1>
                        <h1 className=''>PSO Pum</h1>
                        <h1 className=''>Rawalpindi,Punjab,Pakistan</h1>
                        <h1 className=' flex'>Mobile: <p className='mx-1'>1123345566</p></h1>
                    </div>
                    <div className='flex  items-start flex-col '>
                        <div className='flex'>
                            <p className='font-bold'>Reference No:</p>
                            <p className='mx-1'>#PO2023/0011</p>
                        </div>
                        <div className='flex'>
                            <p className='font-bold'>Date:</p>
                            <p className='mx-1'>08/29/2023</p>
                        </div>
                        <div className='flex'>
                            <p className='font-bold'>Purchase Status::</p>
                            <p className='mx-1'> Received</p>
                        </div>
                        <div className='flex'>
                            <p className='font-bold'>Payment Status:</p>
                            <p className='mx-1'>Partial</p>
                        </div>



                    </div>
                </div>
                {/* <button className='flex items-center justify-center mx-5 font-semibold w-20 h-10 rounded-md mt-3 text-white bg-blue-500'>
                    <AiOutlinePlus size={15} /> Add

                </button> */}
                <div className='flex flex-col'>
                    <PaymentsTbl />
                </div>

            </div>
            <div className='flex items-end justify-end mx-4'>
                <div className='flex bg-green-400 text-white cursor-pointer px-2 py-1' onClick={handlePrint}>
                    <FaPrint size={15} />
                    <h1 className='text-sm mx-1'>Print</h1>
                </div>
            </div>
        </div>
    )
}

export default ViewPayment