import Layout from "../src/components/layout/Layout"
import {getAllPosts, getPostCategories} from "../src/api/post"
import Title from "../src/components/ui/Title"
import Container from "../src/components/ui/Container"
import Banner from "../src/components/ui/Banner"
import ReactMarkdown from "react-markdown"
import CategorySwitcher from "../src/components/widgets/CategorySwitcher"
import {useState} from "react"

const Activites = ({posts, cats}) => {
    const orderedCats = cats ? cats.sort((a,b) => a.localeCompare(b)) : []
    const [current, setCurrent] = useState(0)

    return (
        <Layout>
            <Banner title={"Nos activités"} />
            <CategorySwitcher cats={orderedCats} current={current} clickHandler={e => setCurrent(e)} />
            <section className={"flex flex-col"}>
                <h2 className={"sr-only"}>{"Nos activités"}</h2>
                {posts.map((post, i) => post.options.cat === cats[current] ? (
                    <article key={i} className={"bg-white odd:bg-light py-24"}>
                        <Container css={"space-y-8"}>
                            <Title>{post.title}</Title>
                            <div className={"prose ul-sep-strong"}>
                                <ReactMarkdown children={post.preview || post.content} />
                            </div>
                        </Container>
                    </article>
                ) : null)}
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
