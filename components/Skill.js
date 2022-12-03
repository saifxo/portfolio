import React from 'react'
import {motion} from 'framer-motion'
import { urlFor } from '../sanity';

const Skill = ({directionLeft,skill}) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            opacity:0
        }}
        transition={{duration:1}}
        whileInView={{opacity:1}}
        src={urlFor(skill?.image).url()}
        className='rounded-full border border-gray-500 object-cover w-20 h-20  filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-26 md:h-26  rounded-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black  opacity-100'>{skill?.progress}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill