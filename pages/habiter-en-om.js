import text from "../content/main.json"
import data from "../content/datas/landlords.json"

import slugify from "../src/utils/slugify"
import Parser from "html-react-parser"
import {useState} from "react"

import Layout from "../src/components/layout/Layout"
import Banner from "../src/components/ui/Banner"
import Container from "../src/components/ui/Container"
import Title from "../src/components/ui/Title"
import ListBloc from "../src/components/ui/ListBloc"
import ListLessor from "../src/components/ui/ListLessor"

const HabiterEnOm = () => {
    const [active, setActive] = useState(0)
    const landlords = data.items.map(zone => zone.items.map(land => land))
                        .flat()
                        .sort((a,b) => a.name.localeCompare(b.name))

    const banner = {
        title: text.habitat.title,
        nav: landlords.map(land => {
            return {label: land.name, clickHandler: (e) => setActive(e)}
        }),
        activeNav: active,
    }

    return (
        <Layout>
            <Banner {...banner} />
            <section>
                <article className={"py-24 bg-white even:bg-light"} id={slugify(landlords[active].name)}>
                    <Container css={"space-y-16"}>
                        <Title css={"text-center"}>{Parser(landlords[active].name)}</Title>
                        <ListBloc
                           guide={text.habitat.presentation}
                           datas={landlords[active].presentation}
                           title={text.habitat.presentationTitle}
                        />
                        {landlords[active].bailleurs.map((b,bx) => (
                            <ListLessor
                                key={bx}
                                guide={text.habitat.bailleurs}
                                {...b}
                            />
                        ))}
                    </Container>
                </article>
            </section>
        </Layout>
    )
}

export default HabiterEnOm
