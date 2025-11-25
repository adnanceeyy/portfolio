import React from 'react'
import Home from './pages/home'
import Nav from './components/nav'

export default function App() {
  return (
    <div className='relative overflow-x-hidden w-full h-screen bg-black'>
      <Nav />
      <Home />
    </div>
  )
}
