import React from 'react'

import Slider from '@/components/Slider'
import styles from './SliderControl.module.css'

function SliderControl({
  label,
  value,
  ...delegated
}: {
  label: string
  value: number
  delegated?: any
}) {
  const id = React.useId()

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <span className={styles.value}>{value}</span>
      </div>
      {/* @ts-ignore */}
      <Slider {...delegated} value={value} id={id} />
    </div>
  )
}

export default SliderControl
