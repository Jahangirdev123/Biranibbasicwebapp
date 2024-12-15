import React, { useState } from 'react'
import biryanilogo from "../assets/biryanilogo.jpg"
import Usmania from "../assets/Usmania-Logo.png"

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from 'react-scroll'
import '../src/SmokeEffect.css'

function Navbar() {



    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
       
        <div className='fixed z-10 text-white w-full  h-[80px] flex justify-between  items-center  px-4 bg-[#151A20]'>
            <div>
                <img src={biryanilogo} width="80px" alt="LOGO IMAGE" srcset="" />
            </div>
            {/* Menu */}
            <div>
                <img src={Usmania} width="200px" alt="LOGO IMAGE" srcset="" />
            </div>
            <ul className='hidden md:flex hover-smoke '>
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
                        Menu
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


            {/* Hamburder  */}
            <div onClick={handleClick} className='md:hidden z-10' >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile Menu  */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0  w-full flex-col items-center justify-center h-screen bg-[#151A20] flex gap-5 text-2xl cursor-pointer '}    >
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
{/* Mobile Menu Ends */}
            {/* Photo Slider Starts */}


            {/* Photo Slider Ends */}

         </div>
    )
}

export default Navbar