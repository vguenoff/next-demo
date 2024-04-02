import React from 'react'
import { Code } from 'bright'

import theme from './theme'
import styles from './CodeSnippet.module.css'

export default function CodeSnippet(props: any) {
  return <Code {...props} theme={theme} className={styles.wrapper} />
}
