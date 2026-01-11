import React from 'react'
import { useNavigate } from 'react-router-dom'




const Home = () => {

  const navigate = useNavigate();
  return (
    <div className='flex  w-screen h-[90vh] justify-center items-center '>
      <div>
        <h1 className='font-bold text-purple-500 text-4xl mb-6'>Product Bazaar</h1>
        <p className='font-light text-purple-500 text-2xl leading-10 tracking-wider'>Product Bazzar is a dummy e-commerce web app built using React. <br />
          It showcases products using Context API and allows users to view <br />
          detailed product information through dynamic routing.</p>
        <button onClick={() => navigate('/products')} className='bg-purple-500 text-2xl px-5 py-2 rounded-2xl font-medium mt-8'>Buy Products</button>
      </div>

    </div>
  )
}

export default Home
