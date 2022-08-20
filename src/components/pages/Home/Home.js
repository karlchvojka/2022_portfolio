// Framework Imports
import React from 'react'

// Component Imports
import Header from 'layouts/Header/Header'
import HeroImage from 'layouts/HeroImage/HeroImage'
import Skills from 'layouts/Skills/Skills'
import Projects from 'layouts/Projects/Projects'

// CSS Imports
import StyledHome from './StyledHome'

/**
 * This the Header component.
 */
const Home = () => {
  return (
    <StyledHome>
      <Header />
      <HeroImage />
      <Projects />
      <Skills />
    </StyledHome>
  )
}

export default Home
