import * as React from 'react'
import { Link } from 'gatsby'
import { BsCalendarFill } from 'react-icons/bs'

import * as styles from './styles.module.css'

type BlogsContentProps = {
  allMarkdownRemark: GatsbyTypes.BlogIndexQuery['allMarkdownRemark']
}

export const BlogsContent: React.FC<BlogsContentProps> = ({
  allMarkdownRemark,
}) => {
  const posts = allMarkdownRemark.nodes

  if (posts.length === 0) {
    return <section className={styles.wrap}>まだ公開する記事がないヨ</section>
  }

  return (
    <ol className={styles.wrap}>
      {posts.map((post) => {
        const title = post.frontmatter?.title || post.fields!.slug!

        return (
          <li key={post.fields?.slug}>
            <article
              itemScope
              itemType="http://schema.org/Article"
              className={styles.article}
            >
              <header>
                <h2 className={styles.title}>
                  <Link to={post.fields!.slug!} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <p className={styles.date}>
                  <BsCalendarFill />
                  {post.frontmatter!.date}
                </p>
              </header>
              <section className={styles.description}>
                <p
                  className="text-lg"
                  dangerouslySetInnerHTML={{
                    __html: post.frontmatter?.description || post.excerpt!,
                  }}
                  itemProp="description"
                />
              </section>
            </article>
          </li>
        )
      })}
    </ol>
  )
}
