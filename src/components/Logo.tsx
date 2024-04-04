import Link from 'next/link'

import { Home } from 'react-feather'

export default function Logo({ mobileAlignment = 'left' }) {
  return (
    <Link href="/" data-mobile-alignment={mobileAlignment}>
      <Home />
    </Link>
  )
}
