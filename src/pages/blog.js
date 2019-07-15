import React from 'react'
//import { Link } from "gatsby"
import Layout from '../components/layout'
import StyledHero from '../components/styledHero'
import {graphql} from 'gatsby'
import BlogList from '../components/blog/blogList'
import SEO from '../components/seo'

 const Blog = ({ data }) => {
 
  return (
  <Layout>
   <SEO title='Blog'/>
   <StyledHero img={data.blog.childImageSharp.fluid} />
   <BlogList />
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
