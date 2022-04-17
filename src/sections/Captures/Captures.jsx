import React from 'react'
import Container from '../../components/Layout/Container'
import Row from './Row'

const Captures = () => {
  return (
    <div>
      <Container className='py-10'>
        <h1 className='text-5xl text-green-900 mb-10 font-bold  text-center'>Captures</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
          <Row images={['six.jpg', 'two.jpg', 'three.jpg']} />
          <Row images={['four.jpg', 'five.jpg', 'one.jpg']} />
          <Row images={['seven.jpg', 'eight.jpg', 'nine.jpg']} />
        </div>
      </Container>
    </div>
  )
}

export default Captures