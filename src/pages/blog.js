import React from 'react'
//import { Link } from "gatsby"
import Layout from '../components/layout'
import StyledHero from '../components/styledHero'
import {graphql} from 'gatsby'


 const Blog = ({ data }) => {
 
  return (
  <Layout>
   <StyledHero img={data.blog.childImageSharp.fluid} />
  </Layout>
 )
}

export const query = graphql`
query {
  blog:file(relativePath:{eq:"blogBcg.jpeg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}

`

export default Blog
