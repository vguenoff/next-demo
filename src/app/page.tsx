import BlogSummaryCard from '@/components/BlogSummaryCard'

import { getBlogPostList } from '@/helpers/file-helpers'

export default async function Home() {
  const blogPostList: Record<string, string>[] = await getBlogPostList()

  return (
    <div>
      {blogPostList.map(({ slug, title, abstract }) => (
        <BlogSummaryCard key={slug} {...{ slug, title, abstract }} />
      ))}
    </div>
  )
}
