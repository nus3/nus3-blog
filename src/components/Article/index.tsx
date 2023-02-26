import type { ReactNode, FC } from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { BsCalendarFill } from 'react-icons/bs'
import * as styles from './styles.module.css'

type ArticleProps = {
  children: ReactNode
  title: string
  date: string
}

export const Article: FC<ArticleProps> = ({ children, title, date }) => {
  return (
    <article
      className={styles.article}
      itemScope
      itemType="http://schema.org/Article"
    >
      <header className={styles.header}>
        <h1 itemProp="headline" className={styles.headerTitle}>
          {title}
        </h1>
        <p className={styles.date}>
          <BsCalendarFill />
          {date}
        </p>
      </header>
      <section className={styles.content}>{children}</section>
      <footer>
        <a href="/blogs" className={styles.link}>
          <FaArrowCircleLeft className="text-lg" />
          <span>記事一覧に戻る</span>
        </a>
      </footer>
    </article>
  )
}
