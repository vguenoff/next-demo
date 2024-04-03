import React, { PropsWithChildren } from 'react'

export default function BlogHero({
  title,
}: PropsWithChildren<{
  title: string
}>) {
  return (
    <header>
      <div>
        <h1>{title}</h1>
      </div>
    </header>
  )
}
