import React, { useEffect } from 'react'
import About from './About'
import Skills from "./Skills";
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Home/>
      <About/>
      <Skills/>
      <Projects />
      <Contact/>
      <Footer/>
      <ToastContainer />
    </div>
  )
}

export default App

