import React from 'react'
import HeroHome from '../../components/Home/HeroHome'
import AchievementsSection from '../../components/Home/Achievement'
import FeatureMain from '../../components/Home/FeatureMain'
import ServiesHome from '../../components/Home/Servies'
import AboutSection from '../../components/Home/AboutUs'
const HomeMain = () => {
  return (
    <div>
      <HeroHome/>
      <AchievementsSection/>
      <AboutSection/>
      <FeatureMain/>
      <ServiesHome/>
     
    </div>
  )
}

export default HomeMain
