import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Banner = (props) => {
  return (
    <div className='w-full h-40 sm:h-64 md:h-96 relative'>
      <LazyLoadImage src={props.image} className='w-full h-full object-cover brightness-75' />
      <div className='w-full h-full absolute inset-0 flex items-center justify-center'>
        <h1 className='text-4xl font-bold bg-black text-white px-4 py-2'>{props.text}</h1>
      </div>
    </div>
  )
}

export default Banner