import Image from 'next/image'
import Link from 'next/link'
import roundsquiggles from "public/all around bg.png"
import logo from 'public/black logo.png'
import Navbar from '../components/Navbar'

export default function About() {
    return (
        <>
            <Navbar></Navbar>
            <div className='sm:flex flex-col justify-center items-center h-96 mt-12 pt-10'>
                <h1 className="text-center text-5xl sm:text-5xl font-mono">About Me</h1>
                <div className="text-center sm:w-1/2 pt-5">
                    <p className='font-mono pb-5'>
                        Hello! I'm Sydney, a passionate software developer currently enriching the tech team at Naviant.
                        My journey in technology is underpinned by a diverse background, including four rewarding years in the Navy,
                        where I served as a Boatswain's mate. This experience honed my leadership skills and adaptability,
                        qualities that I bring to my role in software development today.
                        <br></br>
                        Originally from the scenic southeastern Ohio, I now call the vibrant area near Cleveland my home.
                        Outside of coding and navigating the tech world, I find joy in the simpler things in life.
                        I'm a proud cat parent and cherish moments spent with my partner, Holly.
                        We share a love for our feline companions and enjoy exploring the cultural tapestry of our city.
                        <br></br>
                        Creativity and continuous learning are the cornerstones of my personal and professional life.
                        In my free time, you'll often find me engaged in various projects, from tinkering with new programming
                        languages to experimenting with innovative tech solutions. This website is a canvas for my professional
                        journey and a testament to my belief in the power of learning and creating.
                        <br></br>
                        Welcome to my world!
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
