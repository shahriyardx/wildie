import React from 'react'
import Container from '../../components/Layout/Container'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../../components/Button/Button';

const Footer = () => {
  return (
    <div className='bg-black'>
      <Container className='py-10 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-5'>
        <div className='col-span-1 sm:col-span-2 text-center md:text-left'>
          <div className='flex justify-center md:justify-start'>
            <LazyLoadImage src="/images/logo.png" alt="" />
          </div>
          <p className='text-zinc-400'>Capture professional wild life photos to make your moments better. Want yours photos to stand out? Don't hesitate to contact us.</p>
        </div>

        <div className='text-center sm:text-left'>
          <h2 className='text-green-600 text-2xl font-bold'>Links</h2>
          <ul>
            <li className='text-green-200'>
              Home
            </li>

            <li className='text-green-200'>
              About
            </li>

            <li className='text-green-200'>
              Contact Us
            </li>
          </ul>
        </div>

        <div className='text-center sm:text-left'>
          <h2 className='text-green-600 text-2xl font-bold'>Newsletter</h2>
          <form onSubmit={e => e.preventDefault()}>
            <div className='flex w-full mt-2'>
                <input className='w-full px-3' type="email" placeholder='Email' />
                <Button className='bg-green-300'>Subscribe</Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default Footer