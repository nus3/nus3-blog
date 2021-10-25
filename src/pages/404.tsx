import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'

import { Layout } from '../components/Layout'
import Seo from '../components/seo'
import { FaArrowCircleLeft } from 'react-icons/fa'

const NotFoundPage: React.FC<PageProps<GatsbyTypes.NotFoundQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data?.site?.siteMetadata?.title || '404 Error'

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <section className="flex flex-col gap-5 justify-center items-center h-full w-full">
        <h1 className="font-bold text-accentYellow text-9xl">404</h1>
        <p className="text-xl">{`ページがみつかんない _:(´ཀ\`」 ∠):`}</p>
        <Link
          to="/blogs"
          className="flex gap-1 items-center text-primary hover:text-primaryLight transition-colors duration-300"
        >
          <FaArrowCircleLeft className="text-lg" />
          <span>記事一覧に戻る</span>
        </Link>
      </section>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`
