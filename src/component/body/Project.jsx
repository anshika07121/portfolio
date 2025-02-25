import React from 'react'
import ec from "../img/ec.jpg";
import em from '../img/em.png';
import {motion} from "framer-motion";
import { Heart } from 'lucide-react';
function Project() {
  return (
    <>
     {/* <section className='bg-banner bg-no-repeat bg-cover bg-bottom w-screen    ' > */}
      <section className='pt-24 sm:pt-28 sm-24 md:mt-0 md:pt-1  w-full p-4 bg-gradient-to-l from-gray-400 to-gray-800'>
         <div className='w-full flex rounded-full bg-slate-300 font-semibold mt-5'>
              <motion.div className='px-10   w-full flex justify-center py-1  text-sm md:text-md lg:text-lg'
              initial={{ opacity: 0, y: 0, color:"#6c3483"}}
              animate={{ opacity: 1, y: 0, color:["#229954","#ca6f1e","#3498db"]}}
              
        
              transition={{
                delay:0,
                duration:5,
                repeat:Infinity
                }}
              >
                Thanks for visiting my Portfolio websites<span className=''><Heart/></span>
              </motion.div>
              </div>
      <div>
        {/* {<Banner/>} */}
        <div className='flex justify-center '>
      <p className='border-2 border-solid border-gray-500 px-3 md:px-6 py-1 text-white bg-gray-800 text-xl md:text-2xl lg:text-3xl mt-1 md:mt-2 rounded-xl'>Project </p>
        
      </div>
      <div className='conatiner flex flex-col sm:flex-row'>
        <div className='w-full sm:w-6/12 font-extralight  m-2 border-2 border-solid hover:bg-gradient-to-r hover:from-lime-200 hover:to-pink-300 border-gray-500 rounded-lg text-white hover:text-gray-950 hover:font-semibold hover:border-none flex flex-row sm:flex-col'>
        <p className=' font-semibold py-2 text-sm md:lg md:text-xl m-auto sm:m-0 px-2 justfy-center text-center'><span className='underline hover:text-gray-900 '>ECommerce Website</span></p>
        <div className='flex justfiy-center m-auto items-center text-center w-full'>
          <img src={ec} className='mx-4  sm:mx-auto lg:w-80 md:w-72 w-64 lg:h-48 md:h-40 h-36 m-auto rounded-lg' alt="" />
        </div>
        <div>
        <p className='flex justify-left pl-5 sm:px-4 md:px-6 py-2 text-xs sm:text-sm  md:text-base'>First service based website. Skills used: HTML,CSS-Bootstrap/tailwind, JavaScript, jQuery, react, redux and java Main focus of this project is to show my proficiency as a react/front-end developer.</p>
        <button className='flex justify-center text-center ml-5 mb-1 sm:mb-3 px-2 sm:px-5 py-1 sm:py-2 hover:bg-white hover:text-gray-500 bg-gray-700 text-base sm:text-lg font-semibold rounded-lg md:mb-2  text-gray-300 '>More...</button>
        </div>
        </div>
        <div className='w-full sm:w-6/12 font-extralight  m-2 border-2 border-solid hover:bg-gradient-to-r hover:from-pink-300 hover:to-lime-200 border-gray-500 rounded-lg text-white hover:text-gray-950 hover:font-semibold hover:border-none flex flex-row sm:flex-col'>
        <p className=' font-semibold py-2 text-sm md:lg md:text-xl m-auto sm:m-0 px-2 justfy-center text-center'><span className='underline hover:text-gray-900 '>EMS Application</span></p>
        <div className='flex justfiy-center text-center w-full'>
          <img src={em} className='mx-4 sm:mx-auto lg:w-80 md:w-72 w-64 lg:h-48 md:h-40 h-36 m-auto rounded-lg' alt="" />
        </div>
        <div>
        <p className='flex justify-left pl-5 sm:px-4 md:px-6 py-2 text-xs sm:text-sm  md:text-base'> The Employee Management System is a Java-based application designed to streamline employee-related processes within an organization. The system provides a robust solution for managing employee data, attendance, and performance in a secure and efficient manner. 
        </p>
        <button className='flex justify-center text-center ml-5 mb-1 sm:mb-3 px-2 sm:px-5 py-1 sm:py-2 hover:bg-white hover:text-gray-500 bg-gray-700 text-base sm:text-lg font-semibold rounded-lg md:mb-2  text-gray-300 '>More...</button>
        </div>
        </div>

      </div>
      
        

      </div>
        
     
      
      </section>
    </>
  )
}

export default Project
