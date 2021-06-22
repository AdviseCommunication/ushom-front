import {useRouter} from "next/router"
import markdownToHtml from "../src/utils/markdownToHtml"
import {getAllPages} from "../src/api/page"
import FourOhFour from "./404"
import Layout from "../src/components/layout/Layout"
import {getContentBySlug} from "../src/api/common"
import PostDate from "../src/components/ui/PostDate"
import Container from "../src/components/ui/Container"
import Parser from "html-react-parser"
import Banner from "../src/components/ui/Banner"

export default function Page({ page }) {
    const router = useRouter()
    if (!router.isFallback && !page?.slug) {
        return <FourOhFour statusCode={404} />
    }
    const seo = { title: page?.title, description: page?.description }

    return (
        <Layout seo={seo}>
            <Banner title={page.title} />
            <Container css={"py-24 space-y-4"}>
                <PostDate data={page.date} />
                <div className={"prose"}>
                    {Parser(page.content)}
                </div>
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const page = getContentBySlug('page', params.slug, [
        'date',
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
