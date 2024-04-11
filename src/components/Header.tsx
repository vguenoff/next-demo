'use client'
import Link from 'next/link'
import { Home, Sun, Moon } from 'react-feather'

import useTheme from '@/hooks/useTheme'

import type { PropsWithChildren } from 'react'

export default function Header({
  initialTheme,
}: PropsWithChildren<{ initialTheme: string }>) {
  const { theme, toggleTheme } = useTheme(initialTheme)

  return (
    <header className="flex flex-col pb-10 pt-4 sm:flex-row ">
      <Link href="/" className="pb-3 pl-0 sm:pb-0">
        <Home />
      </Link>
      <button onClick={toggleTheme} className="sm:pl-4">
        {theme === 'light' ? <Moon size="1.5rem" /> : <Sun size="1.5rem" />}
      </button>
    </header>
  )
}
