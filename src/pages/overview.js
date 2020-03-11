import React from 'react'
import Layout from '../components/layout'
import StyledHero from "../components/styledHero"
import { graphql } from 'gatsby'
import Overview from '../components/overview/overview'

import SEO from '../components/seo'


export default function overview ({ data }) {
 return (
  
  <Layout> 
  <SEO title='Overview: ST'/>
 
  <StyledHero img={data.overview.childImageSharp.fluid} />
  {/* <Title title="overview:" subtitle="stereotype threat" /> */}
  <Overview />
 
  </Layout>
 )
}

/* const overview = () => {
 return (
  <div>
   This is the Overview: Stereotype Threat Page
  </div>
 )
} */

export const query = graphql`
query {
  overview:file(relativePath:{eq:"stfearpass.png"}) {
    childImageSharp{
      fluid(quality: 90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}

`