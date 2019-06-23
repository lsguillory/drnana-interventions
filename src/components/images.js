import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import img from '../images/teacher1.jpg'
import Img from 'gatsby-image'

const getImages = graphql`

query Images {
  fixed: file(relativePath:{eq:"classroom3.jpg"}) {
    childImageSharp{
      fixed(width:500, height:340){
       ...GatsbyImageSharpFixed 
      }
    } 
  },

  fluid:file(relativePath:{eq:"classroom4.jpg"}){
    childImageSharp{
     fluid {        
      ...GatsbyImageSharpFluid_tracedSVG  #fluid  image always size of parent
      }
    }
  }
}

`

const Images = () => {
  const data = useStaticQuery(getImages)

 return (
  <Wrapper>
  <article><h3>Engage</h3>
  <Img fixed={data.fixed.childImageSharp.fixed} />
  </article>
  
  <article><h3>Teach</h3>
  <img src={img} className='basic' alt='teacher' />
  </article>

  <article><h3>Practice</h3>
  <Img fluid={data.fluid.childImageSharp.fluid} /> 
  </article>
  </Wrapper>
 )
}

const Wrapper = styled.div`
text-align: center;
text-transform: capitalize;
width: 80vw;
margin: 0 auto 10rem auto;

article {
 /* border: 3px solid var(--primaryColor); */
 padding: 0;
}

.basic {
  width: 100%;
}

@media (min-width: 992px) {
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-column-gap: 1rem;
}

`
export default Images
