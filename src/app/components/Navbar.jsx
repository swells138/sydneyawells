import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/black logo.png'

const Navbar = () => {
  return (
    <>
   <div className='columns-2 flex justify-between'>
        <div>
          <Link
          href="/">
          <Image
            src={logo}
            width={200}
            height={200}
            alt="Initials"
          />
          </Link>
        </div>
        <div className='pt-10 pr-12'>
          <div className="columns-2">
            <div>
            <Link className='font-semibold text-slate-900' href="/about">About</Link>
            </div>
            <div>
            <Link className='font-semibold text-slate-900' href="https://github.com/swells138">Code</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar