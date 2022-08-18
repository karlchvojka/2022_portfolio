// Framework Imports
import React from 'react'

// Library Imports
import { Routes, Route, Link } from "react-router-dom";

// Component Imports
import Home from 'pages/Home/Home'

// CSS Imports
import GlobalStyle from 'src/globalConfig/GlobalStyles'
import GlobalFonts from 'src/globalAssets/fonts/fonts'
import StyledApp from './StyledApp'

const App = () => {
  return (
    <StyledApp>
      <GlobalFonts />
      <GlobalStyle />
      <Home/>
    </StyledApp>
  )
}

export default App
