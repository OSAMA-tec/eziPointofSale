import React, { useState } from 'react'

const Calculator = () => {
    const [show, setShow] = useState("")
    const handleClick =(e) =>{
        setShow(show.concat(e.target.name))
    }
    const backspace = () =>{
        setShow(show.slice(0,show.length-1))
    }
    const claculate = () =>{
        // eslint-disable-next-line
        setShow(eval(show).toString())
        
    }
  return (
    <div  className='  w-[210px]  shadow-xl shadow-gray-400 bg-gray-100 rounded-md flex flex-col h-[300px]'>
        <div className='h-[35px] text-xl font-bold flex p-1 text-black justify-start'> Calculator</div>
        <div className=' mx-1 h-[35px] bg-gray-100 border-[1px] border-gray-300 flex items-end justify-end'>{show}</div>
        <div className='grid grid-cols-4 gap-1 p-1 mt-1'>
            <button name="AC" onClick={()=>{setShow("")}} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-red-400 justify-center'>AC</button>
            <button name="CE" onClick={backspace} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-orange-400 justify-center'>CE</button>
            <button name="%" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>%</button>
            <button name="/" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>/</button>
            <button name="1" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>1</button>
            <button name="2" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>2</button>
            <button name="3" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>3</button>
            <button name="*" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>x</button>
            <button name="4" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>4</button>
            <button name="5" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>5</button>
            <button name="6" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>6</button>
            <button name="-" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>-</button>
            <button name="7" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>7</button>
            <button name="8" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>8</button>
            <button name="9" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>9</button>
            <button name="+" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>+</button>
            <button name="0" onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>0</button>
            <button name="." onClick={handleClick} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-gray-300 justify-center'>.</button>
            <button onClick={claculate} className='flex items-center w-[40px] h-[40px] font-semibold rounded-md bg-green-500 justify-center'>=</button>
        
        </div>
    </div>
  )
}

export default Calculator