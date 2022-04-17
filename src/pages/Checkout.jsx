import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate, useParams, Navigate } from 'react-router-dom'
import Button from '../components/Button/Button'
import Container from '../components/Layout/Container'
import Page from '../components/Layout/Page'
import useAuth from '../firebase/useAuth'
import useServices from '../hooks/useServices'

const Checkout = () => {
  const services = useServices()
  const { serviceId }= useParams()
  const [service, setService] = useState({})
  const navigate = useNavigate()
  const auth = useAuth()
  const [user, loading] = useAuthState(auth)
  const [checkout, setCheckout] = useState(null)
  
  useEffect(() => {
    if(services.length >= 1) {
      const selectedService = services.find(item => item.id == serviceId)

      if (!selectedService) {
        navigate("/")
      }
      setService(selectedService)
    }
  }, [services])

  const handleCheckout = () => {
    setCheckout('loading')

    setTimeout(() => {
      navigate("/success", {state: {purchased: true}, replace: true} )
    }, 3000)
  }

  return (
    <Page>
      <Container className='py-20'>
        <h1 className='text-3xl font-bold text-green-800 text-center'>Checkout</h1>

        {service !== undefined && (<div className='mt-5'>
          <h2 className='text-3xl text-green-700 font-bold mt-5'>Information</h2>
          <p className='text-xl font-bold text-black'>Product : <span className='text-green-600'>{service.name}</span> {service.icon}</p>
          <p className='text-xl font-bold text-black'>Price : <span className='text-green-600'>{service.price}</span></p>
          <p className='text-xl font-bold text-black'>Description :<span className='text-green-600'>{service.description}</span></p>
          
          <h2 className='text-3xl text-green-700 font-bold mt-5'>Features</h2>
          <ul>
            {service.features?.map((feature, index) => <li className='text-xl text-green-600 font-semibold' key={index}>{feature}</li>)}
          </ul>

          <h2 className='text-3xl text-green-700 font-bold mt-5'>Billing Info</h2>
          <p className='text-xl font-bold text-black flex gap-2'>Username : <span className='text-green-600'>{user.displayName || <span className='text-zinc-600'>Not Set</span>}</span></p>
          <p className='text-xl font-bold text-black'>Email : <span className='text-green-600'>{user.email}</span></p>

          <Button onClick={handleCheckout} className='bg-green-800 text-green-100 rounded-md mt-10'>{checkout == 'loading' ? 'Please Wait...' : 'Checkout'}</Button>
        </div>)}
      </Container>
    </Page>
  )
}

export default Checkout