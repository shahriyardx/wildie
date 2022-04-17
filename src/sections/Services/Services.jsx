import React from 'react'
import Container from '../../components/Layout/Container'
import useServices from '../../hooks/useServices'
import Service from './Service'

const Services = () => {
  const services = useServices()
  
  return (
    <Container className='py-10'>
      <h1 className='text-5xl text-green-700 mb-10 font-bold  text-center'>Services</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {services.map(service => <Service key={service.id} service={service}></Service>)}
      </div>
    </Container>
  )
}

export default Services