
 /* * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it */

 const path = require('path');

exports.createPages = async({graphql, actions}) => {
  
 const {createPage} = actions

  const {data} = await graphql (`
  query {
    effects:allContentfulEffectIntervention {
     edges {
       node {
         slug
       }
     }
   }
 }
  `)

  // console.log(data);
 
 data.effects.edges.forEach(({ node }) => {
    createPage({
    path: `effects/${node.slug}`, 
      component: path.resolve('./src/templates/effect-template.js'),
      context: {
       slug: node.slug,
     },

     })
   }) 
 }



