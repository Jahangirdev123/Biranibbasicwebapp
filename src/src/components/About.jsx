import React from 'react'

function About() {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full '>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>About</p>
                    </div>
                    <div>
                    </div>

                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4' >
                    <div className='text-3xl font-bold'>
                        <p>Hi, Iam Jahangeer Nice to Meet You ,<br />Please take a look around</p>
                    </div>
                    <div>
                        <p>
                            I am passionate about building execellent softwares that imporives the Lives of those around me.
                            I specialize in creating software for clients ranging from individuals and smal-businesses all the way
                            to large enterprises corporations. What would you do if you had a software expert available at your fingerTips?
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About