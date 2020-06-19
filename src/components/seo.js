/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ lang, meta, pageTitle, pageDescription, showSiteNameInTitle, pagePath }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = pageDescription || site.siteMetadata.description

  let Title = `${site.siteMetadata.title}｜ヴォワラ・フランス生活情報メディア`
  if (pageTitle){
    if (showSiteNameInTitle === "true") {
       Title = `${pageTitle}｜Voilà`
    } else {
       Title = pageTitle
    }
  }

  const url = `${site.siteMetadata.siteUrl}${pagePath}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={Title}
      //titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        //{ダメこれ動かない
        //  name: `description`,
        //  content: "metaDescription",
        //},
        {
          property: `og:title`,
          content: Title,
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
          content: '@account_name',
        },
        {
          name: `twitter:title`,
          content: Title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
    <meta name="description" content={metaDescription} />
    <meta name="robots" content="noindex" />
    <link rel="canonical" href={url} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `ja`,
  //meta: [],
  description: `フランスの「旅」「生活」「学び」「仕事」「遊び」を中心に、お役立ち情報を届けるウェブメディアです。現地スタッフによるリアルな情報を、ぜひお役立てください。1`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
