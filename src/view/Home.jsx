import React from 'react'
import Hero from '../components/Hero'
import OurPartners from '../components/OurPartners'
import SatisfiedClients from '../components/ SatisfiedClients'
import Marketing from '../components/Marketing'
import OutSmartInput from '../components/OutSmartInput'
import PartnersGrowth from '../components/PartnersGrowth'
import PowerGrow from '../components/PowerGrow'
import FromUs from '../components/FromUs'
import MultiChannel from '../components/MultiChannel'
import Footer from '../common/Footer'
import HitGoals from '../components/HitGoals'

const Home = () => {
  return (
    <div>
      <Hero />
      <OurPartners />
      <SatisfiedClients />
      <Marketing />
      <OutSmartInput />
      <PartnersGrowth />
      <PowerGrow />
      <FromUs />
      <MultiChannel />
      <HitGoals />
      <Footer />
    </div>
  )
}

export default Home