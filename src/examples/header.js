 /* import React from 'react'
 import {useStaticQuery, graphql}from 'gatsby' //this is the hook

 const getSiteData = graphql` //run from external variable
  query FirstQuery{
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
 const Header = () => {
   const { 
    site: { siteMetadata }, can choose to go long or short way to get the dta 
    } = useStaticQuery(getSiteData) //data = variable storage for staticQuery hook//const getSite Data

   console.log(siteMetadata);

 return (
   <div>
    <h1>title:{siteMetadata.title}</h1> 
  <h1>author:{siteMetadata.author}</h1>
  </div>
  )
 }

 export default Header */

/* sends data (h1: title) to tours page */ 
