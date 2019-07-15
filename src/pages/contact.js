import React from 'react'
import Layout from '../components/layout'
import StyledHero from "../components/styledHero"
import { graphql } from 'gatsby'
import Contact from '../components/contact/contact'
import SEO from '../components/seo'

export default function contact ({ data }) {
 return (
  <Layout>
    <SEO title='Contact'/>
   <StyledHero img={data.contactBcg.childImageSharp.fluid} />
   <Contact />
  </Layout>
 )
}

export const query = graphql`
    query {
  contactBcg:file(relativePath:{eq:"connectBcg.jpeg"}){
    childImageSharp {
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
    
}
 `
 