import React from 'react'
import HeroHome from '../../components/Home/HeroHome'
import AchievementsSection from '../../components/Home/Achievement'
import FeatureMain from '../../components/Home/FeatureMain'
import ServiesHome from '../../components/Home/Servies'
import AboutSection from '../../components/Home/AboutUs'
import TeamSection from '../../components/Home/TeamSection'
import Projects from '../../components/Home/Projects'
const HomeMain = () => {
  return (
    <div>
      <HeroHome/>
      <AchievementsSection/>
      <AboutSection/>
      <FeatureMain/>
      <ServiesHome/>
      <TeamSection/>
      <Projects/>
     
    </div>
  )
}

export default HomeMain
