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
        <div className="flex gap-8">
          <aside className="flex-[2] h-screen sticky top-0 p-10">
            <Header initialTheme={theme} />
            <ul>
              {blogPostList.map(({ slug, title, abstract }) => (
                <li key={slug}>
                  <BlogSummaryCard {...{ slug, title, abstract }} />
                </li>
              ))}
            </ul>
          </aside>
          <main className="flex-[8] p-10 rounded min-h-[300px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
