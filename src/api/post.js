import fs from 'fs'
import { join } from 'path'
import {getContentBySlug} from "./common"

const postsDirectory = join(process.cwd(), 'content/activities')
const postsFields = ['title', 'preview', 'date', 'slug', 'options', 'content']

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getAllPosts(fields = postsFields) {
    const slugs = getPostSlugs()

    const posts = slugs.map((slug) => getContentBySlug('post', slug, fields))
    const filtered = posts.filter((item) => !item.options.private)
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

    return filtered
}

export function getPostCategories() {
    const all = getAllPosts()
    const cats = all.map(obj => obj.options.cat)

    return [...new Set(cats)]
}

export function getLatestPosts(number = 3) {
    const slugs = getPostSlugs()
    const posts = slugs.map(
        (slug) => getContentBySlug('post', slug, postsFields)
    )

    const filtered = posts.filter((item) => !item.options.private)
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

    return filtered.slice(0,number)
}
