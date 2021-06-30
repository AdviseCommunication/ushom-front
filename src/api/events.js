import fs from 'fs'
import { join } from 'path'
import {getContentBySlug} from "./common"

const eventsDirectory = join(process.cwd(), 'content/events')
const eventsFields = ['title', 'preview', 'date', 'slug', 'options', 'content']

export function getEventSlugs() {
    return fs.readdirSync(eventsDirectory)
}

export function getAllEvents(fields = eventsFields) {
    const slugs = getEventSlugs()

    const posts = slugs.map((slug) => getContentBySlug('event', slug, fields))
    const filtered = posts.filter((item) => !item.options.private)
        .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

    return filtered
}

export function getAdjacentEvents(slug) {
    const all = getAllEvents()

    let prev, next
    all.find((obj,i) => {
        next = all[i-1] || null
        prev = all[i+1] || null

        return obj.filename === slug
    })

    return {prev: prev, next: next}
}
