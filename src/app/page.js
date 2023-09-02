import Image from 'next/image'
import Navbar from './components/Navbar'


export default function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className='flex flex-col items-center pt-10'>
        <h1 className="text-8xl text-center font-mono">Hi. I'm Sydney</h1>
        <div className="w-3/4">
          <p>I am new to tech and I am not sure what to write here but we are going to fill it in with some fun stuff so that I can see what the layout of this page is going to be when I start to add content.</p>
        </div>
      </div>

    </>
  )
}
