
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

   posts: allContentfulPost {
    edges {
      node {
        slug
      }
    }
  }
   
 }  
  `)

   //console.log(data);
 
 data.effects.edges.forEach(({ node }) => {
    createPage({
    path: `effects/${node.slug}`, 
      component: path.resolve('./src/templates/effect-template.js'),
      context: {
       slug: node.slug,
     },

     })
   })  

   data.posts.edges.forEach(({ node }) => {
    createPage({
    path: `blog/${node.slug}`, 
      component: path.resolve('./src/templates/blog-template.js'),
      context: {
       slug: node.slug,
     },

     })
   })  
//amount of posts
const posts = data.posts.edges
//posts per page
const postsPerPage = 3
//how many pages
const numPages = Math.ceil(posts.length/postsPerPage);

Array.from({ length: numPages }).forEach((_,i) => {
  createPage({
    path:i === 0?`/blogs` : `/blogs/${i+1}`,
    component:path.resolve('./src/templates/blog-list-template.js'),
    context:{
      limit:postsPerPage,
      skip:i * postsPerPage,
      numPages,
      currentPage:i + 1,
    },
  })
})
// console.log('***************');
// console.log(pages);
// console.log('***************');



 } //exports.create pages above

 

