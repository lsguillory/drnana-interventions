import React from 'react'
import Effect from '../effects/effect'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../title'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from '../../css/items.module.css'

const getEffects = graphql`
query{
featuredEffects:allContentfulEffectIntervention(filter:{featured:{eq:true}}) {
    edges {
      node {
        name
        slug
        contentful_id
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
        miscellaneous{
          miscellaneous
        }
        image {
          fluid {
           ...GatsbyContentfulFluid_tracedSVG
          }
        }  
      }
    }
  }
}

`

const FeaturedEffects = () => {
 const response = useStaticQuery(getEffects)
//console.log(response)
const effects = response.featuredEffects.edges
//console.log(effects)
 
return (
  <section className={styles.effects}>
  <Title title='featured' subtitle='effects | interentions'/>
  <div className={styles.overview}>
 Pickled roof party gluten-free vice. You probably haven't heard of them cold-pressed mustache retro irony selvage ramps authentic keffiyeh lumbersexual green juice. Banh mi raclette next level, butcher activated charcoal meh glossier yuccie lomo shabby chic craft beer. Blue bottle actually activated charcoal coloring book, adaptogen fam pinterest try-hard shaman kickstarter four loko iPhone twee YOLO.
  </div>
  <div className={styles.center}>
 
 
   
  {effects.map(({node}) => {
    return <Effect key={node.contentful_id} effect={node} />
    })}
  </div>
  
  <AniLink fade to='/intervention' className='btn-primary'>
   - All -
  </AniLink>
  </section>
 )
}

export default FeaturedEffects
