import fs from 'fs'
import { join } from 'path'
import {getContentBySlug} from "./common"

const pagesDirectory = join(process.cwd(), 'content/pages')

export function getPageSlugs() {
    return fs.readdirSync(pagesDirectory)
}

export function getAllPages(fields = []) {
    const slugs = getPageSlugs()
    const pages = slugs.map((slug) => getContentBySlug('page', slug, fields))

    return pages
}
