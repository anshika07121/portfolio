import React from 'react'
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

function Model() {
  const navigate = useNavigate();

  return (
    <div className='md:hidden  backdrop-blur-sm inset-0 bg-opacity-20 container fixed flex float-end  z-10 bg-gray-400
     text-2xl w-full
    mt-20 sm:mt-24
    h-screen'>
      
        <div className='w-full h-screen  '>
          <div className='h-3/5'>
              <li className='flex flex-col  items-center text-gray-800 font-semibold text-xl gap-2 mt-8' >
                <a  className=' hover:bg-white hover:text-gray-700 border-2 border-gray-700  hover:border-2  w-32 justify-center text-center  rounded-lg' onClick={()=>navigate('/')} >Home</a>
                <a className=' hover:bg-white hover:text-gray-700  h border-2 border-gray-700 w-32 rounded-lg text-center ' onClick={()=>navigate("/about")}>About</a>
                <a  className=' hover:bg-white hover:text-gray-700 border-2 border-gray-700  hover:border-2  w-32 rounded-lg text-center' onClick={()=>navigate("/project")} >Project</a>
                <a  className=' hover:bg-white hover:text-gray-700 border-2 border-gray-700  hover:border-2  w-32 rounded-lg text-center' onClick={()=>navigate("/skill")} >Skills</a>
                <a  className=' hover:bg-white hover:text-gray-700 border-2 border-gray-700  hover:border-2  w-32 rounded-lg text-center' onClick={()=>navigate("/contact")}>Contact</a>
              </li>
          </div>
          <div className='h-1/5 bg-gray-400 '>
          <div className='flex flex-row justify-evenly'>
           <button className='text-white bg-blue-600 p-1 rounded-lg ' ><Linkedin/></button>
           <button className='text-white bg-blue-300 p-1 rounded-lg '><Twitter/></button>
           <button className='text-white bg-red-400 p-1 rounded-lg '><Instagram/></button>
           <button className='text-white bg-blue-600 rounded-lg ' ><Facebook/></button>
          </div>

          </div>

        </div>
      
    </div>
  )
}

export default Model
