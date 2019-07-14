import React from "react"
//import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from '../components/layout'
//import SimpleHero from '../components/simpleHero' //used on all pages keep as separate component
import Banner from "../components/banner"
import About from '../components/Home/about'
import Services from '../components/Home/services'
import StyledHero from '../components/styledHero'
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import FeaturedEffects from '../components/Home/featuredEffects'

export default ({data}) => (
  <Layout>
  <SEO title='Home' />
    <StyledHero home='true' img={data.background.childImageSharp.fluid}>
    {/* banner in center of simpleHero */}
      <Banner
        title="igniting potential"
        info=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, officiis.">
      
        <AniLink fade to="/intervention" className="btn-white">
          implement best practices
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedEffects /> 
  </Layout>
)

export const query = graphql`
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
