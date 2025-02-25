import React from 'react'
import About from '../body/About'
import Sidebar from "../Sidebar.jsx"
const Aboutpage = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      {<Sidebar/>}
      {<About/>}
    </div>
  )
}

export default Aboutpage
