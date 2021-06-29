import text from '../content/main.json'

import Layout from "../src/components/layout/Layout"
import Title from "../src/components/ui/Title"
import Container from "../src/components/ui/Container"
import Link from "next/link"
import {getAllThreads} from "../src/api/thread"
import Banner from "../src/components/ui/Banner"

const Dossiers = ({posts}) => {

    return (
        <Layout>
            <section>
                <Banner title={text.threads.title} />
                <Container css={"py-24"}>
                    <div className={"flex flex-col space-y-16"}>
                        {posts.map((post, i) => (
                            <article key={i}>
                                <Link href={`/dossier/${post.slug}`}>
                                    <a className={"flex flex-col w-full bg-light bg-opacity-50 shadow-large transition transform hover:-translate-y-1 hover:bg-white"}>
                                        <div className={"space-y-6 p-8 md:p-16"}>
                                            <Title>{post.title}</Title>
                                            <div className={"prose"}>
                                                {post.preview}
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default Dossiers

export async function getStaticProps({ params }) {
    const posts = getAllThreads()

    return {
        props: {
            posts: [...posts],
        },
    }
}
