import React from 'react'
import Image from 'next/image'
import logo from '/home/swells/portfolio/mywebsite/sydneyawells/src/app/Untitled.png'
const Navbar = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-sky-950 via-slate-600 to-stone-800 '>
      <div className="columns-2">
      <Image
        src={logo}
        width={200}
        height={200}
        alt="Picture of the author"
      />
        <div className="columns-3">
          <h1 className='font-semibold text-slate-900'>Home</h1>
          <h1 className='font-semibold text-slate-900'>Blog</h1>
          <h1 className='font-semibold text-slate-900'>Code</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar