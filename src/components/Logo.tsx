import Link from 'next/link'

import { BLOG_TITLE } from '@/constants'

export default function Logo({ mobileAlignment = 'left' }) {
  return (
    <Link href="/" data-mobile-alignment={mobileAlignment}>
      {BLOG_TITLE}
    </Link>
  )
}
