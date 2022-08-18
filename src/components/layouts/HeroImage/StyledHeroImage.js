// Library Imports
import styled from 'styled-components'

// Asset Imports
import karlSlider from './assets/karlSlider.jpg'

const StyledHeroImage = styled.section`
  background-image:url(${karlSlider});
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  -webkit-box-shadow: 0px 7px 5px -1px rgba(0,171,223,0.58); 
  box-shadow: 0px 7px 5px -1px rgba(0,171,223,0.58);
  display:flex;
  height:300px;
  margin:0 auto;

  div {
    align-self: center;
    margin: 0 30px;
    width: 50%;

    h1 {
      color: #00abdf;
      display: block;
      font-size: 25px;
      text-shadow: 3px 3px 2px #000;
      text-transform: uppercase;
    }

    p {
      color:#fff;
      font-size: 12px;
      line-height: 16px;
    }
  }

  @media (min-width: 576px) {
    height:300px;

    div {
      width: 50%;

      h1 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
  @media (min-width: 768px) {
    height:350px;

    div {
      width: 50%;

      h1 {
        font-size: 25px;
      }

      p {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  @media (min-width: 992px) {
    height:400px;

    div {
      width: 50%;

      h1 {
        font-size: 30px;
      }

      p {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
  @media (min-width: 1200px) {
    height:600px;

    div {
      width: 50%;

      h1 {
        font-size: 30px;
      }

      p {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
  @media (min-width: 1400px) {
    height:600px;

    div {
      width: 50%;

      h1 {
        font-size: 30px;
      }

      p {
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
`

export default StyledHeroImage
