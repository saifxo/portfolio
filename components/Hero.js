import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../sanity'

const Hero = ({ pageInfo }) => {
    const [text, count] = useTypewriter({
        words: pageInfo?.typings,
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <div className='relative h-32 w-32 mx-auto'>
                <Image src={urlFor(pageInfo?.heroImage).url()} objectFit='cover' layout='fill' className='rounded-full  ' alt='img' />
            </div>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-b tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-2xl lg:text-6xl font-semibold px-10 pt-2'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                    <Link href='#about'><button className='heroButton'>About</button></Link>
                    <Link href='#experience'><button className='heroButton'>Experience</button></Link>
                    <Link href='#skills'><button className='heroButton'>Skills</button></Link>
                    <Link href='#projects'><button className='heroButton'>Projects</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Hero