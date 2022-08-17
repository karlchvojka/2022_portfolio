// Library Imports
import styled from 'styled-components'

// Variable Imports
import { cyberBlue, darkBlue, link} from 'globalConfig/css_vars'

const StyledAccordionItem = styled.section`
  background-color: ${cyberBlue};
  clip-path: polygon(20px 0, 100% 0, 100% 99%, 0 100%, 0 20px);
  margin-bottom: 5px;
  padding-bottom: 4px;
  position: relative;


  .accordionItemInner {
    background-color: ${darkBlue};
    clip-path: polygon(20px 0, 100% 0, 100% 99%, 0 100%, 0 20px);
    height: calc(100% - 4px);
    position: relative;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    width: calc(100% - 4px);

    .accordion_item_title {
      background-color: ${darkBlue};
      cursor: pointer;
      display:grid;
      grid-template-columns: max-content max-content;
      justify-content: space-between;
      padding: 18px 18px 14px 18px;

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
      padding: 1rem;
    }
  }
`

export default StyledAccordionItem
