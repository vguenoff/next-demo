import React, { PropsWithChildren } from 'react'
import { format } from 'date-fns'
import clsx from 'clsx'

import styles from './BlogHero.module.css'

export default function BlogHero({
  title,
  className,
}: PropsWithChildren<{
  title: string
  publishedOn: Date
  className?: string
}>) {
  return (
    <header className={clsx(styles.wrapper, className)}>
      <div className={styles.content}>
        <h1>{title}</h1>
      </div>
    </header>
  )
}
