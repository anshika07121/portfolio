import React from 'react'
import Home from '../body/Home'
import Sidebar from "../Sidebar.jsx"

const Homepage = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      {<Sidebar/>}
      {<Home/>}
    </div>
  )
}

export default Homepage
