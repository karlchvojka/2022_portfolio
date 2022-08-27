// Library Imports
import { createGlobalStyle } from 'styled-components'
import media from 'globalConfig/mobile'

// Variable Imports
import { cyberBlue, link, white } from './css_vars'

const GlobalStyle = createGlobalStyle`
  /* Font Family Declarations */
  /*
    START OF RESET
    http://meyerweb.com/eric/tools/css/reset/
     v5.0.1 | 20191019
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  /* END OF RESET */

  /* MOBILE FIRST DEFAULT STYLES */

  body {
    background-color: ${white};
  }

  h1 {
    color: ${cyberBlue};
    font-family: 'MontserratBold', sans-serif;
    font-size:21px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  h2 {
    color: ${cyberBlue};
    font-family: 'MontserratBold', sans-serif;
    font-size:18px;
    margin-bottom: 20px;
    margin-top: 20px;
    text-transform: uppercase;
  }

  h3 {
    color: ${cyberBlue};
    font-family: 'MontserratBold', sans-serif;
    font-size:16px;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  h4 {
    color: ${cyberBlue};
    font-family: 'Montserrat', sans-serif;
    font-size:15px;
    font-weight: 700;
    margin-bottom:20px;
    text-transform: uppercase;
  }

  h5 {
    color: ${cyberBlue};
    font-family: 'Montserrat', sans-serif;
    font-size:15px;
    text-transform: uppercase;
  }

  h6 {
    color: ${cyberBlue};
    font-family: 'Montserrat', sans-serif;
    font-size:15px;
    text-transform: uppercase;
  }

  p {
    color: ${cyberBlue};
    font-family: 'Montserrat', sans-serif;
    font-size:14px;
    line-height:18px;
    margin-bottom:10px;
  }

  a:link, a:visited {
    color: ${link};
    font-family: 'Montserrat', sans-serif;
    font-size:14px;
    text-decoration: none;
  }

  a:hover {
    color: ${cyberBlue};
  }

  /* Min width of 576 */
  ${media.landscapePhones `
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 22px;
    }
    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 18px;
    }
    h5 {
      font-size: 18px;
    }
    h6 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
    a:link, a:visited {
      font-size: 14px;
    }
  `}

  /* Min width of 768 */
  ${media.tablet `
    h1 {
      font-size: 26px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 22px;
    }
    h4 {
      font-size: 20px;
    }
    h5 {
      font-size: 20px;
    }
    h6 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
      line-height: 20px;
    }
    a:link, a:visited {
      font-size: 16px;
    }
  `}

  /* Min width of 1024 */
  ${media.desktop `
    h1 {
      font-size: 35px;
    }
    h2 {
      font-size: 33px;
    }
    h3 {
      font-size: 30px;
    }
    h4 {
      font-size: 28px;
    }
    h5 {
      font-size: 26px;
    }
    h6 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
      line-height: 20px;
    }
    a:link, a:visited {
      font-size: 16px;
    }
  `}

  /* Min width of 1200 */
  ${media.widescreen `
    p {
      font-size: 18px;
      line-height:22px;
    }
    a:link, a:visited {
      font-size: 18px;
    }
  `}

  /* Min width of 1980 */
  ${media.udh `
    p {}
    a:link, a:visited {}
  `}
`

export default GlobalStyle
