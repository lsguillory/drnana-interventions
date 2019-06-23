/* import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'
import {graphql} from 'gatsby'
//page query
//const Blog = (props) => {
 
 //console.log(props)
 const Blog = ({ data }) => {
 return (
  <Layout>
   Hello from the BLOG page !!!!!!!
   <Link to="/">Go to HOME pag</Link>
   <h1>title : {data.site.siteMetadata.title}</h1>
  </Layout>
 )
}

export const query = graphql`
query {
  site {
    siteMetadata {
      title
      description
      author
      data {
        item1
        item2
        item3
      
      }
    }
  }
}

`

export default Blog
 */