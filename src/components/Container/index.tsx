/* eslint-disable react/react-in-jsx-scope */
import type { ReactNode, FC } from 'react'
import * as styles from './styles.module.css'
import '../../styles/base.css'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const twitterUrl = 'https://twitter.com/nus3_'
  const githubUrl = 'https://github.com/nus3'

  const header = (
    <h1 className={styles.headerTitle}>
      <a href="/">
        <img
          className="bio-avatar"
          src="../../images/logo.png"
          width={138}
          alt="Blog Logo"
        />
      </a>
    </h1>
  )

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {header}
        <div className="flex items-center gap-5">
          <a href={twitterUrl} target="_blank" rel="noreferrer noopener">
            twitter
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer noopener">
            github
          </a>
        </div>
      </header>
      <main className={styles.mainContainer}>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} nus3 Blog
        <img
          className="bio-avatar"
          src="../../images/profile-pic.png"
          width={35}
          height={35}
          alt="Profile picture"
        />
      </footer>
    </div>
  )
}

export default Layout
