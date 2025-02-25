import React, { useState } from 'react'

import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import img from "./img/ansh.jpeg";
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import Model from './body/Model';

function Navbar() {
    const navigate = useNavigate();
    const [click, setclick] = useState(false);

    const closeModel=()=>{
        setclick(false);
    }


  return (
    <>
    <div className='bg-gray-900 ' >
        <div className=' hidden md:flex  flex-col bg-slate-900 w-56 lg:w-80 md:w-60  h-screen float-end  '>
        <div className='hidden md:flex flex-col justify-center text-center  w-full  rounded-2xl h-1/5  '>
            <div className='mt-5 flex justify-center items-center h-1/4 '>
               <img className=' rounded-full h-32 w-32 md:h-24 lg:h-32 md:w-24 lg:w-32 border-solid border-2 border-gray-300' src={img} alt="" /> 
            </div>

        </div>
        <div className='hidden md:flex flex-col  text-center mt-5 text-gray-300 mb-5 cursor-pointer h-screen bg-gray-900 float-end'>
           <div className='h-4/5 flex flex-col justify-around'>
           <p className='border-solid hover:bg-white hover:text-gray-700  border-2  border-gray-900 text-xl hover:border-2 ml-16 mr-16 mt-6 hover:border-white hover:font-semibold rounded-2xl' onClick={()=>navigate("/")}>Home</p>
            <p className=' border-solid hover:bg-white text-xl  hover:text-gray-700   border-2  border-gray-900  hover:border-2 ml-16 mr-16 hover:border-white hover:font-semibold rounded-2xl' onClick={()=>navigate("/about")}>About</p>
            <p className='border-solid hover:bg-white hover:text-gray-700  border-2 border-gray-900  hover:border-2 ml-16 mr-16 hover:border-white text-xl  hover:font-semibold rounded-2xl' onClick={()=>navigate("/project")}>Project</p>
            <p className='border-solid hover:bg-white hover:text-gray-700  border-2  border-gray-900  hover:border-2 ml-16 mr-16 hover:border-white hover:font-semibold text-xl  rounded-2xl' onClick={()=>navigate("/skill")}>Skills</p>
            <p className='border-solid hover:bg-white hover:text-gray-700  border-2 border-gray-900  hover:border-2 ml-16 mr-16 hover:border-white text-xl hover:font-semibold  rounded-2xl' onClick={()=>navigate("/contact")}>Contact</p>
           </div>

            <div className=' h-1/5 bg-gray-900 pt-4 pb-2 flex flex-row justify-evenly'>
            
            
            <button className='text-white bg-blue-600 px-2 py-1 rounded-lg m-auto'><Linkedin /></button>
            <button className='text-white bg-red-400 px-2 py-1 rounded-lg m-auto'><Instagram /></button>
            <button className='text-white bg-blue-600 px-2 py-1 rounded-lg m-auto'><Facebook /></button>
            <button className='text-white bg-blue-300 px-2 py-1 rounded-lg m-auto'><Twitter /></button>
            
            
        </div>

            
        </div>
        
        </div>

        <div className=' md:hidden fixed h-20 sm:h-24 z-10 flex flex-row justify-between bg-gray-600 w-full'>
           
            <div className=' flex float-start'>
              
            <button  className=' bg-white px-3 py-2 text-gray-700 rounded-lg m-auto ml-7'>{click === true ? <X onClick={closeModel}/> : <Menu onClick={()=>setclick(true)}/>}</button>
            
            </div>
            {click && <Model/> }
            <div className=' flex flex-end pt-2 sm:pt-2 pb-1 sm:pb-2 pl-3 sm:pl-4 mr-4 '>
                <img className=' rounded-full h-16 sm:h-20 w-16 sm:w-20  border-solid border-2 border-gray-300' src={img} alt="" />
            </div>

        </div>
        
    </div>
   


    </>
  )
}

export default Navbar