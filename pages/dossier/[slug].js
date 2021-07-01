import text from "../../content/main.json"

import Layout from "../../src/components/layout/Layout"
import markdownToHtml from "../../src/utils/markdownToHtml"
import {getContentBySlug} from "../../src/api/common"
import Container from "../../src/components/ui/Container"
import Parser from "html-react-parser"
import {getAllThreads} from "../../src/api/thread"
import Banner from "../../src/components/ui/Banner"

export default function Thread({post}) {
    const bannerDatas = {
        nav: [{label: text.threads.title, url: "/dossiers"}],
        img: {
            src: post.options?.use_banner ? post.banner : null,
            alt: "",
        },
        mask: post.options?.use_banner,
    }

    return (
        <Layout seo={post?.seo}>
            <Banner title={post.title} {...bannerDatas} />
            <Container css={"flex flex-col space-y-16 md:space-y-0 md:flex-row md:items-start md:space-x-16 py-24"}>
                {(post.banner && !post.options?.use_banner) &&
                    <picture className={"shadow-large md:w-96 flex-shrink-0 xl:w-1/3"}>
                        <img className={""} src={post.banner} alt={""} loading={"lazy"} />
                    </picture>
                }
                <div className={"flex-grow prose"}>
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
        ['title', 'preview', 'slug', 'banner', 'date', 'content', 'seo', 'options']
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
