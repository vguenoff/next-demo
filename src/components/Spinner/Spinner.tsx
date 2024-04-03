import { Loader } from 'react-feather'

import styles from './Spinner.module.css'

export default function Spinner({
  color,
  size,
}: {
  color: string
  size: number
}) {
  return (
    <div className={styles.wrapper}>
      <Loader color={color} size={size} />
    </div>
  )
}
