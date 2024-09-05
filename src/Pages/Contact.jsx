import React from 'react'
import ContactHero from '../Components/ContactPageComponents/ContactHero'
import Title from '../Components/Title'
import ContactForm from '../Components/ContactPageComponents/ContactForm'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Hireme from '../Components/Hireme'

function Contact() {
  return (
    <>
    <NavBar />
    <ContactHero />
    <Title text="Contact Us"/>
    <Hireme />
    <Footer />
    </>
  )
}

export default Contact