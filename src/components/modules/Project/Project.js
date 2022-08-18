// Framework Imports
import React from 'react'

// CSS Imports
import StyledProject from './StyledProject'

/**
 * This the Project component.
 * @param { string } projTitle - Title of the project
 * @param { string } projImg - File path of Project image
 * @param { string } projDesc - Brief description of the project
 * @param { string } projTech - List of technologies used in the project
 * @param { string } projGit - Link to github repo
 */
const Project = ({
  projTitle,
  projImg,
  projDesc,
  projTech,
  projGit,
}) => {
  return (
    <StyledProject projImg={projImg}>
      <section className='projImgWrap'></section>
      <h3>{projTitle}</h3>
      <p>{projDesc}</p>
      <h4>Technology Used:</h4>
      <p>{projTech}</p>
      <a href={projGit} target='blank'><i className='fa fa-github'></i>View Project</a>
    </StyledProject>
  )
}

export default Project
