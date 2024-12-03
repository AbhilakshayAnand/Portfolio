import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'motion/react';

    const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "59778faa-7100-42cd-8af0-20c3f2f8d179");
  
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
    
        const data = await response.json();
    
        if (data.success) {

          toast.success("Form Submitted Successfully");
          event.target.reset(); 
          setResult("Success"); 
          setTimeout(() => {
            setResult(""); 
          }, 2000);
        } else {

          console.log("Error", data);
          toast.error("Error Submitting Form", { duration: 2000 }); 
          setTimeout(() => {
            setResult(""); 
          }, 2000);
        }
      } catch (error) {

        console.error("Network error:", error);
        toast.error("Network Error. Please try again.", { duration: 2000 });
        setTimeout(() => {
          setResult(""); 
        }, 2000);
      }
    };


  return (
    <div className='h-screen'>

   
    <motion.div 
    initial={{opacity: 0, x: -100 }}
    transition={{duration: 0.4}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{ once: false }}
    className='container mx-auto  md:pt-32 sm:py-20 md:px-20 lg:px-32 mt-48 sm:mt-24 overflow-hidden w-full'
    id='Contact'>
      <h1 className='text-2xl sm:text-3xl font-bold mb-2 text-center'>Connect <span
      className="underline underline-offset-4 decoration-1 under font-light"> With Me</span></h1>
      <p className='text-center text-gray-600 mb-12 max-w-80 mx-auto font-light'>
        Eager to Learn, Ready to Code—Let's Connect!
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto px-5 text-gray-600 pt-8'>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
                Your Name
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'  
                type="text" name='Name' placeholder='Your Name' required/>
            </div>

            <div className='w-full md:w-1/2 text-left md:pl-4 mt-6 md:mt-0'>
                Your Email
                <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2'  
                type="email" name='Email' placeholder='Your Email' required/>
            </div>
        </div>
        <div className='text-left my-6'>
            Message
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 resize-none h-32' 
            name="Message" placeholder='Message' required></textarea>
        </div>
        <div className='mx-auto'>
        <button className='bg-blue-500 text-white text-semibold rounded 
        py-3 px-12 mb-10 hover:bg-blue-600'>
            {result ? result : "Send Message"}</button>
        </div>
      </form>
    </motion.div>
    </div>
  )
}

export default Contact
