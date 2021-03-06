import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Layout/Container'

const Banner = () => {
  return (
    <div className='w-full py-10 md:py-0 md:h-[500px] relative bg-green-400'>
      <Container className='grid grid-cols-1 md:grid-cols-2 h-full'>
        <div className='h-full flex flex-col justify-center items-center md:items-start'>
          <h1 className='text-6xl font-bold text-green-800'>WiLDiE</h1>
          <p className='text-xl text-green-100 mt-2 text-center md:text-left'>
            Capture professional wild life photos to make your moments better. Want yours photos to stand out? Don't hesitate to contact us.
          </p>
          <div className='mt-2'>
            <Link to="/about" className='block text-base px-4 py-3 font-semibold bg-green-800 hover:bg-green-900 uppercase text-green-50 rounded-lg'>About Me</Link>
          </div>
        </div>

        <div className='pt-5 overflow-hidden justify-end hidden md:flex'>
          <img className='h-[500px]' src="/images/person.png" alt="Person" />
        </div>
      </Container>
    </div>
  )
}

export default Banner