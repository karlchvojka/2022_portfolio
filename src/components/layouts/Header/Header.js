// Framework Imports
import React from 'react'

// Asset Imports
import HexaLogo from './assets/hexapixel_logo.jpg'

// CSS Imports
import StyledHeader from './StyledHeader'

/**
 * This the Header component.
 */
const Header = () => {
  return (
    <StyledHeader>
      <img src={HexaLogo} alt="Hexapixel Logo" />
      <nav>
        <a href="/">Home</a>
        <a href="/">Resume</a>
      </nav>
    </StyledHeader>
  )
}

export default Header
