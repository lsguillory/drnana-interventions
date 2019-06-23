import React from 'react'
import EffectList from './effectList'
import {useStaticQuery, graphql} from 'gatsby'

const getEffects = graphql`
query {
  effects:allContentfulEffectIntervention {
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

const Effects = () => {
 const { effects } = useStaticQuery(getEffects)

 return <EffectList effects={effects} />
}

export default Effects 