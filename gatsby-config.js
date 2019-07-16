

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Teacher Efficacy`, //consider 'intrventions as title
    description: `Resources to increase level of efficacy in facilitating student learning and managing classrooms more effectively.`,
    author: `@lsguillory`,
    twitterUsername: '@DrLindaGuillory',
    image: '/anxiety.jpg',
    siteUrl: 'https://drnana-interventions.netlify.com',
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,//root-interventions/src/images
      },
    },
    
    {
      resolve: `gatsby-source-contentful`,
      options: {
        //spaceId: `exemi0rdx5vj`, 
        // Learn about environment variables: https://gatsby.dev/env-vars
        //accessToken: "QeBXgBLr1GMX2aJRXTn7uPpUTTn-uCtQevHb3sDcrqE",  

        //*************************************************************
        spaceId: process.env.CONTENTFUL_SPACE_ID,  
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,

      },
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://drnana-interventions.netlify.com',
        sitemap: 'https://drnana-interventions.netlify.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
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
