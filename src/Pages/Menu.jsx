import React from 'react'
import Menuhero from '../Components/MenuPageCompo/Menuhero'
import Title from '../Components/Title'
import Footer from '../Components/Footer'
import MenuIconList from '../Components/MenuPageCompo/MenuIconList'
import MenuItems from '../Components/MenuPageCompo/MenuItems'
import NavBar from '../Components/NavBar'

function Menu() {
  return (
    <>
    <NavBar />
    <Menuhero />
    <Title text='Our Menu' />
    <MenuIconList />
    <MenuItems />
    <Footer />
    
    </>
  )
}

export default Menu