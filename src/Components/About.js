import React from 'react'
import Hero from './Hero'
import Header from './Header'
import AboutUs from './AboutUs'
const About = () => {
  return (
    <div>
      <Header/>
      <Hero
        cName="hero-mid"
        heroImg={require('../assests/5.jpg')}
        title="About"
        btnClass="hide"
        />
        <AboutUs/>
    </div>
  )
}

export default About;
