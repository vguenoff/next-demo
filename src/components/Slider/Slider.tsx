import React from 'react'
import clsx from 'clsx'

import styles from './Slider.module.css'

export default function Slider({
  className,
  ...delegated
}: {
  className?: string
  delegated?: any
}) {
  return (
    <input
      type="range"
      className={clsx(styles.slider, className)}
      {...delegated}
    />
  )
}
