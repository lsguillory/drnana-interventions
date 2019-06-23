Example 1 (header.js)

import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Header = () => {
  const { site } = useStaticQuery(graphql`
  {
  site {
    siteMetadata {
      title
      description
      author
      data {
        name
        age
      }
    }
  }
}

  `) //data = variable storage for staticQuery hook

  console.log(site);

 return (
  <div>
   <h1>title:{site.siteMetadata.title}</h1> 
   <h1>author:{site.siteMetadata.author}</h1>
  </div>
 )
}

export default Header

/* sends data (h1: title) to tours page */ 

**********************************************************************
Example 2
import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const getSiteData = graphql`
 query FirstQuery{
  site {
    siteMetadata {
      title
      description
      author
      data {
        name
        age
      }
    }
  }
}

`
const Header = () => {
  const { 
   site: { siteMetadata }, 
   } = useStaticQuery(getSiteData) //data = variable storage for staticQuery hook

  console.log(siteMetadata);

 return (
  <div>
   <h1>title:{siteMetadata.title}</h1> 
   <h1>author:{siteMetadata.author}</h1>
  </div>
 )
}

export default Header

/* sends data (h1: title) to tours page */ 

************************************************************************
BLOG PAGE
import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const blog = ({ data }) => { //arrow means going to create page
 

 return (
  <Layout>
   hello from the blog page <Link to="/">back Home</Link>
   <h1>title :{data.site.siteMetadata.title} </h1>
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
        name
        age
      }
    }
  }
}
`
export default blog

