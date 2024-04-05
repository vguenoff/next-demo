'use client'
import { useState } from 'react'
import Cookie from 'js-cookie'
import { Home, Sun, Moon } from 'react-feather'
import { COLOR_THEME_COOKIE_NAME, LIGHT_TOKENS, DARK_TOKENS } from '@/tokens'

import type { PropsWithChildren } from 'react'

import Link from 'next/link'

export default function Header({
  initialTheme,
}: PropsWithChildren<{ initialTheme: string }>) {
  const [theme, setTheme] = useState(initialTheme)

  function handleToggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)

    Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
      expires: 1000,
    })

    const newTokens = newTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS
    const root = document.documentElement

    root.setAttribute('data-color-theme', newTheme)

    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }

  return (
    <header className="flex flex-col pb-10 pt-4 sm:flex-row ">
      <Link href="/" className="pb-3 pl-0">
        <Home />
      </Link>
      <button onClick={handleToggleTheme} className="sm:pl-4">
        {theme === 'light' ? <Moon size="1.5rem" /> : <Sun size="1.5rem" />}
      </button>
    </header>
  )
}
