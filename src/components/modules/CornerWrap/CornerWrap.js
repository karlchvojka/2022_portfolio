// Framework Imports
import React from 'react'

// CSS Imports
import StyledCornerWrap from './StyledCornerWrap'

/**
 * This the CornerWrap component.
 * This is a wrapper component to display a border with a
 * cropped top left corner.
 */
const CornerWrap = ({ children }) => {
  return (
    <StyledCornerWrap>
      <section className="cornerWrapInner">
        {children}
      </section>
    </StyledCornerWrap>
  )
}

export default CornerWrap
