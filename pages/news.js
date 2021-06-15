import text from '../content/main.json'
import Layout from "../src/components/layout/Layout"
import {getAllPosts} from "../src/api/post"
import Title from "../src/components/ui/Title"
import Container from "../src/components/ui/Container"
import {LinkButton} from "../src/components/ui/Button"

const News = ({posts}) => {

    return (
        <Layout>
            <Container>
                <section className={"space-y-16"}>
                    <Title level={1} size={1}>
                        News
                    </Title>
                    <div className={"flex flex-col space-y-16"}>
                        {posts.map((post, i) => (
                            <article key={i} className={"space-y-4"}>
                                <Title>{post.title}</Title>
                                <div className={"prose"}>
                                    {post.preview}
                                </div>
                                <LinkButton href={`/news/${post.slug}`}>
                                    {text.viewMore}
                                </LinkButton>
                            </article>
                        ))}
                    </div>
                </section>
            </Container>
        </Layout>
    )
}

export default News

export async function getStaticProps({ params }) {
    const posts = getAllPosts()

    return {
        props: {
            posts: [...posts],
        },
    }
}
