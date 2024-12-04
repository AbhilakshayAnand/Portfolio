import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll';
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(()=>{
    if(mobileMenu){
      document.body.style.overflow= 'hidden'
      document.documentElement.style.overflow = 'hidden';
    } else{
      document.body.style.overflow= 'auto'
      document.documentElement.style.overflow = 'auto';
    }
    return ()=> {
      document.body.style.overflow= 'auto'
      document.documentElement.style.overflow = 'auto';

    };
  },[mobileMenu])

  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1S2SK0SOj1iojONaTZ63U92QAxg-4Y_CF/view?usp=sharing')
  }

  return (

    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between 
      items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>

      <ul className='hidden md:flex gap-10 text-white rounded-full bg-gray-400 px-8 py-2'>
      <a href="#Header" className='cursor-pointer hover:text-black'>Home</a>
      <Link to="About" className='cursor-pointer hover:text-black' smooth={true} duration={100}>
        About
      </Link>
      <Link to="Skills" className='cursor-pointer hover:text-black' smooth={true} duration={100}>
        Skills
      </Link>
      <Link to="Projects" className='cursor-pointer hover:text-black' smooth={true} duration={100}>
        Projects
      </Link>
       
        </ul>

        {/* Resume Button (Desktop) */}

        <button onClick={handleClick} className='hidden md:block bg-blue-500 px-8 py-2
         rounded-full text-white hover:text-black items-end cursor-pointer'>
          Resume
        </button>

        {/* Mobile Menu Button */}

        <img src="/Images/menu_icon.svg" onClick={() => setMobileMenu(true)}
          className='md:hidden w-8 ml-auto cursor-pointer' />
        </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full items-center justify-start 
          bg-white transition-all duration-200 ease-in-out ${
            mobileMenu ? "opacity-100 scale-100" : "opacity-0 pointer-events-none"
          }`}
>
            {/* Cross button */}

        <div className={`flex justify-end p-6 cursor-pointer }`}>
          <img src="/Images/cross_icon.svg" onClick={() => setMobileMenu(false)} 
          className='w-6' alt="" />
        </div>

        <ul className="flex flex-col gap-6 items-center justify-start text-lg font-semibold h-full">
        <a href="#Header" onClick={() => setMobileMenu(false)} className='cursor-pointer hover:text-black'>Home</a>
        <Link to="About" onClick={() => setMobileMenu(false)} className='cursor-pointer hover:text-black' smooth={true} duration={100}>
        About
      </Link>
      <Link to="Skills" onClick={() => setMobileMenu(false)} className='cursor-pointer hover:text-black' smooth={true} duration={100}>
        Skills
      </Link>
      <Link to="Projects" onClick={() => setMobileMenu(false)} className='cursor-pointer hover:text-black' smooth={true} duration={100}>
        Projects
      </Link>
          <a onClick={() => {
            setMobileMenu(false);
            handleClick();
          }}  
          className='block md:hidden bg-blue-500 px-8 py-2
         rounded-full text-white hover:text-black cursor-pointer font-normal'>Resume</a>
        </ul>

        <button onClick={handleClick} className='hidden md:block bg-blue-500 px-8 py-2
         rounded-full text-white hover:text-black' >
          Resume
        </button>
        
      </div>
    </div>
  )
}

export default Navbar