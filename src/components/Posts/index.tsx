import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as styles from './styles.module.css'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

type Post = {
  pagePath: string
  title: string
  date: string
  description: string
  ogp: string
}

type BlogsContentProps = {
  posts: Post[]
}

export const BlogsContent: React.FC<BlogsContentProps> = ({ posts }) => {
  if (posts.length === 0) {
    return <section className={styles.wrap}>まだ公開する記事がないヨ</section>
  }

  return (
    <ol className={styles.wrap}>
      {posts.map((post) => {
        const title = post.title

        return (
          <li key={post.pagePath}>
            <article
              itemScope
              itemType="http://schema.org/Article"
              className={styles.article}
            >
              <header>
                <h2 className={styles.title}>
                  <a href={post.pagePath}>
                    <span itemProp="headline">{title}</span>
                  </a>
                </h2>
                <p className={styles.date}>
                  <FontAwesomeIcon
                    className={styles.calendar}
                    icon={faCalendarDays}
                  />
                  {post.date}
                </p>
              </header>
              <section>
                <p className="text-lg" itemProp="description">
                  {post.description}
                </p>
              </section>
            </article>
          </li>
        )
      })}
    </ol>
  )
}
