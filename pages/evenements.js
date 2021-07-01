import text from "../content/main.json"

import Layout from "../src/components/layout/Layout"
import Title from "../src/components/ui/Title"
import Container from "../src/components/ui/Container"
import Banner from "../src/components/ui/Banner"
import ReactMarkdown from "react-markdown"
import {getAllEvents} from "../src/api/events"
import {LinkButton} from "../src/components/ui/Button"
import Parser from "html-react-parser"

const Evenements = ({posts}) => {

    return (
        <Layout>
            <Banner title={text.events.title} />
            <section className={"flex flex-col"}>
                <h2 className={"sr-only"}>{text.events.title}</h2>
                {posts.map((post, i) => (
                    <article key={i} className={"bg-white odd:bg-light py-24"}>
                        <Container css={"flex flex-col items-center lg:flex-row"}>
                            <div className={"w-full space-y-8"}>
                                <Title>{Parser(post.title)}</Title>
                                <div className={"prose ul-sep-strong"}>
                                    <ReactMarkdown children={post.content} />
                                </div>
                            </div>
                            {post.cta &&
                                <div className={"flex-shrink-0 lg:pl-16"}><LinkButton {...post.cta} /></div>
                            }
                        </Container>
                    </article>
                ))}
            </section>
        </Layout>
    )
}

export default Evenements

export async function getStaticProps({ params }) {
    const posts = getAllEvents()

    return {
        props: {
            posts: [...posts],
        },
    }
}
