import React from 'react'
import Container from '../Layout/Container'
import CustomLink from './CustomLink'

const Header = () => {
  return (
    <div>
        <Container className='py-3 flex items-center'>
            <div>
                <img src="/images/logo.png" alt="Wildie Logo" />
            </div>

            <div className='flex gap-4'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Conact Us</CustomLink>
            </div>
        </Container>
    </div>
  )
}

export default Header