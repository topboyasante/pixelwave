import React, { useEffect } from 'react'
import { gsap,Power3 } from "gsap";

function MainHero() {

  useEffect(()=>{
    const tl = gsap.timeline()


    tl.fromTo(".navbar",{
      y:"-30vh"
    },
    {
      y:0,
      duration:1,
    })
    tl.fromTo(".header", {
        y: 500,
        ease: "power3.out",
        skewY: 7,
        duration:1.8,
        stagger: {
          amount: 0.3
        }
      },
      {
        y: 0,
        ease: "power3.out",
        skewY: 0,
        duration:1.8,
        stagger: {
          amount: 0.3
        }
      }
    )
  })

  return (
    <main className='relative w-full h-full pt-[7vh]'>
      
      <section className='relative max-w-[1600px] mx-auto h-[93vh]'>
            <section className='absolute bottom-0 z-[1] p-5'>
              <section className='overflow-hidden lg:py-3'>
                <h1 className='text-[3em] md:text-[8em] xl:text-[10em] header font-bold'>pixelwave.</h1>
              </section>
            </section>
        </section>
    </main>
  )
}

export default MainHero