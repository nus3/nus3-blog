import type { ReactNode, FC } from 'react'
import * as styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarDays,
  faCircleArrowLeft,
} from '@fortawesome/free-solid-svg-icons'

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
          <FontAwesomeIcon className={styles.calendar} icon={faCalendarDays} />
          {date}
        </p>
      </header>
      <section className={styles.content}>{children}</section>
      <footer>
        <a href="/posts" className={styles.link}>
          <FontAwesomeIcon className={styles.arrow} icon={faCircleArrowLeft} />
          <span>記事一覧に戻る</span>
        </a>
      </footer>
    </article>
  )
}
