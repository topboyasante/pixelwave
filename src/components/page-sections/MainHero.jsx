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
    <main className='relative w-screen'>
      <section>
        <div className='animate__animated animate__pulse gradient-circle w-screen h-[300px] absolute z-[40] top-0 left-0'></div>
      </section>
    </main>
  )
}

export default MainHero