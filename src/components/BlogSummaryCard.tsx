import Link from 'next/link'

import Card from '@/components/Card'

type BlogSummaryCardProps = {
  slug: string
  title: string
  abstract: string
}

export default function BlogSummaryCard({ slug, title }: BlogSummaryCardProps) {
  const href = `/${slug}`

  return (
    <Card>
      <Link href={href}>{title}</Link>
      <p>
        <Link href={href}>
          Continue reading <span>→</span>
        </Link>
      </p>
    </Card>
  )
}
