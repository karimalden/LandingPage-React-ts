import React from 'react'
import TopBar from '../../Layout/Ui/TopBar'
import HeroSection from '../../Components/Home/HeroSection'
import PowerfulFeatures from '../../Components/Home/PowerfulFeatures'
import AboutUs from '../../Components/Home/AboutUs'
import Footer from '../../Layout/app/Footer'
import CursorBlob from '../../Components/Home/CurserBlob'
import FloatNav from '../../Layout/Ui/FloatNav'
import FloatOption from '../../Layout/Ui/FloatOption'
import Questions from '../../Components/Home/Questions'
import Contact from '../../Components/Home/Contact'

const Page = () => {
  return (
    <div className='Home_Page'>
      <CursorBlob />
      <FloatNav />
      <FloatOption />
      <TopBar />
      <HeroSection />
      <PowerfulFeatures />
      
      <AboutUs />
      <Questions />
      <Contact/>
      <Footer />


    </div>
  )
}

export default Page