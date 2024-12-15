import React from 'react'
import ReactPlayer from 'react-player'
import restvideo from '../assets/restvideo.mp4'
function About() {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='sm:text-right '>
            <span className='text-4xl font-bold inline border-b-4 border-yellow-600  justify-center items-center  '>Are You in Love With Biryani?</span>
                        
                  <div className='relative mt-[-200]'><ReactPlayer onReady={true} url={restvideo} controls={true} loop={true} width={600} height={600}/></div>  
                         
                    </div>
            <div>
            
                
                </div>        
         </div>
        </div>
    )
}

export default About