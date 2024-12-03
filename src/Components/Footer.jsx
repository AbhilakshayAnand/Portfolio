import React from 'react'
import { motion } from 'motion/react'


const Footer = () => {
  return (
    <div >
    <motion.div 
    initial={{opacity: 0, y: 100 }}
    transition={{duration: 0.2}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{ once: false }}
    className='pt-4 rounded-t px-8 md:px-32 lg:px-32 bg-gray-900'
    id='Footer'>
      <div className='flex items-end'>
        <div className='w-full mx-6 md:mx-24 md:w-1/5'>
        <h3 className='text-white text-lg font-bold'>
                Components
        </h3>

        <ul className='flex flex-col gap-1 text-gray-400'>
            <a href="#Header" className='hover:text-white mt-1'>Home</a>
            <a href="#About" className='hover:text-white'>About</a>
            <a href="#Skills" className='hover:text-white'>Skills</a>
            <a href="#Projects" className='hover:text-white mb-3'>Projects</a>
        </ul>
        </div>
        <div className='text-gray-400 mb-3'>
        Copyright {new Date().getFullYear()} ©. All Rights Reserved</div>
      </div>
      
    </motion.div>
    </div>
  )
}

export default Footer
