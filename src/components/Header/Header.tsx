'use client'
import { useState } from 'react'
import clsx from 'clsx'
import Cookie from 'js-cookie'
import { Sun, Moon } from 'react-feather'
import Logo from '@/components/Logo'
import { COLOR_THEME_COOKIE_NAME, LIGHT_TOKENS, DARK_TOKENS } from '@/constants'

import type { PropsWithChildren } from 'react'

import styles from './Header.module.css'

export default function Header({
  initialTheme,
  className,
}: PropsWithChildren<{ initialTheme: string; className?: string }>) {
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
    <header className={clsx(styles.wrapper, className)}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action} onClick={handleToggleTheme}>
          {theme === 'light' ? <Moon size="1.5rem" /> : <Sun size="1.5rem" />}
        </button>
      </div>
    </header>
  )
}
