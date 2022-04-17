import React from 'react'
import Footer from '../../sections/Footer/Footer'
import Header from '../Header/Header'

const Page = (props) => {
  return (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
  )
}

export default Page