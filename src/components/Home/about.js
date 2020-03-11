import React from 'react'
import Title from '../title'
import styles from '../../css/about.module.css'
// import img from '../../images/word8.jpg' --before graphql/staticquery
import {useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink"


const getAbout = graphql`
query aboutImage{
  aboutImage: file(relativePath:{eq: "stereotypeCloud2.jpg"}){
    childImageSharp{
      fluid(maxWidth:600){
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}

`

const About = () => {
  const {aboutImage} = useStaticQuery(getAbout);
 
  return (
  <section className={styles.about}>
   
   <Title title='about' subtitle='sterotype threat' />

   <div className={styles.aboutCenter}>
   <article className={styles.aboutImg}>
    <div className={styles.imgContainer}>
     {/* <img src={img} alt='about efficacy' /> */}
     <Img fluid={aboutImage.childImageSharp.fluid} alt='stereotypes cloud' />
    </div>
   </article>
   <article className={styles.aboutInfo}>
    
     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora nihil error.</p>
     <p>Sit excepturi eos, quisquam aspernatur illum ullam velit modi cum harum exercitationem?</p>
     <p>Laborum tempora nihil error. Sit amet consectetur adipisicing elit.</p>
    
  <AniLink fade to="/about" className='btn-primary'>
   explore overview
  </AniLink>
   </article>
   </div>
  </section>
 )
}

export default About
