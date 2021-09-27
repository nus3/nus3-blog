// HACK:(nus3) Reactをimportしたくない
import * as React from 'react'
import { PageProps, graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import Seo from '../components/seo'

const BlogTop: React.FC<PageProps<GatsbyTypes.BlogTopQuery>> = ({
  location,
  data,
}) => {
  const siteTitle = data?.site?.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Top" />
      <ul>
        <li>zenn 技術的なことはこっち</li>
        <li>blogs 個人的なことはこっち</li>
      </ul>
    </Layout>
  )
}

export default BlogTop

export const pageQuery = graphql`
  query BlogTop {
    site {
      siteMetadata {
        title
      }
    }
  }
`
