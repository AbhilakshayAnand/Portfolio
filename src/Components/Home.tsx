import React from 'react'
import {motion} from "motion/react"
import Navbar from './Navbar'
import {Link} from "react-scroll";
const Header = () => {
  return (
    <div className='h-screen'>
    <div
    className="bg-cover h-screen w-full top-0 left-0"
    style={{ backgroundImage: "url('/Images/bg.png')" }}
    id="Header"
  >.
      <Navbar/>

      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.7 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      className='Container text-clip mx-auto pt-5 px-9 md:px-20 lg:px-32
       text-white flex flex-col mt-40 md:mt-52 min-h-screen  '>


        <h2 className='text-[45px] mx-auto sm:text-5xl md:text-[55px] 
        inline-block w-fit font-normal text-center'>
          Hello, I am Abhilakshay Anand
        </h2>
        <p className='flex mt-5 mx-auto py-4 px-9 md:px-20 lg:px-32
       text-white text-[21px] sm:text-3xl md:text-[27px] text-center font-light'>
        Dedicated to writing elegant code that drives change.</p>
        <div className='mt-4 md:mt-10 flex flex-row gap-20 justify-center w-full'>
        <Link to="Projects" className='border rounded mt-24 sm:mt-24 px-4 py-1.5 cursor-pointer bg-transparent hover:bg-blue-500 hover:border-blue-500' 
        smooth={true} duration={100}>
        Projects
      </Link>
      <Link to="Projects" className='border border-transparent cursor-pointer rounded mt-24 sm:mt-24 px-4 py-1.5 bg-blue-500 hover:bg-transparent hover:border-white'
       smooth={true} duration={100}>
        Projects
      </Link>
      </div>
        </motion.div>
    </div>
    </div>
  )
}

export default Header;
