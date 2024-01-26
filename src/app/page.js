import Image from 'next/image'
import Link from 'next/link'
import logo from 'public/black logo.png'
import squiggles from "public/squiggle bg.png"
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className='flex flex-col items-center pt-12 mt-12'>
        <div className='sm:grid grid-rows-3 grid-flow-col gap-4'>
          <div className='row-span-3'>
            <h1 className="text-8xl text-center sm:text-9xl font-mono font-black">Sydney
              Wells</h1>
          </div>
          <div className='col-span-2'>
            <p className='font-semibold leading-loose text-3xl'>Full Stack Web Developer</p>
          </div>
          <div className="row-span-2 col-span-2">
            <p className='font-medium text-2xl'>Customer Success Specialist</p>
          </div>
        </div>
        {/* <div className='w-3/4'>
          <p className='indent-4'>This could be a summary of shit that I am up to or something like that. I like games and dun and crafts and doing things that make my buns wiggle. Some poo about the navy and doing cool boat stuff and being passionate about junk and such. Keep making this long so that you can see what it looks like when there is content here.</p>
        </div> */}
      </div>
      {/* <Image
          src={squiggles}
          fill={true}
          alt="Picture of the author"
        /> */}
    </>
  )
}
