import React from 'react'
import SindhiBiryani from "../assets/SindhiBiryani.jpg"
import BombayBirani from "../assets/BombayBirani.jpg"
import chickenPulao from "../assets/chicken Pulao.jpg"
import Github from "../assets/github.png"
import Nihari from "../assets/Nihari.jpg"
import beefBiryani from "../assets/beefBiryani.jpg"
import logo from "../assets/logo.png"
import mongo from "../assets/mongo.png"
import node from "../assets/node.png"
import REACT from "../assets/react.png"
import NEXTJS from "../assets/nextjs.png"
import tailwind from "../assets/tailwind.png"
import { FaNodeJs } from 'react-icons/fa'








function Skill() {
    return (
        <>
            <div name='skills' className='bg-[#0a192f] w-full h-1000px'>
                <div className='max-w-[1000px] mx-auto'>
                    <div className='grid gird-cols-2 sm:grid-cols-4 container gap-2 '>
                    <div className='product-card'>
                      <img src={SindhiBiryani} alt="Image 1" className='shadow-lg hover:scale-125 duaration-500 shadow-[#040c16] rounded-md flex justify-center items-center contect-div w-full'  />
                      <h1 className='text-white text-center bg-gray-600 '>Sindhi Biryani</h1>

                        </div>  
                        <div className='product-card'>
                      <img src={beefBiryani} alt="Image 1" className='shadow-lg  shadow-[#040c16] hover:scale-125 duaration-500 rounded-md flex justify-center items-center contect-div w-full'  />
                      <h1 className='text-white text-center  bg-gray-600 '>Beef Biryani</h1>

                        </div>  
                            
                        <div className='product-card'>
                      <img src={chickenPulao} alt="Image 1" className='shadow-lg  shadow-[#040c16] hover:scale-125 duaration-500 rounded-md flex justify-center items-center contect-div w-full'  />
                      <h1 className='text-white text-center bg-gray-600 '>ChickenPulao</h1>

                        </div>  

                        <div className='product-card'>
                      <img src={Nihari} alt="Image 1" className='shadow-lg  shadow-[#040c16] hover:scale-125 duaration-500 rounded-md flex justify-center items-center contect-div w-full'  />
                      <h1 className='text-white text-center bg-gray-600 '>Nihari</h1>

                        </div>  

                                         </div>
                    {/* <div>
                        <p className='text-4xl text-gray-300  font-bold inline border-b-4 border-yellow-600 '>Biyani's</p>
                        <p className='py-4 text-white'>//Kindly View our Biryanies</p>
                        <div className='gap-3 grid text-white grid-cols-2 sm:grid-cols-2 text-center '>
                            <div className='hover:shadow-md  hover:scale-150 duaration-500  w-1/2 bg-green-600'>
                                <img className='w-30 mx-auto' src={SindhiBiryani} alt="HTML icon" srcset="" />
                                <span>Sindhi Biryani</span>
                            </div>
                            <div className='hover:shadow-md  hover:scale-150 duaration-500  w-1/2 bg-green-600'>
                                <img className='w-30 mx-auto' src={SindhiBiryani} alt="HTML icon" srcset="" />
                                <span>Sindhi Biryani</span>
                            </div>
                            <div className='hover:shadow-md  hover:scale-150 duaration-500  w-1/2 bg-green-600'>
                                <img className='w-30 mx-auto' src={SindhiBiryani} alt="HTML icon" srcset="" />
                                <span>Sindhi Biryani</span>
                            </div>
                            <div className='hover:shadow-md  hover:scale-150 duaration-500  w-1/2 bg-green-600'>
                                <img className='w-30 mx-auto' src={SindhiBiryani} alt="HTML icon" srcset="" />
                                <span>Sindhi Biryani</span>
                            </div>
                            <div className='hover:shadow-md  hover:scale-150 duaration-500  w-1/2 bg-green-600'>
                                <img className='w-30 mx-auto' src={SindhiBiryani} alt="HTML icon" srcset="" />
                                <span>Sindhi Biryani</span>
                            </div>
                            <div className='hover:shadow-md  hover:scale-150 duaration-500  w-1/2 bg-green-600'>
                                <img className='w-30 mx-auto' src={SindhiBiryani} alt="HTML icon" srcset="" />
                                <span>Sindhi Biryani</span>
                            </div>
                            <div className='hover:shadow-md  hover:scale-150 duaration-500  w-1/2 bg-green-600'>
                                <img className='w-30 mx-auto' src={SindhiBiryani} alt="HTML icon" srcset="" />
                                <span>Sindhi Biryani</span>
                            </div>
                            <div className='hover:shadow-md  hover:scale-150 duaration-500  w-1/2 bg-green-600'>
                                <img className='w-30 mx-auto' src={SindhiBiryani} alt="HTML icon" srcset="" />
                                <span>Sindhi Biryani</span>
                            </div>
                            

                        </div>
                    </div> */}
                </div>

            </div >
        </>
    )
}

export default Skill