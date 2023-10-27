import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div  >
            <Navbar />
            <img src='https://media.istockphoto.com/id/1129029770/photo/black-brick-wall-texture-of-dark-brickwork-close-up.jpg?s=612x612&w=0&k=20&c=eB8xB0G7hYodNNrGqbIpLh3Ecb2c5sc871Bz1ovBp3I='
                alt='bg-img' className='w-full h-screen absolute top-0' />
                    <div className='bg-black/50 absolute w-full h-full top-0 '></div>

            <div className='flex flex-col items-center absolute top-56 w-full justify-center'>
                <div className='text-white  font-bold   text-7xl'>Ezi Point Of Sale</div>
                <div className='text-blue-500 mt-5 font-semibold text-2xl'>1# Inventory Management System</div>

            </div>
        </div>
    )
}

export default Home