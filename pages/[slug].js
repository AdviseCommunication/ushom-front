import {useRouter} from "next/router"
import markdownToHtml from "../src/utils/markdownToHtml"
import {getAllPages} from "../src/api/page"
import FourOhFour from "./404"
import Layout from "../src/components/layout/Layout"

import {getContentBySlug} from "../src/api/common"

export default function Page({ page }) {
    const router = useRouter()
    if (!router.isFallback && !page?.slug) {
        return <FourOhFour statusCode={404} />
    }
    const seo = { title: page?.title, description: page?.description }

    return (
        <Layout seo={seo} footerCss={"mt-16"}>

        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const page = getContentBySlug('page', params.slug, [
        'title',
        'slug',
        'description',
        'content',
    ])
    const content = await markdownToHtml(page.content || '')

    return {
        props: {
            page: {
                ...page,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const pages = getAllPages(['slug'])

    return {
        paths: pages.map((page) => {
            return {
                params: {
                    slug: page.slug,
                },
            }
        }),
        fallback: false,
    }
}
