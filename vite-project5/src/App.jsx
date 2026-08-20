import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [postData, setPostData] = useState([])
  const [confirmDialogue, setConfirmDialogue] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  const fetchApi = async () => {
    try {
      const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME")
      setPostData(response.data)

    } catch (error) {
      console.error("Error in fetching API ", error)
    }
  }
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2'>
      {
        postData.map((post) => (
          <div key={post.id}>
            <img className='w-full h-65' src={post.url} alt="cat-img" />
            <button onClick={() => {
              setConfirmDialogue(true)
              setSelectedId(post.id)
            }} className='bg-red-500 px-4 py-2 mt-2 text-white rounded-[5px] active:scale-95'>Delete</button>
          </div>
        ))
      }
      {
        confirmDialogue && (
          <div className='fixed flex justify-center items-center  bg-black/50 inset-0'>

            <div className='bg-white rounded-lg p-6'>
              <h2 className='text-xl font-bold mb-4'>
                Are you sure you want to delete this image?
              </h2>
              <div className='flex gap-3 justify-end'>
                <button onClick={() => setConfirmDialogue(false)} className='px-4 py-2 m-2 bg-black text-white active:scale-95 rounded'>Cancel</button>
                <button className='px-4 py-2 m-2 bg-red-500 text-white active:scale-95 rounded'>Delete</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App
