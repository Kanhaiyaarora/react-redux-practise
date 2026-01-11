import React from 'react'

const About = () => {
  return (
    <>
      <div className='h-[80vh] w-[80vw]  m-40 flex gap-48'>
        <div className='h-170 w-90'><img src="https://plus.unsplash.com/premium_photo-1683147813288-463127a0fd13?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8" alt="" /></div>
        <div className='flex flex-col gap-20'>
          <h1 className='text-4xl'>About Us - </h1>
          <p className='text-2xl '>Product Bazzar is a mock e-commerce application built with React to simulate real-world product browsing. <br /> <br />
            Users can explore products and view individual product details using modern React concepts.</p>
        </div>
      </div>
    </>
  )
}

export default About
