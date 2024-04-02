import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { Sun, Moon } from 'react-feather'

import Logo from '@/components/Logo'

import styles from './Header.module.css'

export default function Header({
  theme,
  className,
}: PropsWithChildren<{ theme: string; className?: string }>) {
  return (
    <header className={clsx(styles.wrapper, className)}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Sun size="1.5rem" />
        </button>
      </div>
    </header>
  )
}
