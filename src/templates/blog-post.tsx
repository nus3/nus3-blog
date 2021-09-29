import * as React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { BsCalendarFill } from 'react-icons/bs'

import { Layout } from '../components/Layout'
import Seo from '../components/seo'

import * as styles from './styles.module.css'

const BlogPostTemplate: React.FC<PageProps<GatsbyTypes.BlogPostBySlugQuery>> =
  ({ data, location }) => {
    const post = data.markdownRemark
    const siteTitle = data.site?.siteMetadata?.title || `Title`

    return (
      <Layout location={location} title={siteTitle}>
        <Seo
          title={post!.frontmatter!.title!}
          description={post!.frontmatter?.description || post!.excerpt}
        />
        <article
          className={styles.article}
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className={styles.header}>
            <h1 itemProp="headline" className={styles.headerTitle}>
              {post!.frontmatter?.title}
            </h1>
            <p className={styles.date}>
              <BsCalendarFill />
              {post!.frontmatter?.date}
            </p>
          </header>
          <section
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: post!.html! }}
            itemProp="articleBody"
          />
          <footer>
            <Link to="/blogs" className={styles.link}>
              <FaArrowCircleLeft className="text-lg" />
              <span>記事一覧に戻る</span>
            </Link>
          </footer>
        </article>
      </Layout>
    )
  }

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        description
      }
    }
  }
`
