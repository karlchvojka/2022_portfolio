// Framework Imports
import React from 'react'

// Library Imports
import Header from 'modules/Header/Header'

// Component Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'

// CSS Imports
import GlobalFonts from 'src/globalAssets/fonts/fonts'
import StyledApp from './StyledApp'

const App = () => {
  return (
    <StyledApp>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <h1>Welcome to React App thats build using Webpack and Babel separately</h1>
      <h2>This is stuff</h2>
    </StyledApp>
  )
}

export default App
