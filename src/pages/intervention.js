import React from 'react'
import Layout from '../components/layout'
//import Button from '../components/examples/button'
import StyledHero from '../components/styledHero'
import Effects from '../components/effects/effects'
import {graphql} from 'gatsby'



const Intervention = ({ data }) => {
 
 return (
  <Layout>
   <StyledHero img={data.research.childImageSharp.fluid} />
   <Effects />
  </Layout>
  
 )
}

export const query = graphql`
query {
 research:file(relativePath:{eq:"interventionbck.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}

`
export default Intervention
