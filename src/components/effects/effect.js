 import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/effect.module.css'
import {FaBookReader} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useStaticQuery, graphql } from "gatsby"


//import PropTypes from "prop-types" optional as all in contentful 'isrequired'

const getImage = graphql`
query {

 file(relativePath: { eq: "book4.jpg"}) {
  childImageSharp {
   fluid {
    ...GatsbyImageSharpFluid
   }
  }
 }
}
`

const Effect = ({ effect }) => {

 const data = useStaticQuery(getImage)
 const img = data.file.childImageSharp.fluid

 const {name, slug, techniques, image} = effect
 console.log(data);
/* let mainImage
 if (image) {
   mainImage = image[0].fluid
 } else {
  mainImage = img
 } */

let mainImage = image ? image[0].fluid : img

 return (
  <article className={styles.effect}>
  <div className={styles.imgContainer}>
  <Image fluid={mainImage} className={styles.img} alt='single effect' />

  <AniLink fade className={styles.link} to={`/effects/${slug}`}>
   details
  </AniLink>
  </div>
  
  <div className={styles.footer}>
   <h3>{name || 'default value'}</h3>
   </div>
   
  <div>
   <FaBookReader className={styles.icon} />
    <h5>intervention: {techniques[0] || 'default vlaue'}</h5>
   </div>
  
  
  </article>
 )
}



export default Effect 
 