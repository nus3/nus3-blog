import type { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as styles from './styles.module.css'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const TopContent: FC = () => {
  const zennUrl = 'https://zenn.dev/nus3'

  return (
    <ul className={styles.wrap}>
      <li className={styles.list}>
        <a
          className={styles.link}
          href={zennUrl}
          rel="noreferrer noopener"
          target="_blank"
        >
          <span className={styles.labelWrap}>
            <span className={styles.menuLabel}>Zenn</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className={styles.menuIcon}
              title="zennへのリンクアイコン"
            />
          </span>
        </a>
        <p>技術系はこっち</p>
      </li>
      <li className={styles.list}>
        <a href="/posts" className={styles.link}>
          <span className={styles.menuLabel}>Blog</span>
        </a>
        <p>それ以外はこっち</p>
      </li>
    </ul>
  )
}
