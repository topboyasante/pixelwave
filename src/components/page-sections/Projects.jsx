import React, { useEffect } from 'react'
import { gsap,Power3 } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function Projects() {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)


    const tl = gsap.timeline(
      {
          scrollTrigger:{
              trigger:".project-container",
              scrub:0.6,
              start:"top 100%",
              end:"bottom 100%",
              markers:true
          }
      }
  )
  tl.fromTo(".navbar",{
    color:"white"
  },
  {
    color:"black",
    duration:0.5,
  })
  tl.fromTo(".cta",{
    borderColor:"white"
  },
  {
    borderColor:"black",
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
    <main className='text-black'>
        <section className='max-w-[1600px] h-screen mx-auto project-container pt-[7vh]'>
          <section className='relative max-w-[1600px] mx-auto h-full'>
              <section className='p-5 '>

                <section className='overflow-hidden lg:py-3'>
                  <h1 className='text-2xl md:text-4xl xl:text-6xl about'>Completed Projects:</h1>
                </section>
                <hr  className='border-black my-5'/>
                <section className='flex flex-col lg:flex-row'>
                    
                </section>
              </section>
          </section>
        </section>
    </main>
  )
}

export default Projects