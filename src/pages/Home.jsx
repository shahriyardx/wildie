import React from 'react'
import Banner from '../sections/Banner/Banner'
import Main from '../components/Layout/Main'
import Services from '../sections/Services/Services'

const Home = () => {
  return (
    <Main>
      <Banner />
      <Services />
    </Main>
  )
}

export default Home