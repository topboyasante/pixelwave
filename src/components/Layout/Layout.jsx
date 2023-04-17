import React from 'react'
import Navbar from '../navigation/Navbar'

function Layout({children}) {
  return (
    <main>
      <div className='relative'>
        <Navbar/>
      </div>
        {children}
    </main>
  )
}

export default Layout