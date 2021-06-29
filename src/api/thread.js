import fs from 'fs'
import { join } from 'path'
import {getContentBySlug} from "./common"

const threadsDirectory = join(process.cwd(), 'content/threads')
const threadsFields = ['title', 'preview', 'options', 'slug', 'seo', 'date', 'banner', 'content']

export function getThreadSlugs() {
    return fs.readdirSync(threadsDirectory)
}

export function getAllThreads(fields = threadsFields) {
    const slugs = getThreadSlugs()

    const posts = slugs.map((slug) => getContentBySlug('thread', slug, fields))
    const filtered = posts.filter((item) => !item.options.private)
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

    return filtered
}
