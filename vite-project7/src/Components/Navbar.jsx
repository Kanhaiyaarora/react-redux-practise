import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='flex justify-between items-center p-4 bg-black text-white'>
      <h1>Portfolio.</h1>
      <div className='md:flex gap-6 hidden'>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/product">Product</a>
      </div>
      <button onClick={() => { setIsOpen(!isOpen) }} className="md:hidden text-2xl">
        {isOpen ? "X" : "☰"}
      </button>
      {isOpen && (
        <div className={`fixed inset-0 z-50 bg-white text-black transition-transform duration-1000 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}>

          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-5 border-b">
            <h2 className="text-xl font-bold">MENU</h2>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-6 p-6 text-xl">
            <a to="/home" onClick={() => setIsOpen(false)}>Home</a>
            <a to="/about" onClick={() => setIsOpen(false)}>About</a>
            <a to="/product" onClick={() => setIsOpen(false)}>Products</a>
          </div>

        </div>
      )}
    </nav>
  )
}

export default Navbar
