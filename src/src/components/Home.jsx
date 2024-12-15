import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

function Home() {
    return (
        <div name='home' className='bg-[#0a192f] px-8 w-full h-screen'>
            {/* Container */}
            <div className='max-w-[1000px] text-white flex flex-col justify-center h-full  mx-auto'>
                <p className='text-pink-600'>Hi My Name is </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Syed Jahangeer Junaid</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> ReactJS  Developer </h2>
                <p className='text-[#8892b0] max-w-[700px] py-4 '> Iam React JS Developer specializing in building responsive Mobile and Web Applicatiobs using Reactjs and NextJs</p>
                <div>
                    <button onClick={''} className=' group text-white border-2 px-6  py-2 flex justify-between items-center gap-5 hover:bg-pink-600'>View Work
                        <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home