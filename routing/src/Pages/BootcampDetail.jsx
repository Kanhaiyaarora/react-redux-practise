import React from 'react'
import { useParams } from 'react-router-dom'

const BootcampDetail = () => {
  const params = useParams()
  return (
    <div className='h-screen w-screen text-4xl flex justify-center items-center'>
      {params.id} Bootcamp Details Page
    </div>
  )
}

export default BootcampDetail
