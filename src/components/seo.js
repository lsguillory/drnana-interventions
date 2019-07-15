/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
//import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
query {
  site {
    siteMetadata {
      siteTitle: title
      siteDesc: description
      author
      siteUrl
      image
      twitterUsername
    }
    }
    }
  `

const SEO = ({ description, title }) => {
  const {site} = useStaticQuery(getData); 

  const {siteDesc, siteTitle, siteUrl, image, twitterUsername } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{lang: 'en'}} title={`${title} | ${siteTitle}`}>
      <meta name='description' content={description || siteDesc}/>
      <meta name ='image' content={image} />

      {/* facebook card */}
      <meta property='og:url' content={siteUrl}/>
      <meta property='og:type' content='website'/>
      <meta property='og:title' content={siteTitle}/>
      <meta property='og:description' content={siteDesc}/>
      <meta property='og:image' content={`${siteUrl}${image}`}/>
      <meta property='og:image:width' content='500'/>
      <meta property='og:image:height' content='400'/>

      {/* twitter card */}
      <meta name='twitter:card' content='summary_large_image'/>
      <meta name='twitter:creator' content={twitterUsername}/>
      <meta name='twitter:title' content={siteTitle}/>
      <meta name='twitter:description' content={siteDesc}/>
      <meta name='twitter:image' content={`${siteUrl}${image}`}/>
      

    </Helmet>
  )
}

export default SEO

  /* const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
} */

