
import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero' //top background image 
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import {FaBookReader} from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Day from '../components/intervention/day'


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
    <div className={styles.info}>
    <p>
    <FaBookReader className={styles.icon} />
    <h2>{name}</h2>
    </p>
    
      <p className={styles.info}> 
      <h3>Overview</h3>
      {overview}
      </p>    
       </div> 
       
       <p> 
       <h4>Who is vulnerable?</h4>
       {vulnerability}
       </p>
     
       <p> 
        <h4>Intervention Techniques</h4>
        {techniques}
        </p>
       
        <h2>Technique Description</h2>        
       
        <div className={styles.journey}>
            {interventions.map((item, index) => {
              return <Day key={index} type={item.Type} info={item.Info} />
            })}
          </div>

          <p> 
          <h4>References</h4>{miscellaneous}
          </p>
       
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
  