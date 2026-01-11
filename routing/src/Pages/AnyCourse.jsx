import React from 'react'
import { useParams } from 'react-router-dom'

const AnyCourse = () => {
  const params = useParams()
  return (
    <div>
      {params.id} --- Course Page
    </div>
  )
}

export default AnyCourse
