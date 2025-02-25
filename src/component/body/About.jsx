import React from 'react'
import {motion} from "framer-motion";
import { Heart } from 'lucide-react';
function About() {
  return (
    <>
   <div className='pt-24 sm:pt-28 sm-24 md:mt-0 md:pt-4  w-full p-4 bg-gradient-to-l from-gray-400 to-gray-800 '>
    <div className='w-full flex rounded-full bg-slate-300 font-semibold'>
         <motion.div className='px-10   w-full flex justify-center py-1  text-sm md:text-md lg:text-lg'
         initial={{ opacity: 0, y: 0, color:"#6c3483"}}
         animate={{ opacity: 1, y: 0, color:["#229954","#ca6f1e","#3498db","#A52A2A","#8B008B","#00FFFF"]}}
         
   
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
      <div className='flex justify-center '>
      <p className='border-2 border-solid border-gray-500 px-3 md:px-6 py-1 text-white bg-pink-950 text-xl md:text-2xl lg:text-3xl mt-1 md:mt-2 rounded-xl'>About </p>
      </div>
      <div className='w-full border-2 border-solid border-gray-400 bg-gradient-to-r from-teal-500 to-rose-200 m-2 text-white rounded-lg px-4 py-2 text-base  font-extralight'>
        <p>I'm tech-savvy and a skilled full stack developer, expertise in developing dynamic and engaging web solutions I'm a selftaught professional proficient in HTML, tailwind, JavaScript, React.js, jQuery, java, Spring Boot, and MySQL .And I have worked on real time project. I am always open to face new challenge in my life,</p>
      </div>
      <div className='w-full flex  flex-col sm:flex-row'>
        <div className='border-2 border-solid border-gray-400  sm:w-6/12 w-full bg-gradient-to-r from-pink-400 rounded-lg to-purple-500 m-2 px-4 font-bold '>
          <p>
            <span className='font-semibold text-gray-900 underline'>EXPERIENCE</span><br />
            <span className='underline text-gray-300' >Company : Uncodemy, Noida</span>
            <p>Java Full Stack Developer - Training and Internship
            Duration : 6 month
            Web Developer Intern
            {/* <div>
            <span className='underline text-gray-300' >Company : Zummit Infolab, Bangalore</span>
            <p> Duration : from July to present</p>
            <p>Skills : React, Redux, Tailwind</p>
            </div> */}
            </p>
          </p>
        </div>
        <div className='border-2 border-solid border-gray-400 sm:w-6/12 w-full bg-gradient-to-r from-indigo-400 rounded-lg to-gray-300 m-2 px-4  font-bold flex flex-col justify-around py-2  '>
          <div>
            <span className='font-semibold text-gray-900 underline '>SOFT SKILLS</span><br />
            <p className='mt-2'>Good Communication Skills</p>
            <p>Problem-Solving</p>
            <p>Time Management</p>
            <p>Passionate</p>
            <p>Teamwork</p>
            <p>Continuous Learning</p>
          </div>

        </div>

      </div>
      <div className='w-full flex flex-col sm:flex-row'>
      <div className='border-2 border-solid border-gray-400  sm:w-6/12 w-full bg-gradient-to-r from-purple-500 rounded-lg to-pink-400 m-2 px-4 font-bold '>
          <p>
            <span className='font-semibold text-gray-900 underline'>EDUCATION</span><br />
            <span className='underline text-gray-300' >Global Institute of Technology and Management, Gurugram
             Haryana</span>
            <p>
            B.Tech Degree in CSE<br/>
            2022 – 2025
            </p>
            <span className='underline text-gray-300' >Government Girls Polytechnic Amethi</span>
            <p>
            Diploma in CSE - 80%<br/>
            2019 – 2022
            </p>
            
          </p>
        </div>
        <div className='border-2 border-solid border-gray-400 sm:w-6/12 w-full bg-gradient-to-r from-indigo-400 rounded-lg to-gray-300 m-2 px-4  font-bold flex flex-col justify-around py-2  '>
          <div>
            <span className='font-semibold text-gray-900 underline '>Roles and Resposibility</span><br />
            <p className='mt-2'>Frontend Developer</p>
            <p> Java Full Stck Developer</p>
            <p>Java Backend Devloper</p>
            
          </div>

        </div>

      </div>
      </div>
      </div>
    </>
  )
}

export default About