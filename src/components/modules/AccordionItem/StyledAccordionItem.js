// Library Imports
import styled from 'styled-components'

// Variable Imports
import { cyberBlue, darkBlue, link} from 'globalConfig/css_vars'

const StyledAccordionItem = styled.section`

  .accordion_item_title {
    background-color: ${darkBlue};
    cursor: pointer;
    display:grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;

    div {
      height: auto;
    }

    h3 {
      color: ${link};
      margin-bottom: 0px;
    }

    img {
      transform: rotate(${props => props.isActive})
    }
  }

  .accordion_item_title:hover {
    h3 {
      color: ${cyberBlue};
    }
  }

  .accordion_item_content {
    padding: 20px 55px 20px 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 130px;

    .skillItem {
      h4 {
        font-size: 20px;
        font-family: 'MontserratBold';
        margin-bottom: 4px;
      }
      .progressWrap {
        background-color: ${darkBlue};
        border: 1px solid ${darkBlue};
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 4px 0px #69D9FF; 
        box-shadow: 0px 0px 4px 0px #69D9FF;
        margin-bottom: 10px;
        width: 100%;

        .progressInner {
          background-color: ${cyberBlue};
          border-radius: 5px;
          height: 20px;

          p {
            color: ${darkBlue};
            font-family: 'MontserratBold';
            font-size: 14px;
            font-weight: 700;
            padding-right: 5px;
            text-align: end;
          }
        }
      }
    }
  }
`

export default StyledAccordionItem
