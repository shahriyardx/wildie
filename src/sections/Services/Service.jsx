import React from 'react'
import Button from '../../components/Button/Button'
import { BiCheck } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Service = ({ service }) => {
  const { id, name, description, features, price, icon} = service
  const navigate = useNavigate()

  return (
    <div className='p-4 bg-green-700 rounded-md relative sm:last:col-span-2 md:last:col-span-1'>
      <span className='absolute top-5 right-5 text-5xl'>{icon}</span>
      <h1 className='text-5xl font-bold text-pink-100 mb-2'>{name}<span className='ml-2 text-yellow-200 text-lg'>${price}</span></h1>
      <p className='text-green-200 mb-5'>{description}</p>

      <ul>
        {features.map((feature, index) => <li className='font-semibold text-green-300 flex  gap-1 items-center -ml-1' key={index}><BiCheck className='text-2xl' />{feature}</li>)}
      </ul>

      <Button onClick={() => navigate(`/checkout/${id}`)} className='w-full bg-green-800 hover:bg-green-900 mt-5 text-green-100 rounded-xl'>Order Now</Button>
    </div>
  )
}

export default Service