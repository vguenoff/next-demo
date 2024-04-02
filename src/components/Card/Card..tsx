import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

import styles from './Card.module.css'

export default function Card({
  children,
  className,
  ...delegated
}: PropsWithChildren<{ className: string; delegated?: any }>) {
  return (
    <div className={clsx(styles.wrapper, className)} {...delegated}>
      {children}
    </div>
  )
}
