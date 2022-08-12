// Library Imports
import styled from 'styled-components'

const StyledHeader = styled.header`
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
      color: #000;
      font-family: 'MontserratBold', sans-serif;
      font-weight: 800;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`

export default StyledHeader
