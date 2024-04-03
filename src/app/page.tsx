import BlogSummaryCard from '@/components/BlogSummaryCard'

import { getBlogPostList } from '@/helpers/file-helpers'

import styles from './homepage.module.css'

export default async function Home() {
  const blogPostList: Record<string, string>[] = await getBlogPostList()

  return (
    <div className={styles.wrapper}>
      {blogPostList.map(({ slug, title, abstract }) => (
        <BlogSummaryCard key={slug} {...{ slug, title, abstract }} />
      ))}
    </div>
  )
}
