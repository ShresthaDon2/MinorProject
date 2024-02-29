import React from 'react'
import Header from './Header'
import Hero from './Hero'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <div>
     <Header/>
      <Hero
        cName="hero-mid"
        heroImg={require('../assests/5.jpg')}
        title="Contact Us"
        btnClass="hide"
        />
        <ContactForm/>
    </div>
  )
}

export default Contact
