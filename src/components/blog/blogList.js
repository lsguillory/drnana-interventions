import React from 'react'
import BlogCard from './blogCard'
import Title from '../Title'
import {useStaticQuery, graphql} from 'gatsby'
import styles from '../../css/blog.module.css'

const getPosts = graphql`
query {
  posts: allContentfulPost(sort:{fields:published, order: DESC}) {
    edges{
      node {
        published(formatString: "MMMM D, Y" )
        title
        slug
        id:contentful_id
        image {
          fluid {
           ...GatsbyContentfulFluid
          }  
        }
      }
    }
  } 
}

`

const BlogList = () => {
 const {posts} = useStaticQuery(getPosts);
 //console.log(posts)

 return (
  // <div>
  // Hello from BLOGLIST
  // <BlogCard />
 // </div> 
  <section className={styles.blog}>
<Title title="our" subtitle="blogs" />
<div className={styles.center}>
{posts.edges.map(({node}) => {
  return <BlogCard key={node.id} blog={node} />
})}
</div>
  </section>
 )
}

export default BlogList
