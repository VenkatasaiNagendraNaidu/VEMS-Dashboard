import React from 'react'
import Navbar from './NavBar/NavBar'
import Slidebar from "./Main/Slidebar"
import HeroSection from './HeroSection/HeroSection '
import ThreeCards from './ThreeCards/ThreeCards'
import GenesisSection from './GenesisSection/GenesisSection'
import EmployeeTransportService from './EmployeeTransportService/EmployeeTransportService'
import TopFeatures from './TopFeatures/TopFeatures'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ThreeCards/>
      <Slidebar/>
      <GenesisSection/>
      <EmployeeTransportService/>
      <TopFeatures/>
      <Footer />
    </div>
  )
}

export default Home
