import { gsap } from 'gsap'
import React, { useEffect } from 'react'

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
    <main className='w-screen h-[100svh]'>
      <section className="max-w-[1600px] h-full mx-auto p-5">
          <section className="relative w-full h-full">
            <section className="absolute bottom-0 overflow-hidden">
                <h1 className='text-[3em] md:text-[8em] xl:text-[10em] font-bold header'>pixelwave.</h1>
            </section>
          </section>
      </section>
    </main>
  )
}

export default MainHero