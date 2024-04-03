import Link from 'next/link'

import { BLOG_TITLE } from '@/constants'

import styles from './Logo.module.css'

export default function Logo({ mobileAlignment = 'left' }) {
  return (
    <Link
      href="/"
      className={styles.wrapper}
      data-mobile-alignment={mobileAlignment}
    >
      {BLOG_TITLE}
    </Link>
  )
}
