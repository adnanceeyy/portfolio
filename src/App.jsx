import React from 'react'
import Home from './pages/home'
import Nav from './components/nav'
import About from './pages/about'
import InfiniteMenu from './components/InfiniteMenu'
import Project from './pages/project'

export default function App() {
  return (
    <div className='relative overflow-x-hidden w-full h-screen bg-black'>
      <Nav />
      <Home />
      <About />
      <Project/>
    </div>
  )
}
