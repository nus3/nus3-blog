// HACK:(nus3) Reactをimportしたくない
import * as React from 'react'
import { PageProps, graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import Seo from '../components/seo'
import { TopContent } from '../components/TopContent'

const BlogTop: React.FC<PageProps<GatsbyTypes.BlogTopQuery>> = ({
  location,
  data,
}) => {
  const siteTitle = data?.site?.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Top" />
      <TopContent />
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
