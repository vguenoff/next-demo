import { Work_Sans, Spline_Sans_Mono } from 'next/font/google'
import { cookies } from 'next/headers'
import clsx from 'clsx'
import BlogSummaryCard from '@/components/BlogSummaryCard'

import { getBlogPostList } from '@/helpers/file-helpers'

import type { CSSProperties, PropsWithChildren } from 'react'

import {
  BLOG_TITLE,
  LIGHT_TOKENS,
  DARK_TOKENS,
  COLOR_THEME_COOKIE_NAME,
} from '@/tokens'

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

export default async function RootLayout({ children }: PropsWithChildren) {
  const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME)
  const theme = savedTheme?.value || 'light'
  const blogPostList: Record<string, string>[] = await getBlogPostList()

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={(theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS) as CSSProperties}
    >
      <body>
        <div className="flex">
          <aside className="sticky top-0 h-screen flex-[4] p-5 sm:p-10">
            <Header initialTheme={theme} />
            <ul>
              {blogPostList.map(({ slug, title }, i) => (
                <li key={slug}>
                  <BlogSummaryCard {...{ slug, title, i }} />
                </li>
              ))}
            </ul>
          </aside>
          <main className="min-h-[300px] flex-[8] rounded p-10 pl-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
