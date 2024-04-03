import React from 'react'
import Link from 'next/link'

import Card from '@/components/Card'

import styles from './BlogSummaryCard.module.css'

type BlogSummaryCardProps = {
  slug: string
  title: string
  abstract: string
}

export default function BlogSummaryCard({
  slug,
  title,
  abstract,
}: BlogSummaryCardProps) {
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
