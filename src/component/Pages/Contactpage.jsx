import React from 'react'
import Contact from '../body/Contact'
import Sidebar from "../Sidebar.jsx"
function Contactpage() {
  return (
    <div className='flex flex-col md:flex-row'>
        {<Sidebar/>}
        {<Contact/>}
      
    </div>
  )
}

export default Contactpage
