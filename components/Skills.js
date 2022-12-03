import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

const Skills = ({ skills }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
        className=' flex relative flex-col text-center md:text-left lg:flex-row max-w-[2000px] lg:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-lg '>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[1px] lg:tracking-[3px] text-gray-500 text-sm'>Hover/Tap over a skill for current profieciency</h3>
        <div className='absolute top:55 lg:top-48'>
          <div className='grid grid-cols-4 gap-3'>

            {skills?.slice(0, skills.length / 2).map(skill => (
              <Skill key={skill._id} skill={skill} />
            ))}

            {skills?.slice(skills.length / 2, skills.length).map(skill => (
              <Skill key={skill._id} skill={skill} directionLeft />
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  )
}

export default Skills