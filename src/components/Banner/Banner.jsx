import React from 'react'
import Container from '../Layout/Container'

const Banner = () => {
  return (
    <div className='w-full h-[500px] relative bg-green-400'>
      <Container className='grid grid-cols-2 h-full'>
        <div className='h-full flex flex-col justify-center'>
          <h1 className='text-6xl uppercase font-bold text-green-800'>Wildie</h1>
          <p className='text-xl text-green-100 mt-2'>
            Capture professional wild life photos to make your moments better. Want yours photos to stand out? Don't hesitate to contact us.
          </p>
        </div>

        <div className='pt-5 overflow-hidden flex justify-end'>
          <img className='h-[500px]' src="/images/person.png" alt="Person" />
        </div>
      </Container>
    </div>
  )
}

export default Banner