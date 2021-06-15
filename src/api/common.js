import fs from 'fs'
import { join } from 'path'
import matter from "gray-matter"

const pagesDirectory = join(process.cwd(), 'content/pages')
const postsDirectory = join(process.cwd(), 'content/news')
const directories = {
    'page': pagesDirectory,
    'post': postsDirectory,
}

export function getContentBySlug(type, slug, fields = []) {
    const path = directories[type] || directories['post']
    const realSlug = slug?.replace(/\.md$/, '')
    const fullPath = join(path, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data, content } = matter(fileContents)
    const items = { filename: realSlug }

    fields.forEach((field) => {
        if (data[field]) {
            items[field] = data[field]
        }
        if (field === 'content') {
            items[field] = content
        }
        if (field === 'slug') {
            items[field] = realSlug
        }
    })

    return items
}
