import React, { useState } from 'react'
import Container from '../Layout/Container'
import CustomLink from './CustomLink'
import { BiMenu, BiX } from 'react-icons/bi'

const Header = () => {
  const [show, setShow] = useState(false)
  const Icon = show ? BiX : BiMenu

  return (
    <div>
        <Container className='h-16 flex items-center relative'>
            <div>
                <img src="/images/logo.png" alt="Wildie Logo" />
            </div>

            <div 
              className={`flex flex-col md:gap-4 md:flex-row ml-auto absolute 
                          md:static top-16 left-0 z-50 bg-green-900 md:bg-transparent 
                          w-full md:w-auto ${show ? '' : 'hidden md:flex'}`
            }>
                <CustomLink className='w-full py-2 px-3 md:px-0 md:py-0 md:w-auto' to="/">Home</CustomLink>
                <CustomLink className='w-full py-2 px-3 md:px-0 md:py-0 md:w-auto' to="/about">About</CustomLink>
                <CustomLink className='w-full py-2 px-3 md:px-0 md:py-0 md:w-auto' to="/contact">Conact Us</CustomLink>
            </div>

            <div className='ml-auto md:hidden' onClick={() => setShow(!show)}>
              <Icon className='text-3xl text-green-900' />
            </div>
        </Container>
    </div>
  )
}

export default Header