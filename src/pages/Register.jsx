import React, { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
import Container from '../components/Layout/Container'
import Page from '../components/Layout/Page'
import useAuth from '../firebase/useAuth'
import { ImSpinner2 } from 'react-icons/im'

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()
  const [signInWithEmailAndPass, user, loading, autherror] = useCreateUserWithEmailAndPassword(auth)

  const [error, setError] = useState('')

  useEffect(() => {
    if(autherror) {
      const code = autherror.code
      if (code == 'auth/email-already-in-use') {
        return setError('User is already registered. Please login instead')
      }
        
      return setError(code)
    }

    setError('')

  }, [autherror])
  

  const handleSignUp = (e) => {
    e.preventDefault()

    if(email.trim() == "") {
      return setError('Please fill the form correctly')
    }

    signInWithEmailAndPass(email.trim(), password)
  }

  return (
    <Page>
      <Container className='py-20'>
        <h1 className='text-4xl font-bold text-center'>Register</h1>

        <div className='max-w-lg mx-auto'>
          <form onSubmit={handleSignUp}>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xl'>Email</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' className='placeholder:text-transparent invalid:ring-red-500 invalid:border-red-500 border-green-600' required/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xl'>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' className='placeholder:text-transparent invalid:ring-red-500 invalid:border-red-500 border-green-600' required/>
              </div>
            </div>

            <div className='mt-2'>
              <p>Already have an account? <Link className='text-lg text-blue-500' to="/login">Login</Link></p>
            </div>

            <div className='mt-3'>
              <Button type='submit' className='w-full bg-green-500 text-green-100 text-xl font-normal flex items-center justify-center'>
              {loading ? <ImSpinner2 className='animate-spin text-2xl' /> : 'Register'}
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