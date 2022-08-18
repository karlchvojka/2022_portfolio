// Framework Imports
import React from 'react'

// Component Imports
import AccordionItem from 'modules/AccordionItem/AccordionItem'
import CornerWrap from 'modules/CornerWrap/CornerWrap'

// CSS Imports
import StyledAccordionWrap from './StyledAccordionWrap'

/**
 * This the AccordionWrap component.
 * @param { array } data - Array of objects.
 */
const AccordionWrap = ({ data }) => {
  return (
    <StyledAccordionWrap>
      { 
        data.map(( section, index ) => (
          <CornerWrap>
            <AccordionItem 
              key={section.key}
              def={section.def}
              title={section.title}
              skillList={section.skillList}
            />
          </CornerWrap>
        ))
      }
    </StyledAccordionWrap>
  )
}

export default AccordionWrap
