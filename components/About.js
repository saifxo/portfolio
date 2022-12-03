import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { urlFor } from '../sanity'

function About({ pageInfo }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex relative  flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase ml-7 tracking-[15px] text-gray-500 text-lg text-center'>About</h3>
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          src={urlFor(pageInfo?.profilePic).url()}
          className='-mb-20 md:mb-0 mt-6 flex-shrink-0 text-center w-56 h-56 rounded-full object-cover object-top md:rounded-lg md:w-64 md:h-96  lg:w-[400px] lg:h-[500px]'
          alt='myaboutimg'
        />
        <div className='space-y-10 md:px-10'>
          <h4 className='text-2xl lg:text-3xl font-semibold '>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background</h4>
          <h3 className='text-sm md:text-md'>
            {pageInfo?.backgroundInformation}
          </h3>
        </div>
      </motion.div>
    </div>
  )
}

export default About
