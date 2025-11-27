import React, { useEffect, useRef, useState } from 'react'
import Home from './pages/home'
import Nav from './components/nav'
import About from './pages/about'
import Project from './pages/project'

export default function App() {
  const containerRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()
      if (isScrolling) return

      setIsScrolling(true)
      const delta = e.deltaY
      const scrollAmount = window.innerHeight

      if (delta > 0) {
        // scroll down
        window.scrollBy({ top: scrollAmount, behavior: 'smooth' })
      } else {
        // scroll up
        window.scrollBy({ top: -scrollAmount, behavior: 'smooth' })
      }

      setTimeout(() => setIsScrolling(false), 600)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => window.removeEventListener('wheel', handleWheel)
  }, [isScrolling])

  return (
    <div ref={containerRef} className="relative w-full bg-black">
      <Nav />
      <div className="h-screen">
        <Home />
      </div>
      <div className="h-screen">
        <About />
      </div>
      <div className="h-screen">
        <Project />
      </div>
    </div>
  )
}
