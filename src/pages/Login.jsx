import React, { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
import Container from '../components/Layout/Container'
import Page from '../components/Layout/Page'
import useAuth from '../firebase/useAuth'
import { ImSpinner2 } from 'react-icons/im'

import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = useAuth()
  const [signInWithGoogle, g_user, g_loading, g_error] = useSignInWithGoogle(auth)
  const [signInWithEmailAndPass, e_user, e_loading, e_error] = useSignInWithEmailAndPassword(auth)

  const [error, setError] = useState('')

  useEffect(() => {
    if(g_error) {
      const gcode = g_error.code
      if (gcode == 'auth/popup-closed-by-user') {
        return setError("Something wrog")
      }
        
      return setError(gcode)
    }
    
    if(e_error) {
      const ecode = e_error.code
      if (ecode == 'auth/popup-closed-by-user') {
        return setError("Something wrog")
      }
      
      if (ecode == 'auth/user-not-found') {
        return setError("User is not registered")
      }
    }

    setError('')

  }, [g_error, e_error])
  
  const handleGoogleLogin = () => {
    signInWithGoogle()
  }

  const handleSignInWithEmailPass = (e) => {
    e.preventDefault()

    if(email.trim() == "") {
      return setError('Please fill the form correctly')
    }

    signInWithEmailAndPass(email.trim(), password)
  }

  return (
    <Page>
      <Container className='py-20'>
        <h1 className='text-4xl font-bold text-center'>Login</h1>

        <div className='max-w-lg mx-auto'>
          <form onSubmit={handleSignInWithEmailPass}>
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
              <p>Dont have an account? <Link className='text-lg text-blue-500' to="/register">Register</Link></p>
            </div>

            <div className='grid grid-cols-2 gap-2 mt-3'>
              <Button type='submit' className='bg-green-500 text-green-100 text-xl font-normal flex items-center justify-center'>
              {e_loading ? <ImSpinner2 className='animate-spin text-2xl' /> : 'Login'}
              </Button>
              <Button onClick={handleGoogleLogin} className='bg-black text-white text-xl font-normal flex gap-2 justify-center items-center'>
                {g_loading ? <ImSpinner2 className='animate-spin text-2xl' /> : <><FcGoogle className='text-2xl' /> Google</>}
              </Button>
            </div>

            <p className='text-red-500 text-lg text-center mt-3'>{error}</p>
          </form>
        </div>
      </Container>
    </Page>
  )
}

export default Login