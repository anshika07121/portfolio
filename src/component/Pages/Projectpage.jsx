import React from 'react'
import Project  from "../body/Project"
import Sidebar from "../Sidebar"
function Projectpage() {
  return (
    <div className='flex flex-col md:flex-row'>
        {<Sidebar/>}
        {<Project/>}
      
    </div>
  )
}

export default Projectpage
