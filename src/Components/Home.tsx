import React from 'react'
import {motion} from "motion/react"
import Navbar from './Navbar'
const Header = () => {
  return (
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
          <a 
            href="#Projects" 
            className='border rounded mt-24 sm:mt-24 px-4 py-1.5 bg-transparent hover:bg-blue-500 hover:border-blue-500'>
            Projects
          </a>
          <a 
            href="#Contact" 
            className='border border-transparent  rounded mt-24 sm:mt-24 px-4 py-1.5 bg-blue-500 hover:bg-transparent hover:border-white'>
            Contact
          </a>
      </div>
        </motion.div>
    </div>
  )
}

export default Header;
