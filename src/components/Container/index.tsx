import type { ReactNode, FC } from 'react'
import { FaTwitter, FaGithubAlt } from 'react-icons/fa'
import * as styles from './styles.module.css'
import '../../styles/base.css'

type ContainerProps = {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => {
  const twitterUrl = 'https://twitter.com/nus3_'
  const githubUrl = 'https://github.com/nus3'

  const header = (
    <h1 className={styles.headerTitle}>
      <a href="/">
        <img src="../../images/logo.png" width={138} alt="Blog Logo" />
      </a>
    </h1>
  )

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {header}
        <div className={styles.icons}>
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
