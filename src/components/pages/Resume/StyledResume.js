// Library Imports
import styled from 'styled-components'

// Asset Imports
import bg from 'globalAssets/images/hexrepeat2.jpg'
import { cyberBlue } from 'globalConfig/css_vars'

const StyledResume = styled.section`

  @page 
  {
      size: auto;   /* auto is the initial value */
      margin-top: 0mm;  /* this affects the margin in the printer settings */
      margin-bottom: 0mm; 
  }
  
  h1, h2 {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
  }

  p, a:link {
    font-family: 'Lato';
  }

  h1 {
    font-size: 2.4rem;
    margin: 0px;
    text-transform: uppercase;
  }

  h2 {
    color: rgb(0, 171, 223);
    font-size: 1.8;
    font-family: "Roboto Condensed", sans-serif;
    margin-bottom: 20px;
  }

  p {
    color: #000000;
    font-size: 16px;
  }

  .controls {
    background-color: #000000;
    display: grid;
    grid-template-columns: 75% 100px;
    justify-content: space-between;
    padding: 1em;
    
    p {
      color: #ffffff;
      font-size: 16px;
      font-family: 'Montserrat';
      margin-bottom: 0px;
    }

    a {
      font-weight: bold;
    }
  }

  .contacts {
    background-image: url(${bg});
    border-bottom: 5px solid ${cyberBlue};
    padding: 20px 0px;

    h2 {
      color: #000000;
      font-size: 1.3rem;
      margin: 5px 0px;
      padding-bottom: 5px;
      border-bottom: 1px solid ${cyberBlue};
      border-top: 1px solid ${cyberBlue};
      width: 250px;
      padding-top: 7px;
    }
    p, a:link { 
      text-transform: uppercase;
    }

    p {
      color: #000000;
      font-weight: 700;
    }

    a:link {
      font-weight: 400;
    }
  }

  .profile {
    border-bottom: 1px solid ${cyberBlue};
    padding-bottom: 15px;
  }

  .workExp {
    border-bottom: 1px solid ${cyberBlue};

    .workplace {
      margin-bottom: 20px;

      h3 {
        font-family: "Roboto Condensed", sans-serif;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      .workplaceHeader {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;

        h4 {
          color: #000000;
          font-family: "Roboto Condensed", sans-serif;
          font-size: 1.2rem;
          margin-bottom: 0px;
        }
        p {
          font-family: "Roboto Condensed", sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0px;
          text-transform: uppercase;
          text-align: right;
        }
      }
      p.keywords {
        font-size: 0.8rem;
        font-style: italic;
        line-height: 1rem;
        margin-bottom: 1rem;

        span {
          font-weight: 700;
        }
      }
    }
  }

  .skills {
    border-bottom: 1px solid ${cyberBlue};

    .skillsWrap {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .education {
    border-bottom: 1px solid ${cyberBlue};
    
    .edItem {
      h3 {
        font-family: "Roboto Condensed", sans-serif;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      .edHeader {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;

        h4 {
          color: #000000;
          font-family: "Roboto Condensed", sans-serif;
          font-size: 1.2rem;
          margin-bottom: 0px;
        }
        p {
          font-family: "Roboto Condensed", sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0px;
          text-transform: uppercase;
          text-align: right;
        }
      }
    }
  }

  @media print {
    #Header, #Footer { display: none !important; }

    .controls {
      display:none;
    }
}
`

export default StyledResume
