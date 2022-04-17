import React from 'react'
import Button from '../components/Button/Button'
import Container from '../components/Layout/Container'
import Page from '../components/Layout/Page'
import useAuth from '../firebase/useAuth'

import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Login = () => {
  const auth = useAuth()

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  
  const handleGoogleLogin = () => {
    signInWithGoogle()
  }


  return (
    <Page>
      <Container className='py-20'>
        <h1 className='text-4xl font-bold text-center'>Login</h1>

        <div className='max-w-lg mx-auto'>
          <form>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xl'>Email</label>
                <input type="email" placeholder='Email' className='placeholder:text-transparent' required/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className='text-xl'>Password</label>
                <input type="password" className='placeholder:text-transparent' required/>
              </div>
            </div>

            <div className='mt-2'>
              <p>Dont have an account? <Link className='text-lg text-blue-500' to="/register">Register</Link></p>
            </div>

            <div className='grid grid-cols-2 gap-2 mt-3'>
              <Button type='submit' className='bg-green-500 text-green-100 text-xl font-normal'>Login</Button>
              <Button onClick={handleGoogleLogin} className='bg-black flex gap-2 items-center text-white justify-center text-xl font-normal'><FcGoogle className='text-2xl' /> Google</Button>
            </div>
          </form>
        </div>
      </Container>
    </Page>
  )
}

export default Login