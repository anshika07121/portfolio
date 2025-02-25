import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Sidebar from './component/Sidebar'
import About from './component/body/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './component/body/Dashboard'
import Homepage from './component/Pages/Homepage'
import Aboutpage from './component/Pages/Aboutpage'
import Contactpage from './component/Pages/Contactpage'
import Skillspage from './component/Pages/Skillspage'
import Projectpage from './component/Pages/Projectpage'
import Testanni from '../public/Banner'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/contact" element={<Contactpage/>}/>
      <Route path="/skill" element={<Skillspage/>}/>
      <Route path="/project" element={<Projectpage/>}/>

    </Routes>
    </BrowserRouter>
    

     
      
     
     
      
    </>
  )
}

export default App
