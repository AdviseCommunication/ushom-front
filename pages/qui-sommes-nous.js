import data from "../content/about.json"

import Layout from "../src/components/layout/Layout"
import Banner from "../src/components/ui/Banner"
import WidgetText from "../src/components/ui/widgets/WidgetText"
import Missions from "../src/components/widgets/Missions"

const QuiSommesNous = () => {

    return (
        <Layout>
            <Banner title={data.title} />
            <WidgetText {...data.intro} />
            <Missions />
        </Layout>
    )
}

export default QuiSommesNous
