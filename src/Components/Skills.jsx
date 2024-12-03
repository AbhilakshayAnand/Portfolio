import React from 'react'
import {skills} from './assets/projectData'
import { motion } from 'motion/react'

const Skills = () => {
  return (
    <div className='h-screen'>
    <motion.div 
    initial={{opacity: 0, x: -100 }}
    transition={{duration: 0.4}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{ once: false }}
    className='container mx-auto py-20 md:pt-20 md:px-20 lg:px-32 mt-48 sm:mt-36 overflow-hidden w-full' 
    id='Skills'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-2 text-center'>
        Skill <span className='underline underline-offset-4 decoration-1 under font-light'>Spectrum</span>
      </h1>
      <p className='text-center text-gray-600 mb-12 max-w-80 mx-auto font-light'>What Powers My Code</p>

      <div className="flex flex-wrap justify-center gap-7">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="max-w-[110px] sm:max-w-[140px] border border-gray-300 rounded-lg shadow-lg px-4 py-6 
      text-center hover:scale-110 hover:shadow-xl transition-transform duration-200 ease-in-out"
    >
      {/* Image container with hover effect */}
      <div className="overflow-hidden rounded-md">
        <img
          src={skill.image}
          alt={skill.title}
          className="w-full h-auto"
        />
      </div>
      {/* Skill title */}
      <h2 className="text-lg mt-3 font-medium ">{skill.title}</h2>
    </div>
  ))}
</div>


    </motion.div>
    </div>
  )
}

export default Skills
