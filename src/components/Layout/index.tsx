import * as React from 'react'
import { Link } from 'gatsby'
import { WindowLocation } from '@reach/router'

import * as styles from './styles.module.css'

type LayoutProps = {
  title: string
  location: WindowLocation<unknown>
}

export const Layout: React.FC<LayoutProps> = ({
  location,
  title,
  children,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className={styles.headerTitle}>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className={styles.headerTitle} to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className={styles.container} data-is-root-path={isRootPath}>
      <header className={styles.header}>{header}</header>
      <main className={styles.mainContainer}>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} nus3 Blog
      </footer>
    </div>
  )
}
