import fs from 'fs'
import { join } from 'path'
import matter from "gray-matter"

const eventsDirectory = join(process.cwd(), 'content/events')
const pagesDirectory = join(process.cwd(), 'content/pages')
const postsDirectory = join(process.cwd(), 'content/activities')
const threadsDirectory = join(process.cwd(), 'content/threads')
const directories = {
    'event': eventsDirectory,
    'page': pagesDirectory,
    'post': postsDirectory,
    'thread': threadsDirectory,
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

export function getAdjacentElements(slug, all = []) {
    let prev, next
    all.find((obj,i) => {
        next = all[i-1] || null
        prev = all[i+1] || null

        return obj.filename === slug
    })

    return {prev: prev, next: next}
}
