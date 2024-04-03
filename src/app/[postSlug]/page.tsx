import { MDXRemote } from 'next-mdx-remote/rsc'

import BlogHero from '@/components/BlogHero'
import { loadBlogPost } from '@/helpers/file-helpers'
import { BLOG_TITLE } from '@/constants'
// import COMPONENT_MAP from '@/helpers/mdx-components'

import styles from './postSlug.module.css'

export async function generateMetadata({
  params,
}: {
  params: { postSlug: string }
}) {
  const { frontmatter } = await loadBlogPost(params.postSlug)

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  }
}

export default async function BlogPost({
  params,
}: {
  params: { postSlug: string }
}) {
  const blogPost = await loadBlogPost(params.postSlug)

  const { frontmatter, content } = blogPost
  const { title, abstract } = frontmatter

  return (
    <article className={styles.wrapper}>
      <BlogHero {...{ title }} />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          // components={COMPONENT_MAP}
        />
      </div>
    </article>
  )
}
