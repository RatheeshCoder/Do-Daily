import React from 'react'
import AboutHero from '../../components/AboutsUs/AboutHero'
import AboutUs from '../../components/AboutsUs/Banner'
import AboutSteps from '../../components/AboutsUs/AboutSteps'
import ImgSlider from '../../components/AboutsUs/Slider'

const AboutMain = () => {
  return (
   <main>
    <AboutHero/>
    <AboutUs/>
    <AboutSteps/>
    <ImgSlider/>
   </main>
  )
}

export default AboutMain
