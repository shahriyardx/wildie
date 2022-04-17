import React from 'react'

const Profile = ({ user }) => {
  const { photoURL, displayName } = user

  return (
    <div className='hidden md:flex items-center gap-2 bg-green-300 p-1 rounded-full'>
      {displayName && <span className='font-bold text-lg pl-3'>{displayName}</span>}
      <img className='w-9 h-9 object-cover rounded-full' src={photoURL || '/images/user.png'} alt="Profile" referrerPolicy='no-referrer' />
    </div>
  )
}

export default Profile