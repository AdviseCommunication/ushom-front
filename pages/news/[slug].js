import Layout from "../../src/components/layout/Layout"
import markdownToHtml from "../../src/utils/markdownToHtml"
import {getAdjacentPosts, getAllPosts} from "../../src/api/post"
import {getContentBySlug} from "../../src/api/common"
import Title from "../../src/components/ui/Title"
import Container from "../../src/components/ui/Container"
import Parser from "html-react-parser"
import PostNavigation from "../../src/components/ui/PostNavigation"

export default function Post({post}) {

    return (
        <Layout seo={post?.seo}>
            <Container>
                <Title level={1} size={1}>{post.title}</Title>
                <div className={"prose py-8"}>
                    {Parser(post.content)}
                </div>
                <footer>
                    <PostNavigation data={post?.adjacent} />
                </footer>
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const page = getContentBySlug(
        'post',
        params.slug,
        ['title', 'slug', 'preview', 'date', 'content', 'seo']
    )
    const content = await markdownToHtml(page.content || '')
    const adjacent = getAdjacentPosts(params.slug)

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
