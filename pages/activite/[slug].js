import text from "../../content/main.json"

import Layout from "../../src/components/layout/Layout"
import markdownToHtml from "../../src/utils/markdownToHtml"
import {getAllPosts} from "../../src/api/post"
import {getAdjacentElements, getContentBySlug} from "../../src/api/common"
import Container from "../../src/components/ui/Container"
import Parser from "html-react-parser"
import PostNavigation from "../../src/components/ui/PostNavigation"
import Banner from "../../src/components/ui/Banner"
import {LinkButton} from "../../src/components/ui/Button"

export default function Activite({post}) {
    const bannerDatas = {
        nav: [{label: text.activities.title, url: "/activites"}],
    }

    return (
        <Layout seo={post?.seo}>
            <Banner title={post.title} {...bannerDatas} />
            <Container css={"prose py-24"}>
                {Parser(post.content)}
                {post.cta && <div className={"pt-8"}><LinkButton {...post.cta} /></div>}
            </Container>
            <PostNavigation data={post?.adjacent} type={"activite"} />
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const page = getContentBySlug(
        'post',
        params.slug,
        ['title', 'slug', 'options', 'date', 'cta', 'content', 'seo'],
    )
    const content = await markdownToHtml(page.content || '')
    const adjacent = getAdjacentElements(params.slug, getAllPosts())

    return {
        props: {
            post: { ...page, content, adjacent }
        },
    }
}

export async function getStaticPaths() {
    const pages = getAllPosts()

    return {
        paths: pages.map((page) => {
            return {
                params: { slug: page.slug }
            }
        }),
        fallback: false,
    }
}
