import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Rss, Sun, Moon } from 'react-feather'

import Logo from '@/components/Logo'

import styles from './Header.module.css'

function Header({
  theme,
  className,
  ...delegated
}: PropsWithChildren<{ theme: string; className?: string; delegated?: any }>) {
  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
        </button>
        <button className={styles.action}>
          <Sun size="1.5rem" />
        </button>
      </div>
    </header>
  )
}

export default Header
