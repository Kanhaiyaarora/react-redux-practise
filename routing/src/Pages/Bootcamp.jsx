import React from 'react'
import { Outlet } from 'react-router-dom'

const Bootcamp = () => {
  return (
    <div className='h-screen w-screen text-4xl flex justify-center items-center'>
      Bootcamp Page
      <Outlet />
    </div>
  )
}

export default Bootcamp
