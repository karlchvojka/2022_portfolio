// Framework Imports
import React from 'react'

// Library Imports
import Header from 'modules/Header/Header'

// CSS Imports
import GlobalFonts from 'src/globalAssets/fonts/fonts'
import StyledApp from './StyledApp'

const App = () => {
  return (
    <StyledApp>
      <GlobalFonts />
      <Header />
      <h1>Welcome to React App thats build using Webpack and Babel separately</h1>
    </StyledApp>
  )
}

export default App
