import React,{useState} from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motion} from "framer-motion";
import { Heart, Scale } from 'lucide-react';
import gp from '../img/r.jpg';
import img1 from '../img/a.png'
import img2 from '../img/p.jpg' ;
const Home = () => {
  const [positionIndex, setpositionIndex] = useState([0,1,2])
  const handleNext=()=>{
    setpositionIndex((prevIndex)=>{
      const updateIndex = prevIndex.map((prevIndex)=>(prevIndex+1)%3);
      return updateIndex
    })
  }

  const images=[
    img1,
    img2,
    gp,
    
  ]
  const position =[
    'center',
    'left1',
    
    'right1'
  ];
  const imageVariant = {
    center: {x: '0%', scale: 1, zIndex:5},
    left1: {x: '-80%', scale: 0.7, zIndex:3},
    right1: {x: '80%', scale: 0.7, zIndex:3},
  }

  return (
    <>
    <div className='pt-20 sm:pt-28 sm-24 md:mt-0 md:pt-4  w-full p-4 bg-gradient-to-l from-fuchsia-200 to-slate-800'>
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
        <div className='flex flex-col lg:flex-row justify-center '>
            <div className='w-full lg:w-6/12'>
                <div className='container gap-3 text-center sm:text-left '>
                    <div className='flex-col justify-center text-center my-4  gap-5 ml-2 mr-5  pt-0 sm:pt-12 lg:pt-20'>
                        <p className='font-semibold py-3 text-4xl  md:text-5xl lg:text-6xl text-gray-300 drop-shadow-2xl font-sans'>Hey..!</p>
                        <p className='flex flex-row justify-center  font-semibold py-2 text-3xl   md:text-4xl lg:text-5xl text-gray-300  font-sans text-transparent bg-gradient-to-l from-cyan-500 to-orange-500 bg-clip-text'>I'm Anshika Bhargav</p>
                        
                        <TypeAnimation
                        sequence ={[
                          "a skilled java Full Stack developer",
                          1000,
                          "a skilled Front-end Developer",
                          1000,
                          "a skilled Java Backend Developer",
                          1000
                        ]}
                          wrapper="span"
                          speed={40}
                          className="text-3xl font-semibold   md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white "
                          repeat={Infinity}

                        />
                        

                    </div>
                </div>
            </div>
            <div className='w-full lg:w-6/12'>
            <div className="flex item-center justify-center flex-col   h-screen mt-0">
                  <div className='w-full flex justify-center mt-16 sm:mt-32 '>
                  {images.map((image, index) => (
                    <motion.img
                    key={index}
                    src={image}
                    alt={image}
                    className="rounded-[12px] w-24 sm:w-48 h-28 sm:h-52  "
                    initial="center"
                    animate={position[positionIndex[index]]}
                    variants={imageVariant}
                    transition={{ duration: 0.5 }}
                    style={{  position: "absolute", border:"2px black dotted ", padding:"4px" }}
                  />
                  ))}
                  </div>
                  <button
          className="text-white mt-28 sm:mt-32 md:mt-56 bg-gray-800 font-semibold 
          rounded-md py-1 sm:py-2  px-3 sm:px-6 m-auto"
          onClick={handleNext}
        >
          Next
        </button>
              </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Home
