import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Row = (props) => {
  return (
    <div className='flex flex-col gap-5 last:hidden md:last:flex'>
      {props.images.map((image, index) => <LazyLoadImage className='flex-1 object-cover w-full' key={index} src={`/images/projects/${image}`} />)}
    </div>
  )
}

export default Row