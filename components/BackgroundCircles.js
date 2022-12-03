import React from 'react'
import { motion } from 'framer-motion'

const BackgroundCircles = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ['20%', '20%', '50%', '80%', '20%']
        }}
        transition={{ duration: 2.5 }}


        className='relative flex justify-center items-center'>
        <div className='absolute border border-[#3f3e3e] rounded-full h-[200px] w-[200px] mt-64 animate-ping' />
        <div className='absolute border border-[#3f3e3e] rounded-full h-[300px] w-[300px] mt-64 animate-ping' />
        <div className='absolute border border-[#3f3e3e] rounded-full h-[500px] w-[500px] mt-64 animate-ping' />

        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-64 animate-pulse absolute' />
        <div />
      </motion.div>
    </div>
  )
}

export default BackgroundCircles


//mt-52 ===>>> 72   #333333