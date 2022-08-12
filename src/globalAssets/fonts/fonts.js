import { createGlobalStyle } from 'styled-components'

import MonserratReg from './Montserrat/static/Montserrat-Regular.ttf'
import MonserratBold from './Montserrat/static/Montserrat-Bold.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MonserratReg}) format('truetype');
  }

  @font-face {
    font-family: 'MontserratBold';
    src: url(${MonserratBold}) format('truetype');
  }
`
