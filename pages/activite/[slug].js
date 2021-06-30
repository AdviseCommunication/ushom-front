import Layout from "../../src/components/layout/Layout"
import markdownToHtml from "../../src/utils/markdownToHtml"
import {getAllPosts} from "../../src/api/post"
import {getAdjacentElements, getContentBySlug} from "../../src/api/common"
import Container from "../../src/components/ui/Container"
import Parser from "html-react-parser"
import PostNavigation from "../../src/components/ui/PostNavigation"
import Banner from "../../src/components/ui/Banner"

export default function Activite({post}) {
    const bannerDatas = {
        nav: [{label: "", url: "/dossiers"}],
    }

    return (
        <Layout seo={post?.seo}>
            <Banner title={post.title} />
            <Container css={"prose py-24"}>
                {Parser(post.content)}
            </Container>
            <PostNavigation data={post?.adjacent} type={"activite"} />
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const page = getContentBySlug(
        'post',
        params.slug,
        ['title', 'slug', 'preview', 'date', 'content', 'seo'],
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
