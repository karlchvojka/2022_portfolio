// Library Imports
import styled from 'styled-components'

// Variable Imports
import { cyberBlue, link } from 'globalConfig/css_vars'

const StyledProjects = styled.section`
  padding: 20px;

  .projectsWrap {
    column-gap: 20px;
    row-gap: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    }

    h3 {
      margin-bottom: 10px;
    }

    h4 {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
`

export default StyledProjects
