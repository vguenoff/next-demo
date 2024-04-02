import BlogSummaryCard from '@/components/BlogSummaryCard'

import styles from './homepage.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* TODO: Iterate over the data read from the file system! */}
      <BlogSummaryCard
        slug="example"
        title="Hello world!"
        abstract="This is a placeholder, an example which shows how the “BlogSummaryCard” component should be used. You'll want to swap this out based on the data from the various MDX files!"
      />
    </div>
  )
}
