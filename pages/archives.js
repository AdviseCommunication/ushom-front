import {getAllPosts} from "../src/api/post"
import {getAllEvents} from "../src/api/events"
import Layout from "../src/components/layout/Layout"
import Banner from "../src/components/ui/Banner"
import Container from "../src/components/ui/Container"
import {useState} from "react"
import Parser from "html-react-parser"
import Title from "../src/components/ui/Title"
import ReactMarkdown from "react-markdown"

const Archives = ({posts}) => {
    const [active, setActive] = useState(0)

    return (
        <Layout>
            <section className={"flex flex-col flex-grow"}>
                <Banner title={"Archives"} />
                <div className={"flex flex-col flex-grow"}>
                    <Container css={"flex flex-col flex-grow md:flex-row"}>
                        <nav className={"bg-light md:bg-transparent relative -mx-8 md:mx-0 p-8 md:py-24 md:w-48 lg:w-64 2xl:w-96 flex-shrink-0"}>
                            <span className={"hidden md:block absolute w-screen h-full top-0 right-full bg-light md:-mr-48 lg:-mr-64 2xl:-mr-96 shadow-lg pointer-events-none"} />
                            <ul className={"sticky top-32 flex flex-wrap gap-4 md:flex-col md:gap-0 md:space-y-4"}>
                                {posts.map((d,i) => (
                                    <li key={i} className={""}>
                                        <button
                                            type={"button"}
                                            className={[
                                                "group font-bold text-xl md:text-2xl flex items-center",
                                                "py-3 px-6 bg-white shadow-sm md:p-0 md:bg-transparent md:shadow-none",
                                                "focus:text-primary focus:outline-none",
                                                (active === i ? "text-primary ring-1 ring-primary md:ring-0" : null),
                                            ].join(' ')}
                                            onClick={() => setActive(i)}
                                        >
                                            <span className={"tabular-nums md:min-w-24 lg:min-w-32 text-center md:text-left"}>{d.date}</span>
                                            <svg className={["hidden md:block group-hover:text-primary group-focus:text-black group-hover:translate-x-1 flex-shrink-0 fill-current w-4 transition transform", (active === i ? "translate-x-1" : null)].join(' ')} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d={"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"} />
                                            </svg>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className={""}>
                            {posts[active].posts.map((elx,x) => (
                                <article key={x} className={"-mx-8 px-8 md:mx-0 md:px-0 md:w-full space-y-8 py-24 md:shadow-r-screen text-white even:text-light bg-white even:bg-light md:pl-8 lg:pl-16"}>
                                    <Title>{Parser(elx.title)}</Title>
                                    <div className={"text-black prose ul-sep-strong"}>
                                        <ReactMarkdown children={elx.content} />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Container>
                </div>
            </section>
        </Layout>
    )
}

export default Archives

export async function getStaticProps(context) {
    const activities = getAllPosts()
    const events = getAllEvents()

    const items = [...activities, ...events].reduce((group, item) => {
        const date = item.date.slice(0,4)
        if( !group[date] ) {
            group[date] = []
        }
        group[date].push(item)
        return group
    }, [])

    const posts = Object.keys(items).map((date) => {
        return {
            date,
            posts: items[date]
        }
    }).sort((a,b) => (a.date > b.date ? -1 : 1))

    return {
        props: {
            posts: posts,
        },
    }
}
