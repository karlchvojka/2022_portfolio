// Framework Imports
import React, { useState } from 'react'

// Asset Imports
import arrow from 'globalAssets/images/arrow.png'

// CSS Imports
import StyledAccordionItem from './StyledAccordionItem'

/**
 * This the AccordionItem component.
 * @param { string } title - Title of the section
 * @param { bool } def - An Item to be open by default.
 * @param { array } skillList - List of skills
 */
const AccordionItem = ({ title, def, skillList }) => {
  // State Declarations
  const [isActive, setIsActive] = useState(def ? true : false)

  return (
    <StyledAccordionItem isActive={isActive ? '180deg' : 'none'}>
      <section
        className="accordion_item_title"
        onClick={()=> setIsActive(!isActive)}
      >
        <div><h3>{title}</h3></div>
        <div><img src={arrow} /></div>
      </section>
      {
        isActive && <section className="accordion_item_content">
          { 
            skillList.map(( skill, index ) => (
              <section className='skillItem' key={skill.title + index}>
                <h4>{skill.title}</h4>
                <section className="progressWrap">
                  <section className="progressInner" style={{width: `${skill.perc}`}}><p>{skill.perc}</p></section>
                </section>
              </section>
            ))
          }
        </section>
      }
    </StyledAccordionItem>
  )
}

export default AccordionItem
