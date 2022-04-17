import React from 'react'

const Profile = (props) => {
  console.log(props.user)
  return (
    <div className='w-9 h-9 hidden md:block'>
      <img className='w-full h-full object-cover rounded-full' src={props.user.photoURL} alt="Profile" referrerPolicy='no-referrer' />
    </div>
  )
}

export default Profile