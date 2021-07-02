import text from '../content/main.json'

import Layout from "../src/components/layout/Layout"
import Title from "../src/components/ui/Title"
import Container from "../src/components/ui/Container"
import Link from "next/link"
import {getAllThreads} from "../src/api/thread"
import Banner from "../src/components/ui/Banner"
import Rolling from "../src/images/rolling.svg"

const Dossiers = ({posts}) => {

    return (
        <Layout>
            <section>
                <Banner title={text.threads.title} />
                <Container css={"py-24"}>
                    <div className={"grid grid-flow-row auto-rows-fr gap-16"}>
                        {posts.map((post, i) => (
                            <article key={i} className={""}>
                                <Link href={`/dossier/${post.slug}`}>
                                    <a className={"h-full flex flex-col md:flex-row w-full bg-light bg-opacity-50 shadow-large transition transform hover:-translate-y-1 hover:bg-white"}>
                                        {post.banner &&
                                            <div className={"bg-gray relative pb-3/4 md:pb-0 md:w-96 flex-shrink-0"}>
                                                <Rolling className={"text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"} />
                                                <picture>
                                                    <img className={"absolute inset-0 h-full w-full object-cover"} src={post.banner} alt={""} loading={"lazy"} />
                                                </picture>
                                            </div>
                                        }
                                        <div className={"flex-grow space-y-6 p-8 md:p-16"}>
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
