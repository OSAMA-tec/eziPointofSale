import { useState, React } from "react"
import { FaGift, FaInfo } from "react-icons/fa"

const EditDiscount = () => {
    const [discountData, setDiscountData] = useState({
        discountType: "",
        discountAmount: "",
        redeemed: '',
        redeemedAmount: ""

    })
    const handleUpdate = () => {
        console.log("Update", discountData)
    }
    return (
        <div className='flex flex-col w-full bg-white  '>
            <div className=" bg-white px-2 pb-3 w-full">

           
            <h1 className='text-xl text-start'>Discount</h1>
            <h1 className='text-xl text-start mt-5'> Edit Discount</h1>

            <div className='mt-2 grid grid-cols-2 gap-5'>
                <div className='flex flex-col w-full'>
                    <h1 className='text-sm text-start font-bold'>Discount Type:</h1>
                    <div className='flex  mt-1'>
                        <FaInfo size={15} className=' border-[1px] p-1 w-8 h-8 border-gray-500' />
                        <select value={discountData.discountType} onChange={(e) => { setDiscountData({ ...discountData, discountType: e.target.value }) }} className='px-2 border-[1px] w-full border-gray-500'>
                            <option value={""}>Plaes Selecet</option>
                            <option value={"Fixed"}>Fixed</option>
                            <option value={"Percentage"}>Percentage</option>

                        </select>
                    </div>

                </div>
                <div className='flex flex-col w-full'>
                    <h1 className='text-sm text-start font-bold'>Discount Amount:*</h1>
                    <div className='flex  mt-1'>
                        <FaInfo size={15} className=' border-[1px] w-8 h-8 p-1 border-gray-500' />
                        <input type='number' value={discountData.discountAmount} onChange={(e) => { setDiscountData({ ...discountData, discountAmount: e.target.value }) }} className='px-2 w-full border-[1px] border-gray-500' />
                    </div>

                </div>

                <div className='flex flex-col w-full'>
                    <h1 className='text-sm text-start font-bold'>Redeemed</h1>
                    <div className='flex  mt-1'>
                        <FaGift size={15} className=' border-[1px] w-8 h-8 p-1 border-gray-500' />
                        <input value={discountData.redeemed} onChange={(e) => { setDiscountData({ ...discountData, redeemed: e.target.value }) }} className='px-2 border-[1px] w-full border-gray-500' />
                    </div>

                </div>
                <div className='flex flex-col w-full'>
                    <h1 className='text-sm text-start font-bold'>Available:</h1>
                    <div className='flex  mt-1'>
                        <h1 className='text-sm font-bold'>Redeemed Amount:</h1>
                        <h1 className='text-sm mx-2'>Rs. 0.00</h1>

                    </div>

                </div>
            </div>
            <div className="flex items-end py-1 justify-end w-full">
                <button onClick={handleUpdate} className='bg-blue-600 w-[100px] text-white'>Update</button>

            </div>
            </div>

        </div>

    )
}
export default EditDiscount
