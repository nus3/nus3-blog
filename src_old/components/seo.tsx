/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

// HACK:(nus3) requireしてるとこ
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ogpImage = require('../images/ogp/ogp.png')

type SeoProps = {
  description?: string
  lang?: string
  meta?: HTMLMetaElement[]
  title: string
  ogpSrc?: string
}

const Seo: React.FC<SeoProps> = ({
  description,
  lang,
  meta,
  title,
  ogpSrc,
}) => {
  const { site } = useStaticQuery<GatsbyTypes.SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            social {
              twitter
            }
            siteUrl
          }
        }
      }
    `,
  )

  const metaDescription = description || site!.siteMetadata!.description
  const defaultTitle = site?.siteMetadata?.title
  const siteUrl = site?.siteMetadata?.siteUrl
  const ogp = ogpSrc ? `${siteUrl}${ogpSrc}` : `${siteUrl}${ogpImage}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ''}
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
          property: `og:image`,
          content: ogp,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site?.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta!)}
    />
  )
}

Seo.defaultProps = {
  lang: `jp`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  // HACK:(nus3) 型定義する
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
