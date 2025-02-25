import React from 'react'
import {motion} from "framer-motion";
import { Heart } from 'lucide-react';
function Skills() {
  return (
    <>
    <div className='pt-24 sm:pt-28 sm-24 md:mt-0 md:pt-4  w-full p-4 bg-gradient-to-l from-cyan-100 to-cyan-900'>
      <div>
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
              <div className='flex justify-center '>
      <p className='border-2 border-solid border-gray-500 px-3 md:px-6 py-1 text-white bg-gray-800 text-xl md:text-2xl lg:text-3xl mt-1 md:mt-2 rounded-xl'>Skills </p>
      </div>
      <div className='container flex flex-col lg:flex-row'>
        <div className='w-full lg:w-6/12 flex flex-col'>
          <div >
            <div className='text-2xl text-gray-300 mx-4 '>
              <span className='bg-clip-text text-transparent font-semibold rounded-lg  bg-gradient-to-r from-red-500 to-green-600 underline underline-offset-1'>Java Full Stack Developer</span>
              <p className='text-sm md:text-base text-white text-left border-2 border-solid border-gray-500 px-5 py-2 rounded-lg '>Proficient Java Full Stack Developer with expertise in designing and developing end-to-end web applications. Skilled in building scalable backend systems using Java and modern frameworks, coupled with responsive and dynamic frontends.</p>
            </div>
            <div >
            <div className='text-2xl text-gray-300 mx-4 mt-4 '>
              <span className='bg-clip-text text-transparent font-semibold rounded-lg  bg-gradient-to-r from-pink-600 to-blue-500 underline underline-offset-1'>Front-end Developer</span>
              <p className='text-sm md:text-base text-white text-left border-2 border-solid border-gray-500 px-5 py-2 rounded-lg '>Creative and detail-oriented Front-End Developer with expertise in building visually appealing and user-friendly web applications. Skilled in crafting responsive designs and interactive user interfaces that enhance user experience.</p>
            </div>
            <div className='text-2xl text-gray-300 mx-4 mt-4 '>
              <span className='bg-clip-text text-transparent font-semibold rounded-lg  bg-gradient-to-r from-yellow-500 to-violet-500 underline underline-offset-1'>Back-end Developer</span>
              <p className='text-sm md:text-base text-white text-left border-2 border-solid border-gray-500 px-5 py-2 rounded-lg '>Skilled Back-End Developer with expertise in building robust and scalable server-side applications. Proficient in designing and implementing APIs, managing databases, and ensuring seamless integration with front-end systems.</p>
            </div>
          </div>
        </div>
        

      </div>
      <div className='w-full lg:w-6/12 container m-auto mt-3 mx-4 md:mt-0  '>
      <div className='flex-col '>
        <h3 className='font-blod text-white font-serif'> HTML</h3>
        <div className=' flex flex-row '>
          <div className='w-4/5 bg-gray-300 h-2.5 rounded-full mt-2  text-center  '>
            <div className='bg-gradient-to-r from-green-800 to-green-400 w-11/12 h-2.5 rounded-full' ></div>
          </div>
          <p className=' float-end font-semibold text-gray-800 px-4'>90%</p>
        </div>
      </div>
      <div className='flex-col '>
        <h3 className='font-blod text-white font-serif'> CSS Tailwind/Bootstrap</h3>
        <div className='flex flex-row  '>
          <div className='w-4/5 bg-gray-300 h-2.5 rounded-full mt-2  text-center  '>
            <div className='bg-gradient-to-r from-green-800 to-green-400 w-11/12 h-2.5 rounded-full' ></div>
          </div>
          <p className=' float-end font-semibold text-gray-800 px-4'>90%</p>
        </div>
      </div>
      <div className='flex-col '>
        <h3 className='font-blod text-white font-serif'> JavaScript</h3>
        <div className='flex flex-row  '>
          <div className='w-4/5 bg-gray-300 h-2.5 rounded-full mt-2  text-center  '>
            <div className='bg-gradient-to-r from-green-800 to-green-400 w-5/6 h-2.5 rounded-full' ></div>
          </div>
          <p className=' float-end font-semibold text-gray-800 px-4'>85%</p>
        </div>
      </div>
      <div className='flex-col '>
        <h3 className='font-blod text-white font-serif'> React</h3>
        <div className='flex flex-row  '>
          <div className='w-4/5 bg-gray-300 h-2.5 rounded-full mt-2  text-center  '>
            <div className='bg-gradient-to-r from-green-800 to-green-400 w-3/4 h-2.5 rounded-full' ></div>
          </div>
          <p className=' float-end font-semibold text-gray-800 px-4'>75%</p>
        </div>
      </div>
      <div className='flex-col '>
        <h3 className='font-blod text-white font-serif'> Node JS</h3>
        <div className='flex flex-row  '>
          <div className='w-4/5 bg-gray-300 h-2.5 rounded-full mt-2  text-center  '>
            <div className='bg-gradient-to-r from-green-800 to-green-400 w-3/5 h-2.5 rounded-full' ></div>
          </div>
          <p className=' float-end font-semibold text-gray-800 px-4'>60%</p>
        </div>
      </div>
      <div className='flex-col '>
        <h3 className='font-blod text-white font-serif'> Java Core / Advance</h3>
        <div className='flex flex-row  '>
          <div className='w-4/5 bg-gray-300 h-2.5 rounded-full mt-2  text-center  '>
            <div className='bg-gradient-to-r from-green-800 to-green-400 w-4/5 h-2.5 rounded-full' ></div>
          </div>
          <p className=' float-end font-semibold text-gray-800 px-4'>80%</p>
        </div>
      </div>
      <div className='flex-col '>
        <h3 className='font-blod text-white font-serif'> MySQL</h3>
        <div className='flex flex-row  '>
          <div className='w-4/5 bg-gray-300 h-2.5 rounded-full mt-2  text-center  '>
            <div className='bg-gradient-to-r from-green-800 to-green-400 w-4/5 h-2.5 rounded-full' ></div>
          </div>
          <p className=' float-end font-semibold text-gray-800 px-4'>80%</p>
        </div>
      </div>
      <div className='flex-col '>
        <h3 className='font-blod text-white font-serif'>  Spring/ SpringBoot</h3>
        <div className='flex flex-row '>
          <div className='w-4/5 bg-gray-300 h-2.5 rounded-full mt-2  text-center  '>
            <div className='bg-gradient-to-r from-green-800 to-green-400 w-4/5 h-2.5 rounded-full' ></div>
          </div>
          <p className=' float-end font-semibold text-gray-800 px-4'>80%</p>
        </div>
      </div>
      </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Skills