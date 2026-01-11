import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between text-4xl'>
      <div className="logo">Routing</div>
      <div className="links">
        <Link to="/" >Home </Link>
        <Link to="/about" >About </Link>
        <Link to="/contact" >Contact </Link>
        <Link to="/courses" >Courses </Link>
      </div>
    </div>
  )
}

export default Navbar
