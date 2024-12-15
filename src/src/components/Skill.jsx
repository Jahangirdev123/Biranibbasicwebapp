import React from 'react'
import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import firebase from "../assets/firebase.png"
import Github from "../assets/github.png"
import javascript from "../assets/javascript.png"

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
            <div name='skills' className='bg-[#0a192f] w-full h-screen'>
                <div className='max-w-[1000px] mx-auto'>
                    <div>
                        <p className='text-4xl text-gray-300  font-bold inline border-b-4 border-pink-600 '>Skills</p>
                        <p className='py-4 text-white'>//There are the technologies I've worked with</p>
                        <div className='w-full grid text-white grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                            <div className='hover:shadow-md hover:animate-bounce hover:shadow-[#dddddd] hover:scale-150 duaration-500'>
                                <img className='w-20 mx-auto ' src={HTML} alt="HTML icon" srcset="" />
                                <span>HTML</span>
                            </div>
                            <div className='hover:shadow-md hover:animate-bounce hover:shadow-[#dddddd] hover:scale-150 duaration-500'>

                                <img className='w-20 mx-auto' src={CSS} alt="HTML icon" srcset="" />
                                <span>CSS</span>
                            </div>
                            <div className='hover:shadow-md hover:animate-bounce hover:shadow-[#dddddd] hover:scale-150 duaration-500'>

                                <img className='w-20 mx-auto' src={javascript} alt="HTML icon" srcset="" />
                                <span>JAVASCRIPT</span>
                            </div>
                            <div className='hover:shadow-md hover:animate-bounce hover:shadow-[#dddddd] hover:scale-150 duaration-500'>

                                <img className='w-20 mx-auto' src={node} alt="HTML icon" srcset="" />
                                <span>NODEJS</span>
                            </div>
                            <div className='hover:shadow-md hover:animate-bounce hover:shadow-[#dddddd] hover:scale-150 duaration-500'>

                                <img className='w-20 mx-auto' src={REACT} alt="HTML icon" srcset="" />
                                <span>REACTJS</span>
                            </div>
                            <div className='hover:shadow-md hover:animate-bounce hover:shadow-[#dddddd] hover:scale-150 duaration-500'>

                                <img className='w-20 mx-auto' src={Github} alt="HTML icon" srcset="" />
                                <span>GITHUB</span>
                            </div>
                            <div className='hover:shadow-md hover:animate-bounce hover:shadow-[#dddddd] hover:scale-150 duaration-500'>

                                <img className='w-20 mx-auto' src={mongo} alt="HTML icon" srcset="" />
                                <span>MONGODB</span>
                            </div>
                            <div className='hover:shadow-md hover:animate-bounce hover:shadow-[#dddddd] hover:scale-150 duaration-500'>

                                <img className='w-20 mx-auto' src={NEXTJS} alt="HTML icon" srcset="" />
                                <span>NEXTJS</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Skill