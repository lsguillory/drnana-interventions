import React from 'react'
import Layout from '../components/layout'
import StyledHero from "../components/styledHero"
//import img from '../../images/word8.jpg'

import { graphql } from 'gatsby'
import About from '../components/about/about'
import SEO from '../components/seo'
 
//const About = ({ data }) => {
 export default function about ({ data }) {
 return (
  
  <Layout> 
  <SEO title='About Efficacy'/>
 
  <StyledHero img={data.about.childImageSharp.fluid} />
  <About />
 
  </Layout>
 )
}

export const query = graphql`
query {
  about:file(relativePath:{eq:"interventionbck.jpg"}) {
    childImageSharp{
      fluid(quality: 90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}

`

