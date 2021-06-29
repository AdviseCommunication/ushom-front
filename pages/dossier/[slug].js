import Layout from "../../src/components/layout/Layout"
import markdownToHtml from "../../src/utils/markdownToHtml"
import {getContentBySlug} from "../../src/api/common"
import Container from "../../src/components/ui/Container"
import Parser from "html-react-parser"
import {getAllThreads} from "../../src/api/thread"
import Banner from "../../src/components/ui/Banner"

export default function Thread({post}) {

    return (
        <Layout seo={post?.seo}>
            <Banner title={post.title} />
            <Container>
                <div className={"prose py-8"}>
                    {Parser(post.content)}
                </div>
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const page = getContentBySlug(
        'thread',
        params.slug,
        ['title', 'slug', 'preview', 'date', 'content', 'seo']
    )
    const content = await markdownToHtml(page.content || '')

    return {
        props: {
            post: { ...page, content }
        },
    }
}

export async function getStaticPaths() {
    const pages = getAllThreads()

    return {
        paths: pages.map((page) => {
            return {
                params: { slug: page.slug }
            }
        }),
        fallback: false,
    }
}
