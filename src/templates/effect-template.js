
import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout';
import StyledHero from '../components/styledHero' //top background image 
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import {FaBookReader} from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Day from '../components/intervention/day'
import SEO from '../components/seo'

 const Template = ({data}) => {

  const { 
    name, 
    overview:{overview}, 
    vulnerability, 
    techniques, 
    interventions, 
    miscellaneous:{miscellaneous}, 
    image} = data.effect
   
  const [mainImage, ...effectImage] = image
  // console.log(mainImage);
  //  console.log(effectImage);
  
   return (
     <Layout>
     <SEO title={name} />
       <StyledHero img={mainImage.fluid} />
   <section className={styles.template}>
     <div className={styles.center}>
    <div className={styles.images}>

    {effectImage.map((item, index) => {
      return (
        <Img key={index} fluid={item.fluid} alt='single effect' className={styles.image}/>
      )
    })}
    </div>

    <h2> <FaBookReader className={styles.icon} />{name}</h2>
    <div className={styles.info}>
    
     
      <h3>Overview</h3>
      {overview}
        
       </div> 
       <br/>

       <div> 
       <h4>Who is vulnerable?</h4>
       {vulnerability}
       <br/>
       </div>

       <div>
       <br/>
       <h4>Intervention Techniques</h4>
        {techniques}
        <br/>
       </div>
     
      
       
        <h2>Technique Description</h2>        
       
        <div className={styles.journey}>
            {interventions.map((item, index) => {
              return <Day key={index} type={item.Type} info={item.Info} />
            })}
          </div>

          <div> 
          <h4>References</h4>{miscellaneous}
          </div>
       <br/>
     <AniLink fade to="/intervention" className="btn-primary">
            back to all interventions
      </AniLink> 
     
      </div> 
    </section>
     </Layout>
   ) 
}

export const query = graphql`
query($slug: String!) {
 effect:contentfulEffectIntervention(slug:{eq:$slug}) {
  name
   overview {
     overview
   }
   
   vulnerability
   techniques
   interventions {
     Type
     Info
     Reference
   }
    miscellaneous {
     miscellaneous
   }
  image {
 fluid {
   ...GatsbyContentfulFluid
 }
 }  
 }
 }
` 
 
export default Template 
  