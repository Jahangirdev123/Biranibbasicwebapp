import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import biryani from  '../assets/biryanilogo.jpg'
function Home() {
    return (
        <div name='home' className='bg-[#0a192f] px-8 w-full h-screen'>
            {/* Container */}
            <div
        style={{ backgroundImage: `url(${biryani})  ` }}
        className='w-full h-full rounded-2xl  bg-cover  duration-500'
      >
            <div className='max-w-[1000px] text-white flex flex-col justify-center h-full  mx-auto '>
                <p className='text-yellow-600'>Well come to M Biryani</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Authentic Pakistanti Biryani</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#C59D5F]'>Made by Home based Chefs</h2>
                <p className='text-white max-w-[700px] py-4 '> We believe in crafting more than just meals; we create memories.Our commitment to culinary excellence and warm hospitality remains unwavering. </p>
                <div>
                    <button onClick={''} className=' group text-white border-2 px-6  py-2 flex justify-between items-center gap-5 hover:bg-yellow-600'>Order Now
                        <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight />
                        </span>
                    </button>
                </div>
            </div>
        </div></div>
    )
}

export default Home