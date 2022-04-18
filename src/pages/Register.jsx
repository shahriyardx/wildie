import React, { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
import Container from '../components/Layout/Container'
import Page from '../components/Layout/Page'
import useAuth from '../firebase/useAuth'
import { ImSpinner2 } from 'react-icons/im'

import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Banner from '../components/Layout/Banner'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  
  const from = location.state?.from?.pathname || '/'

  const auth = useAuth()
  const [signInWithEmailAndPass, user, loading, authError] = useCreateUserWithEmailAndPassword(auth)
  const [updateProfile, updating, update_error] = useUpdateProfile(auth)

  const [error, setError] = useState('')
  

  useEffect(() => {
    if(authError) {
      const code = authError.code
      console.log(authError.code)
      if (code == 'auth/email-already-in-use') {
        return setError('Email is already registered. Please login instead')
      }

      if (code == 'auth/weak-password') {
        return setError('Password is too weak')
      }
 
      return setError('')
    }

    setError('')

  }, [authError])

  const handleSignUp = async (e) => {
    e.preventDefault()

    if(email.trim() == "" || name.trim() == "") {
      return setError('Please fill the form correctly')
    }

    if (password !== confirmPassword) {
      return setError('Password and confirm password must be same')
    }

    await signInWithEmailAndPass(email.trim(), password)
    
    if (!authError && user) {
      await updateProfile({ displayName: name})
      navigate(from)
    }
  }

  return (
    <Page>
      <Banner image="/images/register.jpg" text="Register" />
      <Container className='py-10'>
        <div className='max-w-lg mx-auto'>
          <form onSubmit={async (e) => handleSignUp(e)}>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xl'>Full Name</label>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Name' className='placeholder:text-transparent invalid:ring-red-500 invalid:border-red-500 border-green-600' required/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xl'>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' className='placeholder:text-transparent invalid:ring-red-500 invalid:border-red-500 border-green-600' required/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xl'>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' className='placeholder:text-transparent invalid:ring-red-500 invalid:border-red-500 border-green-600' required/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xl'>Confirm Password</label>
                <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder='Password' className='placeholder:text-transparent invalid:ring-red-500 invalid:border-red-500 border-green-600' required/>
              </div>
            </div>

            <div className='mt-2'>
              <p>Already have an account? <Link className='text-lg text-blue-500' to="/login">Login</Link></p>
            </div>

            <div className='mt-3'>
              <Button type='submit' className='w-full bg-green-500 text-green-100 text-xl font-normal flex items-center justify-center'>
              {loading || updating ? <ImSpinner2 className='animate-spin text-2xl' /> : 'Register'}
              </Button>
            </div>

            <p className='text-red-500 text-lg text-center mt-3'>{error}</p>
          </form>
        </div>
      </Container>
    </Page>
  )
}

export default Register