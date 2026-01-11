import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-5 text-2xl border-b-2'>
      <div className="logo font-bold text-purple-500 ">ProductBazaar</div>
      <div className="nav-links flex gap-10">
        <Link className='focus:text-purple-500 ' to='/'>Home</Link>
        <Link className='focus:text-purple-500' to='/products'>Products</Link>
        <Link className='focus:text-purple-500' to='/about'>About</Link>
      </div>
    </div>
  )
}

export default Navbar
