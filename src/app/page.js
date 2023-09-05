import Image from 'next/image'
import logo from '/home/swells/portfolio/mywebsite/sydneyawells/src/app/black logo.png'
import squiggles from "/home/swells/portfolio/mywebsite/sydneyawells/src/app/squiggle bg.png"
export default function Home() {
  return (
    <>
      <div className='columns-2 flex justify-between'>
        <div>
          <Image
            src={logo}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <div className='pt-10 pr-12'>
          <div className="columns-3">
            <h1 className='font-semibold text-slate-900'>About</h1>
            <h1 className='font-semibold text-slate-900'>Resume</h1>
            <h1 className='font-semibold text-slate-900'>Code</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center pt-12 mt-12'>
        <div className='grid grid-rows-3 grid-flow-col gap-4'>
          <div className='row-span-3'>
            <h1 className="text-9xl font-mono font-black">Sydney
              Wells</h1>
          </div>
          <div className='col-span-2'>
            <p className='font-semibold leading-loose text-3xl'>Full Stack Web Developer</p>
          </div>
          <div className="row-span-2 col-span-2">
            <p className='font-medium text-2xl'>Technical Solutions Consultant</p>
          </div>
        </div>
        {/* <div className='w-3/4'>
          <p className='indent-4'>This could be a summary of shit that I am up to or something like that. I like games and dun and crafts and doing things that make my buns wiggle. Some poo about the navy and doing cool boat stuff and being passionate about junk and such. Keep making this long so that you can see what it looks like when there is content here.</p>
        </div> */}
      </div>
      <Image
        src={squiggles}
        fill={true}
        alt="Picture of the author"
      />
    </>
  )
}
