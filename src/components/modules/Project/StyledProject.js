// Library Imports
import styled from 'styled-components'

// Variable Imports
import { black, cyberBlue, white } from 'globalConfig/css_vars'

const StyledProject = styled.section`
  display:grid;
  height: 100%;

  .projImgWrap {
    background-image: url(${props => props.projImg});
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid ${cyberBlue};
    border-radius: 5px;
    margin-bottom: 20px;
    overflow:hidden;
    height: 230px;
    -webkit-box-shadow: 0px -1px 6px 2px #00B4EB; 
    box-shadow: 0px -1px 6px 2px #00B4EB;

    img {
      width: 100%;
      border-radius: 5px;
    }
  }

  a {
    align-self: end;
    font-weight: 700;

    .fa {
      font-size:18px;
      margin-right: 5px;
    }
  }
`

export default StyledProject
