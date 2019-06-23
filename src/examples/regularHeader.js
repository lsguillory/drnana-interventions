//using static query as a component
import React from 'react'
import { StaticQuery,graphql} from 'gatsby'// hook
//static query as a component

const getSiteData = graphql`
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
const regularHeader = () => {
 return ( 
 <StaticQuery query={getSiteData} render={data => {
  //console.log(data)

   return ( 
   <div> 
   <h1>title : {data.site.siteMetadata.title}</h1>

  
   </div>
   )
 }} 

 />
 )
 }
  

export default regularHeader

