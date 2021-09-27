// HACK:(nus3) Reactをimportしたくない
import * as React from 'react'
import { PageProps, graphql } from 'gatsby'
import { FaTwitter, FaGithub } from 'react-icons/fa'

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
      {/* TODO:(nus3) コンポーネント化 */}
      <ul>
        <li>zenn 技術的なことはこっち</li>
        <li>blogs 個人的なことはこっち</li>
      </ul>
      {/* TODO:(nus3) コンポーネント化 */}
      <section className="flex gap-3 items-center">
        <FaTwitter
          className="text-accentYellow text-5xl"
          title="Twitterのアイコン"
        ></FaTwitter>
        <FaGithub
          className="text-accentYellow text-5xl"
          title="GitHubのアイコン"
        ></FaGithub>
      </section>
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
