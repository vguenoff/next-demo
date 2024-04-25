import { BLOG_TITLE } from '@/tokens'
import Link from 'next/link'

export default function Page() {
  // throw new Error('Test the error page')

  return (
    <section className="flex flex-col">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight  sm:text-5xl">
          {BLOG_TITLE}
        </h1>
        <p className="mt-6 text-lg leading-8 ">
          We want to explore new Next.js features because moving to the App
          Router may be the first time using new React features that Next.js
          builds on top of such as Server Components, Suspense, and more. When
          combined with new Next.js features such as special files and layouts,
          migration means new concepts, mental models, and behavioral changes to
          learn.
        </p>
        <div className="mt-10 flex items-center  gap-x-6">
          <Link
            href="/01-app-router"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold  text-white shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
          >
            Get started
          </Link>
          <Link
            href="https://github.com/vguenoff/next-demo"
            target="_blank"
            className="text-sm font-semibold leading-6 text-white"
          >
            Demo source code <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>{' '}
    </section>
  )
}
