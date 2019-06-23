import React from 'react'
import styled from 'styled-components'

const Title = ({ title, subtitle, className}) => { //eliminate className with alternate syntax 
 
 return (

  // <TitleWrapper>  --alternate syntax without className with wrapper
  <div className="{className}">
  <h4> 
    <span className='title'>{title}</span>
    <span> {subtitle}</span>
  </h4>
  </div>
  // </TitleWrapper>
 )
}

//const TitleWrapper = styled.div` --alternate syntax with wrapper
export default styled(Title)` 
text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;
  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
//export default Title --alternate syntax with wrapper
