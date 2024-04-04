import { MDXRemote } from 'next-mdx-remote/rsc'

import BlogHero from '@/components/BlogHero'
import { loadBlogPost } from '@/helpers/file-helpers'
import { BLOG_TITLE } from '@/tokens'
import COMPONENT_MAP from '@/helpers/mdx-components'

type Params = {
  params: { postSlug: string }
}

export async function generateMetadata({ params }: Params) {
  const { frontmatter } = await loadBlogPost(params.postSlug)

  return {
    title: `${frontmatter.title} • ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  }
}

export default async function BlogPost({ params }: Params) {
  const blogPost = await loadBlogPost(params.postSlug)

  const { frontmatter, content } = blogPost
  const { title } = frontmatter

  return (
    <article>
      <BlogHero {...{ title }} />
      <div>
        <MDXRemote source={content} components={COMPONENT_MAP} />
      </div>
    </article>
  )
}
