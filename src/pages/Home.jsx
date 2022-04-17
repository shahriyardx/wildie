import React from 'react'
import Banner from '../sections/Banner/Banner'
import Page from '../components/Layout/Page'
import Services from '../sections/Services/Services'
import Captures from '../sections/Captures/Captures'

const Home = () => {
  return (
    <Page>
      <Banner />
      <Services />
      <Captures />
    </Page>
  )
}

export default Home