import data from "../content/home.json"
import mainData from "../content/main.json"

import Layout from "../src/components/layout/Layout"
import {getLatestPosts} from "../src/api/post"
import Banner from "../src/components/ui/Banner"
import WidgetText from "../src/components/ui/widgets/WidgetText"
import LandlordsMap from "../src/components/widgets/LandlordsMap"
import Features from "../src/components/widgets/Features"
import FadeIn from "../src/components/ui/animations/FadeIn"
import Territories from "../src/components/widgets/Territories"
import WorldMap from "../src/components/widgets/WorldMap"
import ActivityReport from "../src/components/widgets/ActivityReport"
import Act from "../src/components/widgets/Act"
import HomeCta from "../src/components/widgets/HomeCta"

const Home = ({posts}) => {
    const seo = {
        title: data.seo?.title || mainData.app.siteName,
        description: data.seo?.description || mainData.app.description,
    }

    return (
        <Layout seo={seo}>
            <Banner {...data.banner} />
            <WidgetText {...data.about} bg={"light"}>
                <FadeIn css={"w-full md:w-1/2 flex-shrink-0"} delay={0.5}>
                    <LandlordsMap />
                </FadeIn>
            </WidgetText>
            <Features />
            <WorldMap />
            <ActivityReport />
            <Act />
            <HomeCta />
            <Territories {...data.territories} />
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
