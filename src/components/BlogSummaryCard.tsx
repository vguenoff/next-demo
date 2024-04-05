import Link from 'next/link'

type BlogSummaryCardProps = {
  slug: string
  title: string
  i: number
}

export default function BlogSummaryCard({
  slug,
  title,
  i,
}: BlogSummaryCardProps) {
  return (
    <Link href={`/${slug}`}>
      <div className="hidden sm:block">
        <p className="m-0">{title}</p>
        <p className="to-blue-300">→</p>
      </div>
      <p className="h-5 w-5 shrink-0 grow-0 rounded-full border to-blue-300 text-center text-xs font-bold leading-5 sm:hidden">
        {i + 1}
      </p>
    </Link>
  )
}
