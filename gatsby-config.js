

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Teacher Efficacy`,
    description: `Resources to increase level of efficacy in facilitating student learning and managing classrooms more effectively.`,
    author: `@lsguillory`,
    data: {
      item1: 'stereotype threat interventions',
      item2: 'classroom management',
      item3: 'teacher efficacy'
    },
  },
   
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,//root-interventions/src/images
      }
    },
    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `exemi0rdx5vj`,   //process.env.CONTENTFUL_SPACE_ID,  
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "QeBXgBLr1GMX2aJRXTn7uPpUTTn-uCtQevHb3sDcrqE",     //process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
