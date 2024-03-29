import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import SEO from '../components/seo'
//import { node } from "prop-types";
//import { log } from "util"

const Blog = ({ data }) => {
 const {title, published, text:{json}} = data.post
 // console.log(title);

 const options = {
   renderNode:{
    "embedded-asset-block":(node)=>{
     //console.log(node);

     return ( 
      <div className='rich'>
      <h3>this is awesome image</h3>
      <img width="500" src={node.data.target.fields.file["en-US"].url} alt="" />
      <p>images provided by john doe</p>
     </div>
     )
    },
    "embedded-entry-block": node => {
     //console.log(node.data.target.fields)
     const { title, image, text, }= node.data.target.fields
     return (
     <div>
     <br/>
     <br/>
     <br/>
      <h1>this is the other post : {title['en-US']}</h1>
      <img width='500' src={image['en-US'].fields.file['en-US'].url} alt="" />
      {documentToReactComponents(text['en-US'])}
      <br/>
      <br/>
      <br/>

     </div>
     )
    }
   },
 }

 return (
  <Layout>
    <SEO title={title}/>
   <section className={styles.blog}>
     <div className={styles.center}>
        <h1>{title}</h1>
        <h4>published at : {published}</h4>
        <article className={styles.post}>
         {documentToReactComponents(json, options)}
        </article>
        <AniLink fade to='/blog' className='btn-primary'>all posts</AniLink>
    </div>
   </section>
  </Layout>
  
 )
}

export const query = graphql`
query getPost($slug: String!) {
 post: contentfulPost(slug: { eq: $slug }) {
   title
   published(formatString: "MMMM D, YYYY")
   text {
     json
   }
 }
}

`
export default Blog

// see gatsby-node.js