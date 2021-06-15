import data from "../content/home.json"

import Layout from "../src/components/layout/Layout"
import Container from "../src/components/ui/Container"
import {getLatestPosts} from "../src/api/post"
import Banner from "../src/components/ui/Banner"

const Home = ({posts}) => {

    return (
        <Layout>
            <Banner {...data.banner} />
            <Container css={"flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-between"}>

            </Container>
        </Layout>
    )
}

export default Home

export async function getStaticProps(context) {
    const posts = getLatestPosts(3)

    return {
        props: {
            posts: [...posts],
        },
    }
}
