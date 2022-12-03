import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'


const WorkExperience = ({ experiences }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-lg '>Experience</h3>

        <div className=' h-3/4 w-full mx-auto mt-6 justify-start flex space-x-5 overflow-x-scroll p-10 lg:px-40 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
          {experiences.map(experience => (<ExperienceCard myimg={''} key={experience._id} experience={experience} />))}
          {/* {experiences.map(experience=>(<ExperienceCard myimg={''} key={experience._id} experience={experience}/>))} */}


        </div>
      </motion.div>
    </div>
  )
}

export default WorkExperience