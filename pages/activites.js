import Layout from "../src/components/layout/Layout"
import {getAllPosts, getPostCategories} from "../src/api/post"
import Title from "../src/components/ui/Title"
import Container from "../src/components/ui/Container"
import Banner from "../src/components/ui/Banner"
import ReactMarkdown from "react-markdown"
import CategorySwitcher from "../src/components/widgets/CategorySwitcher"
import {useState} from "react"

const Activites = ({posts, cats}) => {
    const [current, setCurrent] = useState(0)

    return (
        <Layout>
            <Banner title={"Nos activités"} />
            <CategorySwitcher cats={cats} current={current} clickHandler={e => setCurrent(e)} />
            <section className={"flex flex-col"}>
                <h2 className={"sr-only"}>{"Nos activités"}</h2>
                {posts.map((post, i) => (
                    <article key={i} className={"bg-white odd:bg-light py-24"}>
                        <Container css={"space-y-4"}>
                            <Title>{post.title}</Title>
                            <div className={"prose"}>
                                <ReactMarkdown children={post.preview || post.content} />
                            </div>
                        </Container>
                    </article>
                ))}
            </section>
        </Layout>
    )
}

export default Activites

export async function getStaticProps({ params }) {
    const posts = getAllPosts()
    const cats = getPostCategories()

    return {
        props: {
            posts: [...posts],
            cats: cats,
        },
    }
}
