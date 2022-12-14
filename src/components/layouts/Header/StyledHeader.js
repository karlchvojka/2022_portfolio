// Library Imports
import styled from 'styled-components'
import media from 'globalConfig/mobile'

// Variable Imports
import { black, cyberBlue, white } from 'globalConfig/css_vars'

const StyledHeader = styled.header`
  /* MOBILE FIRST DEFAULT STYLES */

  background-color: ${white};
  display: grid;
  grid-template-columns: 35px 130px;
  justify-content: space-between;
  padding: 10px;
  width: calc(100% - 20px);

  img {
    width: 35px;
  }

  nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 130px;

    a:link, a:visited {
      color: ${black};
      font-family: 'MontserratBold', sans-serif;
      font-weight: 800;
      text-transform: uppercase;
    }

    a:hover, a:active {
      color: ${cyberBlue};
    }
  }

  /* Min width of 768 */
    ${media.tablet `
      grid-template-columns: 35px 150px;

      nav {
        grid-template-columns: 42% 58%;
        column-gap: 10px;
      }
    `}
`

export default StyledHeader
