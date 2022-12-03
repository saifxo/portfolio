import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../sanity'

const ExperienceCard = ({ experience }) => {
    return (
        <div>
            <article className='flex flex-col rounded-lg max-h-fit items-center space-y-7 flex-shrink-0 w-[400px] md:w-[420px] lg:w-[450px] snap-center bg-[#292929] p-10  md:opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden '>
                <motion.img
                    initial={{ y: -100, opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='w-24 h-24 rounded-full  object-cover object-center'
                    src={urlFor(experience?.companyImage).url()}
                    alt="workexpimglogo"
                />
                <div className='px-0 md:px-10'>
                    <h4 className='text-3xl font-light'>{experience?.company}</h4>
                    <h3 className='font-bold text-lg mt-1'>{experience?.jobTitle}</h3>
                    <div className='flex space-x-2 my-2'>
                        {experience.technologies.map(technology => (<img key={technology._id} src={urlFor(technology.image).url()} className='h-8 w-8 rounded-full' />))}
                    </div>
                    <h3 className='uppercase py-5 text-gray-500'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}</h3>
                    <ul className='list-disc space-y-4 ml-5 text-lg max-h-40 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                        {experience.points.map((point, i) => (<li key={i}>{point}</li>))}

                    </ul>
                </div>

            </article>
        </div>
    )
}

export default ExperienceCard