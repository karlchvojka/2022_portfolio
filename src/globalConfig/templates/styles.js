// Library Imports
import { createGlobalStyle } from 'styled-components'
import media from 'globalConfig/mobile'

const GlobalStyle = createGlobalStyle`

/* MOBILE FIRST DEFAULT STYLES */

/* Min width of 576 */
  ${media.landscapePhones `
    
  `}

/* Min width of 768 */
  ${media.tablet `
    
  `}

/* Min width of 1024 */
  ${media.desktop `
    
  `}

/* Min width of 1200 */
  ${media.widescreen `
    
  `}

/* Min width of 1980 */
  ${media.udh `
    
  `}

`