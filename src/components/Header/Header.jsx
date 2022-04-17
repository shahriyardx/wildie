import React, { useState } from 'react'
import Container from '../Layout/Container'
import CustomLink from './CustomLink'
import { BiMenu, BiX } from 'react-icons/bi'
import Profile from '../Profile/Profile'
import useAuth from '../../firebase/useAuth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

const Header = () => {
  const [show, setShow] = useState(false)
  const Icon = show ? BiX : BiMenu

  const auth = useAuth()
  const [user, loading, error] = useAuthState(auth);

  return (
    <div>
        <Container className='h-16 flex items-center relative'>
            <div>
                <img src="/images/logo.png" alt="Wildie Logo" />
            </div>

            <div 
              className={`flex flex-col items-center md:gap-4 md:flex-row ml-auto absolute 
                md:static top-16 left-0 z-50 bg-green-900 md:bg-transparent 
                w-full md:w-auto ${show ? '' : 'hidden md:flex'}`
            }>
                <CustomLink className='w-full py-2 px-3 md:px-0 md:py-0 md:w-auto' to="/">Home</CustomLink>
                <CustomLink className='w-full py-2 px-3 md:px-0 md:py-0 md:w-auto' to="/about">About</CustomLink>
                {user 
                  ? <button onClick={() => signOut(auth)} className='text-red-500 font-bold text-xl w-full text-left py-2 px-3 md:px-0 md:py-0 md:w-auto'>Logout</button>
                  : <CustomLink className='w-full py-2 px-3 md:px-0 md:py-0 md:w-auto' to="/login">Login</CustomLink>
                }

                {user ? <Profile user={user} /> : null}
            </div>

            <div className='ml-auto md:hidden' onClick={() => setShow(!show)}>
              <Icon className='text-3xl text-green-900' />
            </div>
        </Container>
    </div>
  )
}

export default Header