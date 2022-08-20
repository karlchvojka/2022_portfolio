// Library Imports
import { css } from 'styled-components'

const sizes = {
  udh: 1980,
  widescreen: 1200,
  desktop: 1024,
  tablet: 768,
  landscapePhones: 576
}

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css `
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})