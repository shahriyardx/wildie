import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './firebase/RequireAuth'
import About from './pages/About'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Sucecss from './pages/Sucecss'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/checkout/:serviceId" element={<RequireAuth><Checkout /></RequireAuth>} />
      <Route path="/success" element={<Sucecss />} />
    </Routes>
  )
}

export default App
