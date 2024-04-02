import React, { PropsWithChildren } from 'react'
import { format } from 'date-fns'
import clsx from 'clsx'

import styles from './BlogHero.module.css'

export default function BlogHero({
  title,
  publishedOn,
  className,
}: PropsWithChildren<{
  title: string
  publishedOn: Date
  className?: string
}>) {
  const humanizedDate = format(new Date(publishedOn), 'MMMM do, yyyy')

  return (
    <header className={clsx(styles.wrapper, className)}>
      <div className={styles.content}>
        <h1>{title}</h1>
      </div>
    </header>
  )
}
