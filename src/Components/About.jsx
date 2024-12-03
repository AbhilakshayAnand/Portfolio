import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div className="h-screen">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.4 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="container flex flex-col items-center sm:pt-0 justify-center mx-auto sm:px-10 
        lg:px-32 w-full h-screen"
        id="About"
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-7 pt-20 mt-20 sm:mt-32 md:mt-0">
          About <span className="underline underline-offset-4 decoration-1 font-light">Me</span>
        </h1>

        <div className="flex flex-col mt-2 mx-auto md:flex-row items-center md:items-start md:gap-10">
          <img
            src="/Images/pr.png"
            className="w-2/3 sm:w-[600px] max-w-lg mt-6"
            alt="My Profile"
          />

          <div className="flex flex-col items-center pl-4 sm:pl-4 md:items-start mt-10 text-gray-600">
            <div className="grid grid-cols-2 gap-x-5 gap-y-4 md:gap-x-9 w-full md:w-auto">
              <div >
                <p className="text-4xl font-medium text-gray-800">2+</p>
                <p className="font-medium">Years of Experience</p>
              </div>

              <div>
                <p className="text-4xl font-medium text-gray-800">150+</p>
                <p className="font-medium">DSA Questions</p>
              </div>

              <div>
                <p className="text-4xl font-medium text-gray-800 mt-2">4+</p>
                <p className="font-medium">Projects</p>
              </div>
            </div>

            <div className="mt-5 max-w-80 md:max-w-lg text-center md:text-left">
              <p className="font-normal text-justify">
                I'm passionate about web development, programming, and problem-solving. I focus on
                building efficient web solutions and tackling challenges with innovative approaches.
                Driven by curiosity, I aim to blend creativity and logic to craft seamless user
                experiences and grow as a developer.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
