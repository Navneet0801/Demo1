// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import About from './Components/About'
import Works from './Components/Works'
import FAQ from './Components/FAQ'
import Icons from './Components/Icons'
import Help from './Components/Help'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
      <Works />
      <FAQ />
      <Icons />
      <Help />
      <Footer />
    </div>
  )
}

export default App