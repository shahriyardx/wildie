import React, { useState } from 'react'
import Button from '../components/Button/Button'
import Container from '../components/Layout/Container'
import Page from '../components/Layout/Page'
import { ImSpinner2 } from 'react-icons/im'

import { Link } from 'react-router-dom'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast';
import useAuth from '../firebase/useAuth'

const Forgot = () => {
  const [email, setEmail] = useState('')
  const auth = useAuth()
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const handleSubmit = async (e) => {
    e.preventDefault()

    await sendPasswordResetEmail(email)
    
    if (error) {
      toast.error("Please check your email")
    } else {
      toast.success("Email sent")
      setEmail("")
    }
  }

  return (
    <Page>
      <Container className='py-10 min-h-[80vh]'>
        <h1 className='text-4xl text-green-700 font-bold text-center mb-5'>Forgot Password</h1>
        <div className='max-w-lg mx-auto'>
          <form onSubmit={async (e) => handleSubmit(e)}>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xl'>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' className='placeholder:text-transparent invalid:ring-red-500 invalid:border-red-500 border-green-600' required/>
              </div>

            <div className='mt-2'>
              <p>Have an account? <Link className='text-lg text-blue-500' to="/login">Login</Link></p>
            </div>

            <div className='mt-3'>
              <Button type='submit' className='w-full bg-green-500 text-green-100 text-xl font-normal flex items-center justify-center'>
              {sending ? <ImSpinner2 className='animate-spin text-2xl' /> : 'Register'}
              </Button>
            </div>
            </div>
          </form>
        </div>
      </Container>
    </Page>
  )
}

export default Forgot
