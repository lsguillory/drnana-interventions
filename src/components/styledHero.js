import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image' //image plug in to optimize background image
import { useStaticQuery, graphql } from "gatsby"


const getImage = graphql`
query {
  background:file(relativePath:{eq:"code8.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}

`

const StyledHero = ({ img, className, children, home }) => {  
 // render all below --**home** because pages will treat background img differently

 const data =useStaticQuery(getImage);
 return (

  <div>
   <BackgroundImage className={className} fluid={img || 
   data.background.childImageSharp.fluid} home= {home}> 
      {children}
   </BackgroundImage>
  </div>
 )
 }

export default styled(StyledHero)`
  min-height: ${props => (props.home ? 'calc(100vh - 62px)':'50vh')};    /*if props.home there then do  size calc & linear */
  background: ${props => props.home ?   
   'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))'
   :'none'}; 
  background-position: center;
  background-size: cover;
  opacity: 1!important; 
  display: flex;
  justify-content: center;
  align-items: center;

`
