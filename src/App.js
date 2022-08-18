// Framework Imports
import React from 'react'

// Component Imports
import Header from 'layouts/Header/Header'
import HeroImage from 'layouts/HeroImage/HeroImage'
import Skills from 'layouts/Skills/Skills'
import Projects from 'layouts/Projects/Projects'

// CSS Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import GlobalFonts from 'src/globalAssets/fonts/fonts'
import StyledApp from './StyledApp'

const App = () => {
  return (
    <StyledApp>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <HeroImage />
      <Projects />
      <Skills />
    </StyledApp>
  )
}

export default App
