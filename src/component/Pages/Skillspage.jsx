import React from 'react'
import Skills from '../body/Skills'
import Sidebar from "../Sidebar.jsx"
function Skillspage() {
  return (
    <div className='flex flex-col md:flex-row'>
        {<Sidebar/>}
        {<Skills/>}
    </div>
  )
}

export default Skillspage