import React from 'react'
import WorkImg from '../assets/projects/workImg.jpeg'
import realestate from '../assets/projects/realestate.jpg'
function Work() {
    return (
        <div name='work' className='w-full bg-[#0a192f] md:h-screen text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                    <p className='py-6'>//Check out my recent Work</p>
                </div>
                {/* cards GRID */}

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    {/* Another Section */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contect-div'>
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white traking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Code</button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                {/*  */}

            </div>
        </div>
    )
}

export default Work