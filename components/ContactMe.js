import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

const ContactMe = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    window.location.href = `mailto:saifii.7243@gmail.com?subject=${data.subject}&body=Hi, My name is ${data.name}. ${data.message} (${data.email})`
  };

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10  items-center justify-evenly mx-auto'>
      <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-lg '>Contact</h3>

      <div className='flex flex-col space-y-10  lg:mt-5'>
        <h4 className='text-2xl lg:text-3xl font-semibold text-center'>
          I have got just what you need.{''}
          <span className='decoration-[#F7AB0A]/50 flex items-center justify-center underline'>Lets Talk.</span>
        </h4>
        <div className='flex flex-col lg:flex-row space-y-7 lg:space-y-0 lg:space-x-20 justify-center items-center lg:items-start lg:mt-20'>
          <div className='space-y-4 '>
            <div className='flex items-center space-x-4 justify-center'>
              <PhoneIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
              <h3 className='text-lg'>+923351536604</h3>
            </div>

            <div className='flex items-center space-x-4 justify-center'>
              <EnvelopeIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
              <h3 className='text-lg'>saifii.7243@gmail.com</h3>
            </div>

            <div className='flex items-center space-x-4 justify-center'>
              <MapPinIcon className='text-[#F7AB0A] h-5 w-5 animate-pulse' />
              <h3 className='text-lg'>Rawalpindi, Pakistan</h3>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full mx-auto'>
            <div className='flex  flex-col lg:flex-row w-full space-y-2 lg:space-y-0 lg:space-x-2'>
              <input {...register('name')} placeholder='Name' className='contactInput' type='text' />
              <input {...register('email')} placeholder='Email' className='contactInput ' type='email' />
            </div>
            <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />
            <textarea {...register('message')} placeholder='Message' className='contactInput' />
            <div>
              <button type='submit' className='bg-[#F7AB0A] w-fit lg:w-full mt-5 text-center mx-auto py-4 px-10 rounded-md text-lg text-black font-bold'>Submit</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ContactMe