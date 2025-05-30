import React from 'react'
import HeroSection from './_components/Hero'
import Navbar from './_components/Navbar'
import About from './_components/About'
import Skills from './_components/Skills'
import Project from './_components/Project'
import Footer from './_components/Footer'

const App = () => {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  )
}

export default App