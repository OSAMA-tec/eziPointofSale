import React from 'react'

const ProductItem = (props) => {
    const item = props.data
  return (
    <div className='w-full h-full flex flex-col items-center cursor-pointer justify-center bg-white rounded-md'>
        <img src={item.image} alt={item.name} className='w-[100px] h-[50px]' />
        <div className=' flex w-full px-1 justify-between'>
             <h1 className='font-bold text-xs p-1'>{item.Name}</h1>
            <h1 className='font-bold text-xs p-1'>{item.price}</h1>
        </div>
    </div>
  )
}

export default ProductItem