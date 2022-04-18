import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Layout/Container'
import Page from '../components/Layout/Page'

const Error404 = () => {
  return (
    <Page>
      <Container className='h-[70vh] flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold sm:text-6xl md:text-8xl text-red-500'>404</h1>
        <p className='text-zinc-400'>Page not found</p>
        <Link className='px-4 py-3 font-semibold bg-green-800 text-green-100 rounded-md mt-5' to="/">Go Home</Link>
      </Container>
    </Page>
  )
}

export default Error404