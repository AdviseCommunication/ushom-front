import data from "../content/about.json"

import Layout from "../src/components/layout/Layout"
import Banner from "../src/components/ui/Banner"
import WidgetText from "../src/components/ui/widgets/WidgetText"
import Missions from "../src/components/widgets/Missions"
import Organizational from "../src/components/widgets/Organizational"
import Interlocutors from "../src/components/widgets/Interlocutors"
import Landlords from "../src/components/widgets/Landlords"

const QuiSommesNous = () => {

    return (
        <Layout>
            <Banner {...data.banner} />
            <WidgetText {...data.intro} />
            <Missions />
            <Organizational />
            <Interlocutors />
            <Landlords />
        </Layout>
    )
}

export default QuiSommesNous
