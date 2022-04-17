import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Container from '../components/Layout/Container'
import Page from '../components/Layout/Page'

const Sucecss = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const purchased = location.state?.purchased
    
    if (!purchased) {
      navigate("/")
    } else {
      window.history.replaceState('', null)
    }
  }, [])

  return (
    <Page>
      <Container className='h-[70vh] flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold sm:text-3xl md:text-5xl text-green-500'>Thanks for purchasing</h1>
        <Link className='px-4 py-3 font-semibold bg-green-800 text-green-100 rounded-md mt-5' to="/">Go Home</Link>
      </Container>
    </Page>
  )
}

export default Sucecss