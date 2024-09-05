import React from 'react'
import AboutHero from '../Components/AboutPageComponent/AboutHero'
import Title from '../Components/Title'
import AboutContent from '../Components/AboutPageComponent/AboutContent'
import Footer from '../Components/Footer'
import AboutContent2 from '../Components/AboutPageComponent/AboutContent2'
import NavBar from '../Components/NavBar'

function About() {
  return (
    <>
    <NavBar />
    <AboutHero />
    <Title text="About Us"/>
    <AboutContent />
    <AboutContent2 />
    
    <Footer />
    
    
    </>
  )
}

export default About