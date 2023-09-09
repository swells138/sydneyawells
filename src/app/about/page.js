import Image from 'next/image'
import Link from 'next/link'
import roundsquiggles from "public/all around bg.png"
import logo from 'public/black logo.png'
import Navbar from '../components/Navbar'

export default function About() {
    return (
        <>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center h-96 mt-12 pt-10'>
                <h1 className="text-5xl font-mono">About Me</h1>
                <div className="w-1/3 pt-5">
                    <p className='font-mono'>
                        I am software developer currently working at Next Phase Solutions.
                        I spent four years in the Navy as a Boatswain's mate.
                        I love my cats and my partner Holly. I'm originally from Ohio
                        but I have been living in South Carolina for the last two years.
                        In my free time, I enjoy creating and learning new things.
                    </p>
                </div>
            </div>
            {/* <Image
                src={roundsquiggles}
                fill={true}
                alt="Picture of the author"
            /> */}
        </>
    )
}
