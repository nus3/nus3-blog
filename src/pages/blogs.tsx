// HACK:(nus3) Reactをimportしたくない
import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import { Layout } from '../components/Layout'
import Seo from '../components/seo'
import { BlogsContent } from '../components/BlogsContent'

const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data?.site?.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="blogs" />
      <BlogsContent allMarkdownRemark={data.allMarkdownRemark} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
          description
        }
      }
    }
  }
`
