import React from 'react'

function Navbar() {
  return (
         <main className='w-screen h-[7vh] fixed  p-5'>
            <section className=" flex justify-around items-center gap-5 navbar z-[20]">
                {/* Logo */}
            <section className=''>
                <span className='uppercase text-xs md:text-md'>pixelwave</span>
            </section>
                {/* Job Description */}
                <section>
                    <span className='hidden md:flex uppercase text-xs md:text-md '>agency portfolio / 2022 - 2023</span>
                </section>
                {/* CTA */}
                <section>
                    <span className='uppercase text-xs md:text-md md:w-[10%] border border-[#000000] rounded-[45px] px-[8px] py-[5px] cta'>contact</span>
                </section>
            </section>

            <section>
            <div className='gradient-circle w-screen h-[300px] absolute z-[-1] top-0 left-0'></div>
            </section>
        </main>
       
  )
}

export default Navbar