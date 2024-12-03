import React, { useEffect, useState } from 'react'
import {projectsData } from './assets/projectData'
import { motion } from 'motion/react';

const Projects = () => {

    const [currentIndex, setIndex] =useState(0);
    const [toShow, setShow] = useState(1);

    useEffect(() => {
        const updateShow = () => {
            if(window.innerWidth >=1024) {
                setShow(projectsData.length);
            } else {
                setShow(1);
            }
        };
            updateShow();

            window.addEventListener('resize', updateShow);
            return () => {
                window.removeEventListener('resize', updateShow);
            }
    },[])

    const nextProject = () => {
        setIndex((prevIndex) => (prevIndex+1) % (projectsData.length))
    };

    const prevProject = () => {
        setIndex((prevIndex) => prevIndex === 0 ? projectsData.length-1 : prevIndex-1)
    };

  return (
    <div className='h-screen'>

    
    <motion.div 
    initial={{opacity: 0, x: 100 }}
    transition={{duration: 0.4}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{ once: false }}
    className='container mx-auto  sm:pt-28 md:px-20 lg:px-32 mt-48 sm:mt-28 md:mt-0 overflow-hidden w-full' 
    id='Projects'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-2 text-center'>
        Projects <span className="underline underline-offset-4 decoration-1 under font-light">
            Completed
        </span>
        </h1>
        <p className='text-center text-gray-600 mb-4 sm:mb-0 max-w-80 mx-auto font-light'>
        Particulars of my projects, effort and creativity.
      </p>

        {/* Slider Button */}
        
        <div className='flex justify-end items-center mb-8'>
            <button className='p-3 bg-gray-200 rounded
            mr-2' onClick={prevProject}>
                <img src="/Images/left_arrow.svg" />
            </button>
            <button className='p-3 bg-gray-200 rounded
            mr-2' onClick={nextProject}>
                <img src="/Images/right_arrow.svg" />
            </button>
        </div>

        {/* Projects Slider */}

        <div className='overflow-hidden mt-16'>
            <div className='flex gap-6 transition-transform duration-300 ease-linear'
                style={{transform: `translateX(-${(currentIndex * 100) / (toShow)}%)`}}>

                {projectsData.map((project, index)=> (
                 <div className='relative flex-shrink-0 w-full sm:w-1/2'
                  key={index}>
                    <img className=' border-8 mt-10 border-transparent rounded aspect-square mb-16' 
                    src={project.image} alt={project.title} />
                    <div className='absolute left-0 right-0 bottom-8 flex justify-center'>
                        <div className='inline-block border border-gray-300 rounded bg-white w-3/5 px-4 py-2 shadow-xl'>
                            <h2 className='text-xl font-medium text-gray-600 '>
                                {project.title}
                            </h2>
                            <p className='text-gray-600 text-sm'>
                                {project.techStack}
                            </p>
                        </div>
                    </div>
                 </div>
            ))}
            </div>
        </div>
    </motion.div>
    </div>
  )
}

export default Projects
