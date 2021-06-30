import text from "../content/main.json"

import Layout from "../src/components/layout/Layout"
import Title from "../src/components/ui/Title"
import Container from "../src/components/ui/Container"
import Banner from "../src/components/ui/Banner"
import ReactMarkdown from "react-markdown"
import {getAllEvents} from "../src/api/events"

const Evenements = ({posts}) => {

    return (
        <Layout>
            <Banner title={text.events.title} />
            <section className={"flex flex-col"}>
                <h2 className={"sr-only"}>{text.events.title}</h2>
                {posts.map((post, i) => (
                    <article key={i} className={"bg-white odd:bg-light py-24"}>
                        <Container css={"space-y-8"}>
                            <Title>{post.title}</Title>
                            <div className={"prose ul-sep-strong"}>
                                <ReactMarkdown children={post.content} />
                            </div>
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
