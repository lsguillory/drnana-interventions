import React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
//import Images from '../components/images'
import StyledHero from '../components/styledHero'
import {graphql} from 'gatsby'


const Classroom = ({ data }) => {

 return (
  <Layout>
  <StyledHero img={data.classroom.childImageSharp.fluid} />

  <div>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum perferendis fugiat esse aliquam veritatis! Nulla aliquid provident eum perferendis iste quo sit placeat commodi. Omnis mollitia quia pariatur sed provident!</p>
  </div>

  
  </Layout>
 )
}

export const query = graphql`
query {
  classroom:file(relativePath:{eq:"classroom5.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}

`
export default Classroom
