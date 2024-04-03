import { Work_Sans, Spline_Sans_Mono } from 'next/font/google'
import { cookies } from 'next/headers'
import clsx from 'clsx'

import type { CSSProperties, PropsWithChildren } from 'react'

import {
  BLOG_TITLE,
  LIGHT_TOKENS,
  DARK_TOKENS,
  COLOR_THEME_COOKIE_NAME,
} from '@/constants'

import Header from '@/components/Header'
import './styles.css'

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
})

const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
})

export const metadata = {
  title: BLOG_TITLE,
  description: 'A wonderful blog about JavaScript',
}

export default function RootLayout({ children }: PropsWithChildren) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME)
  const theme = savedTheme?.value || 'light'

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={(theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS) as CSSProperties}
    >
      <body>
        <Header initialTheme={theme} />
        <main>{children}</main>
      </body>
    </html>
  )
}
