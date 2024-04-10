'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()
  const href = `/${slug}`

  return (
    <Link {...{ href }} prefetch={true}>
      <div className="hidden sm:block">
        <p className="m-0">{title}</p>
        <p>
          {pathname === href ? <span className="text-red-400">→</span> : '⇢'}
        </p>
      </div>
      <p className="h-5 w-5 shrink-0 grow-0 rounded-full border to-blue-300 text-center text-xs font-bold leading-5 sm:hidden">
        {i + 1}
      </p>
    </Link>
  )
}
