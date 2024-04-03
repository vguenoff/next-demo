import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8')
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath))
}

export async function getBlogPostList() {
  const fileNames = await readDirectory('/content')
  const blogPosts = []

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`)

    const { data: frontmatter } = matter(rawContent)

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      ...frontmatter,
    })
  }

  return blogPosts
}

export async function loadBlogPost(slug: string) {
  const rawContent = await readFile(`/content/${slug}.mdx`)
  const { data: frontmatter, content } = matter(rawContent)

  return { frontmatter, content }
}
