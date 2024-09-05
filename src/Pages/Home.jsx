import React from 'react'
import HeroSection from '../Components/HeroSection'
import Slider from '../Components/Slider'
import Title from '../Components/Title'
import Trending from '../Components/Trending'
import BannerToMenu from '../Components/BannerToMenu'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'



function Home() {


  return (
     <>
     
      <NavBar />
      <HeroSection />
      <Title text="Tasty Promotions"/>
      <Slider />
      <Title text="Popular Picks"/>
      <Trending />
      <BannerToMenu />
      <Footer />
     </>
  )
}

export default Home