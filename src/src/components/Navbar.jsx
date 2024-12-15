import React, { useState } from 'react'
import Logo1 from "../assets/logo1.png"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from 'react-scroll'
function Navbar() {



    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed text-white w-full  h-[80px] flex justify-between  items-center  px-4 bg-[#0a192f]'>
            <div>
                <img src={Logo1} width="40px" alt="" srcset="" />
            </div>
            {/* Menu */}

            <ul className='hidden md:flex '>
                <li className='px-4 cursor-pointer'>
                    <Link
                        smooth={true}
                        to="home"
                        duration={500}>
                        Home
                    </Link>
                </li>
                <li className='px-4 cursor-pointer'>
                    <Link
                        smooth={true}
                        to="about"
                        duration={500}>
                        About
                    </Link>
                </li>
                <li className='px-4 cursor-pointer'>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='px-4 cursor-pointer'>
                    <Link
                        smooth={true}
                        to="work"
                        duration={500}>
                        Work
                    </Link>
                </li>
                <li className='px-4 cursor-pointer'>
                    <Link
                        smooth={true}
                        to="contact"
                        offset={50}
                        duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>


            {/* Hamburder */}
            <div onClick={handleClick} className='md:hidden z-10' >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0  w-full flex-col items-center justify-center h-screen bg-[#0a192f] flex gap-5 text-2xl cursor-pointer '}    >
                <li >
                    <Link
                        onClick={handleClick}
                        smooth={true}
                        to="home"
                        offset={50}
                        duration={500}>
                        Home
                    </Link>
                </li>
                <li ><Link
                    onClick={handleClick}
                    smooth={true}
                    to="about"
                    offset={50}
                    duration={500}>
                    About
                </Link></li>
                <li><Link
                    onClick={handleClick}
                    smooth={true}
                    to="skills"
                    offset={50}
                    duration={500}>
                    Skills
                </Link></li>
                <li><Link
                    onClick={handleClick}
                    smooth={true}
                    to="work"
                    offset={50}
                    duration={500}>
                    Work
                </Link></li>
                <li><Link
                    onClick={handleClick}
                    smooth={true}
                    to="contact"
                    offset={50}
                    duration={500}>
                    Contact
                </Link></li>
            </ul>

            {/* Social Icos */}
            <div className='hidden lg:flex fixed flex-col top-[35%]  left-0'>
                <ul className=''>
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 ' ><a href="" className='flex justify-between items-center text-gray-300 w-full p-5'>LinkidInn <FaLinkedin size={30} /></a></li>
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ' ><a href="" className='flex justify-between items-center text-gray-300 w-full p-5'>GitHub <FaGithub size={30} /></a></li>
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ' ><a href="" className='flex justify-between items-center text-gray-300 w-full p-5'>Email <HiOutlineMail size={30} /></a></li>
                    <li className='w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] ' ><a href="" className='flex justify-between items-center text-gray-300 w-full p-5'>Resume<BsFillPersonLinesFill size={30} /></a></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar