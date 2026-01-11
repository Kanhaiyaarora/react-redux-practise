import React from 'react'
import { useParams } from 'react-router-dom'

const Cohort2 = () => {
  const params = useParams()

  return (
    <div className='h-125 w-screen text-4xl flex justify-center items-center'>
      Course Page -  {params.id}
    </div>
  )
}

export default Cohort2
