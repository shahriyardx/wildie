import React from 'react'
import Header from '../Header/Header'
import Container from './Container'

const Main = (props) => {
  return (
    <div>
        <Header />
        <Container>
            {props.children}
        </Container>
    </div>
  )
}

export default Main