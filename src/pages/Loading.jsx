import React from 'react'

import Container from '../components/Layout/Container'
import Page from '../components/Layout/Page'

const Sucecss = () => {
  return (
    <Page>
      <Container className='h-[70vh] flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold sm:text-3xl md:text-5xl text-green-500'>Loading...</h1>
      </Container>
    </Page>
  )
}

export default Sucecss