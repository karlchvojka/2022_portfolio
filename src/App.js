// Framework Imports
import React from 'react'

// Library Imports
import Header from 'modules/Header/Header'

// Component Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import HeroImage from 'modules/HeroImage/HeroImage'
import Skills from 'layouts/Skills/Skills'

// CSS Imports
import GlobalFonts from 'src/globalAssets/fonts/fonts'
import StyledApp from './StyledApp'

const App = () => {
  return (
    <StyledApp>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <HeroImage />
      <Skills />
    </StyledApp>
  )
}

export default App
