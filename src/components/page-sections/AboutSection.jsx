import React, { useEffect } from 'react'
import { gsap,Power3 } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function AboutSection() {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)


    const tl = gsap.timeline(
      {
          scrollTrigger:{
              trigger:".about-container",
              scrub:0.6,
              start:"top 90%",
              end:"bottom 100%",
          }
      }
  )
  tl.fromTo(".navbar",{
    color:"black"
  },
  {
    color:"white",
    duration:0.5,
  })
  tl.fromTo(".cta",{
    borderColor:"black"
  },
  {
    borderColor:"white",
    duration:0.5,
  })
    tl.fromTo(".about",
      {
        opacity:0
      },
      {
        opacity:1,
        duration:1
      }
    )
  })

  return (
    <main className='bg-black text-white'>
        <section className='max-w-[1600px] h-screen mx-auto about-container pt-[7vh]'>
          <section className='relative max-w-[1600px] mx-auto h-full'>
              <section className='p-5 '>

                <section className='overflow-hidden lg:py-3'>
                  <h1 className='text-2xl md:text-4xl xl:text-6xl about'>Pixelwave Studio is a trailblazing web development agency that combines cutting-edge technology with stunning design 
                  to create custom websites that stand out from the crowd. Our team of talented professionals is dedicated to delivering exceptional results that exceed our clients' expectations 
                  and leave a lasting impression on their audiences.</h1>
                </section>
                <hr  className='border-white my-5'/>
                <section className='flex flex-col lg:flex-row'>
                    
                </section>
              </section>
          </section>
        </section>
    </main>
  )
}

export default AboutSection