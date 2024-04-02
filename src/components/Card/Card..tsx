import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

import styles from './Card.module.css'

export default function Card({
  children,
  className,
}: PropsWithChildren<{ className: string }>) {
  return <div className={clsx(styles.wrapper, className)}>{children}</div>
}
