import React from 'react'
import Banner from '../sections/Banner/Banner'
import Main from '../components/Layout/Main'
import Services from '../sections/Services/Services'
import Captures from '../sections/Captures/Captures'

const Home = () => {
  return (
    <Main>
      <Banner />
      <Services />
      <Captures />
    </Main>
  )
}

export default Home