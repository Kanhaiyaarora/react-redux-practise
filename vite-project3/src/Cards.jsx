import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {

  let images = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
  ]

  useEffect(() => {
    gsap.utils.toArray(".card").forEach(card => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true
        }
      })
    })
  })


  return (
    <main className='w-full text-white flex flex-col gap-5 items-center py-[15vh] pb-[20vh]'>

      {
        images.map(function (image, index) {
          return (<div key={index} id={index} className="card sticky top-[15vh] w-[27vw] flex text-center items-center flex-col gap-5 px-7.5 py-[10vh] rounded-lg bg-[#383027]">
            <img className='w-37.5' src={image} alt="" />
            <h1 className='text-4xl'>The <br /> <span className='font-bold '>Algorithm </span></h1>
            <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vitae?</p>
          </div>)
        })
      }


    </main>

  )
}

export default Cards
