import React from 'react'
import Header from './Header'
import Hero from './Hero'
const Service = () => {
  return (
    <div>
      <Header/>
      <Hero
        cName="hero-mid"
        heroImg={require('../assests/4.jpg')}
        title="Services"
        btnClass="hide"
        />
    </div>
  )
}

export default Service
