import React, { useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const fetchApi = async () => {
    const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME")
    console.log(response)
  }
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div>

    </div>
  )
}

export default App
