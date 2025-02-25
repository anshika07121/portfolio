import React from 'react'
import Banner from '../../../public/Banner'
import {motion} from "framer-motion";
import { Heart } from 'lucide-react';
function Contact() {
  return (
    <>
    <section className='bg-bannerimg bg-no-repeat bg-cover bg-bottom w-screen pt-24  sm:pt-28 sm-24 md:mt-0 md:pt-4   ' >
     
    <div className=''>
    <div className='w-full flex rounded-full bg-slate-300 font-semibold'>
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
      <div className='w-11/12 sm:w-9/12 lg:w-7/12 mt-2 md:mt-4 flex-col gap-3 lg:gap-5 '>
          <div className=''>
          <div className='flex justify-center text-center m-auto w-full'>
        <p className='border-2 border-solid border-gray-500 px-3 md:px-6 py-1 text-white bg-gray-800 xl md:text-2xl lg:text-3xl mt-1 md:mt-2 rounded-xl'>Contact us </p>
      </div>
          <div  className='w-full flex flex-row justify-start ml-4 lg:ml-10 gap-1 md:gap-5 mt-2 md:mt-4'>
            <div className='w-full sm:w-6/12 '>
              <label className='font-semibold text-base md:text-lg lg:text-xl text-gray-800'>First Name</label>
              <input type="text" className='border-2 border-gray-500 border-solid rounded-md bg-gray-200  h-8 w-full'  />
            </div>
            <div className='w-full sm:w-6/12'>
              <label className='font-semibold text-base md:text-lg lg:text-xl text-gray-800'>Last Name</label>
              <input type="text" className='border-2 border-gray-500 border-solid rounded-md bg-gray-200 w-full h-8' />
            </div>
          </div>
          <div className='w-full flex flex-row justify-start ml-4 lg:ml-10 gap-1 md:gap-5 mt-1 md:mt-4'>
            <div className='w-full sm:w-6/12 '>
              <label className='font-semibold text-base md:text-lg lg:text-xl text-gray-800'>E-mail</label>
              <input type="text" className='border-2 border-gray-500 border-solid rounded-md bg-gray-200  h-8 w-full'  />
            </div>
            <div className='w-full sm:w-6/12 '>
              <label className='font-semibold text-base md:text-lg lg:text-xl text-gray-800'>Contact no</label>
              <input type="text" className='border-2 border-gray-500 border-solid rounded-md bg-gray-200 w-full h-8' />
            </div>
          </div>
          <div className='w-full flex flex-row justify-start ml-4 lg:ml-10 gap-1 md:gap-5 mt-4'>
            <div className='w-full sm:w-6/12 '>
              <label className='font-semibold text-base md:text-lg lg:text-xl text-gray-800'>Company Located</label>
              <input type="text" className='border-2 border-gray-500 border-solid rounded-md bg-gray-200  h-8 w-full'  />
            </div>
            <div className='w-full sm:w-6/12 '>
              <label className='font-semibold text-base md:text-lg lg:text-xl text-gray-800'>Company Name</label>
              <input type="text" className='border-2 border-gray-500 border-solid rounded-md bg-gray-200 w-full h-8' />
            </div>
          </div>
          <div className='flex flex-row justify-start ml-4 lg:ml-10 gap-5 mt-4 w-full'>
            <label  className='font-semibold text-base md:text-lg lg:text-xl text-gray-800 w-3/12 ' >Profile</label>
            <select name="" id="" className='border-2 text-center border-gray-500 border-solid rounded-md bg-gray-200 w-full h-8'>
              <option value="">Java developer</option>
              <option value="">Front-end developer</option>
              <option value="">Backned developer</option>
              <option value="">Full Stack developer</option>
            </select>

          </div>
          </div>
          <div className='flex justify-center  h-1/5'>
            <p className=' border-2 border-none px-6 py-1 text-gray-800 bg-gray-500 text-lg sm:xl lg:text-2xl mt-2 rounded-lg font-semibold hover:bg-gray-800 hover:text-gray-500 cursor-pointer'>Submit </p>
          </div>

      </div>

    </div>

    </section>
    </>
  )
}

export default Contact