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
 */
const AccordionItem = ({ title, def }) => {
  // State Declarations
  const [isActive, setIsActive] = useState(def ? true : false)

  return (
    <StyledAccordionItem isActive={isActive ? '180deg' : 'none'}>
      <section className='accordionItemInner'>
        <section
          className="accordion_item_title"
          onClick={()=> setIsActive(!isActive)}
        >
          <div><h3>{title}</h3></div>
          <div><img src={arrow} /></div>
        </section>
        {
          isActive && <section className="accordion_item_content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
              laborum cupiditate possimus labore, hic temporibus velit dicta earum
              suscipit commodi eum enim atque at? Et perspiciatis dolore iure
              voluptatem.
            </p>
          </section>
        }
      </section>
    </StyledAccordionItem>
  )
}

export default AccordionItem
