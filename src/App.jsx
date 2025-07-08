import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='font-[poppins]'>
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
