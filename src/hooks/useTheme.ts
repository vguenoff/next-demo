import { useState } from 'react'
import Cookie from 'js-cookie'
// import { cookies } from 'next/headers'
import { COLOR_THEME_COOKIE_NAME, LIGHT_TOKENS, DARK_TOKENS } from '@/tokens'

export default function useTheme(initialTheme: string) {
  const [theme, setTheme] = useState(initialTheme)

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)

    // × You're importing a component that needs next/headers. That only works in a Server Component
    // cookies().set(COLOR_THEME_COOKIE_NAME, newTheme, { expires: 1000 })
    Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, { expires: 1000 })

    const newTokens = newTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS
    const root = document.documentElement

    root.setAttribute('data-color-theme', newTheme)

    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }

  return { theme, toggleTheme }
}
