import React from 'react'
import Link from 'next/link'

import Card from '@/components/Card'

import styles from './BlogSummaryCard.module.css'

export default function BlogSummaryCard({
  slug,
  title,
  abstract,
}: {
  slug: string
  title: string
  abstract: string
}) {
  const href = `/${slug}`

  return (
    <Card className={styles.wrapper}>
      <Link href={href} className={styles.title}>
        {title}
      </Link>
      <p>
        {abstract}{' '}
        <Link href={href} className={styles.continueReadingLink}>
          Continue reading <span className={styles.arrow}>→</span>
        </Link>
      </p>
    </Card>
  )
}
