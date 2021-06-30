import text from "../../content/main.json"

import Layout from "../../src/components/layout/Layout"
import markdownToHtml from "../../src/utils/markdownToHtml"
import Container from "../../src/components/ui/Container"
import Parser from "html-react-parser"
import Banner from "../../src/components/ui/Banner"
import PostNavigation from "../../src/components/ui/PostNavigation"
import {getAllEvents} from "../../src/api/events"
import {getAdjacentElements, getContentBySlug} from "../../src/api/common"

export default function Evenement({post}) {
    const bannerDatas = {
        nav: [{label: text.events.title, url: "/evenements"}],
    }

    return (
        <Layout seo={post?.seo}>
            <Banner title={post.title} {...bannerDatas} />
            <Container css={"prose py-24"}>
                {Parser(post.content)}
            </Container>
            <PostNavigation data={post?.adjacent} type={"evenement"} />
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const page = getContentBySlug(
        'event',
        params.slug,
        ['title', 'slug', 'options', 'date', 'content', 'seo'],
    )
    const content = await markdownToHtml(page.content || '')
    const adjacent = getAdjacentElements(params.slug, getAllEvents())

    return {
        props: {
            post: { ...page, content, adjacent }
        },
    }
}

export async function getStaticPaths() {
    const pages = getAllEvents()

    return {
        paths: pages.map((page) => {
            return {
                params: { slug: page.slug }
            }
        }),
        fallback: false,
    }
}
