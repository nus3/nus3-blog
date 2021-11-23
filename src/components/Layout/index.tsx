import * as React from 'react'
import { Link } from 'gatsby'
import { WindowLocation } from '@reach/router'
import { FaTwitter, FaGithubAlt } from 'react-icons/fa'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './styles.module.css'

type LayoutProps = {
  title: string
  location: WindowLocation<unknown>
}

export const Layout: React.FC<LayoutProps> = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const twitterUrl = 'https://twitter.com/nus3_'
  const githubUrl = 'https://github.com/nus3'

  let header
  if (isRootPath) {
    header = (
      <h1 className={styles.headerTitle}>
        <Link to="/">
          <StaticImage
            className="bio-avatar"
            layout="fixed"
            formats={['auto', 'webp', 'avif']}
            src="../../images/logo.png"
            width={130}
            quality={95}
            alt="Blog Logo"
          />
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className={styles.headerTitle} to="/">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={['auto', 'webp', 'avif']}
          src="../../images/logo.png"
          width={130}
          quality={95}
          alt="Blog Logo"
        />
      </Link>
    )
  }

  return (
    <div className={styles.container} data-is-root-path={isRootPath}>
      <header className={styles.header}>
        {header}
        <div className="flex gap-5 items-center">
          <a href={twitterUrl} target="_blank" rel="noreferrer noopener">
            <FaTwitter
              className={styles.headerIcon}
              title="Twitterのアイコン"
            />
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer noopener">
            <FaGithubAlt
              className={styles.headerIcon}
              title="GitHubのアイコン"
            />
          </a>
        </div>
      </header>
      <main className={styles.mainContainer}>{children}</main>
      <footer className={styles.footer}>
        © {new Date().getFullYear()} nus3 Blog
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={['auto', 'webp', 'avif']}
          src="../../images/profile-pic.png"
          width={35}
          height={35}
          quality={95}
          alt="Profile picture"
        />
      </footer>
    </div>
  )
}
