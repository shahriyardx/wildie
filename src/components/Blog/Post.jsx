import React from 'react'

const Post = ({ post }) => {
  return (
    <div className='p-4 bg-green-400 rounded-md'>
      <h1 className='text-lg sm:text-xl font-bold mb-2'>{post.title}</h1>
      <p className='text-sm sm:text-base'>{post.description}</p>
    </div>
  )
}

export default Post