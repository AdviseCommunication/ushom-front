import fs from 'fs'
import { join } from 'path'
import {getContentBySlug} from "./common"

const postsDirectory = join(process.cwd(), 'content/news')
const postsFields = ['title', 'preview', 'date', 'slug', 'private', 'content']

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getAllPosts(fields = postsFields) {
    const slugs = getPostSlugs()

    const posts = slugs.map((slug) => getContentBySlug('post', slug, fields))
    const filtered = posts.filter((item) => !item.private)
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

    return filtered
}

export function getLatestPosts(number = 3) {
    const slugs = getPostSlugs()
    const posts = slugs.map(
        (slug) => getContentBySlug('post', slug, postsFields)
    )

    const filtered = posts.filter((item) => !item.private)
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

    return filtered.slice(0,number)
}

export function getAdjacentPosts(slug) {
    const all = getAllPosts()

    let prev, next
    all.find((obj,i) => {
        next = all[i-1] || null
        prev = all[i+1] || null

        return obj.filename === slug
    })

    return {prev: prev, next: next}
}
