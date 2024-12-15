import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Contact from './components/Contact'
import GalarySlider from './components/GalarySlider'

function App() {
  return (
    <div>

      <Navbar />

      <Home />
      <GalarySlider/>
      <About />
      <Skill />
      
      <Contact />

    </div>
  )
}

export default App