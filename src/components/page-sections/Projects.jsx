import React, { useEffect } from 'react'
import { gsap,Power3 } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function Projects() {

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline()

    gsap.to(".navbar, .cta",
    {
      color:"black",
      borderColor:"black",
      duration:0.5,
      scrollTrigger:{
        trigger:".projects-container",
        scrub:0.6,
        start:"top 2%",
        end:"bottom 100%",
        toggleActions:"restart pause reverse none",
      }
    },
    )
    gsap.to(".projects",
      {
        opacity:1,
        duration:1,
        scrollTrigger:{
          trigger:".projects-container",
          scrub:0.6,
          start:"top 90%",
          end:"bottom 100%",
        }
      },
    )
  })

  return (
    <main className='bg-[#ffffff] text-black'>
        <section className='max-w-[1600px] h-screen mx-auto projects-container pt-[7vh]'>
          <section className='relative max-w-[1600px] mx-auto h-full'>
              <section className='p-5 '>

                <section className='overflow-hidden lg:py-3'>
                  <h1 className='text-2xl md:text-4xl xl:text-6xl projects opacity-0'>Completed Projects:</h1>
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