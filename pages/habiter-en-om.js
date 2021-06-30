import text from "../content/main.json"
import data from "../content/datas/landlords.json"

import Layout from "../src/components/layout/Layout"
import Banner from "../src/components/ui/Banner"
import slugify from "../src/utils/slugify"
import Container from "../src/components/ui/Container"
import Title from "../src/components/ui/Title"
import Parser from "html-react-parser"
import ListBloc from "../src/components/ui/ListBloc"

const HabiterEnOm = () => {
    const landlords = data.items.map(zone => zone.items.map(land => land))
                        .flat()
                        .sort((a,b) => a.name.localeCompare(b.name))

    const banner = {
        title: text.habitat.title,
        nav: landlords.map(land => {
            return {label: land.name, url: '#'+slugify(land.name)}
        }),
    }

    return (
        <Layout>
            <Banner {...banner} />
            <section>
                {landlords.map((el,i) => (
                    <article key={i} className={"py-24 bg-white even:bg-light"} id={slugify(el.name)}>
                        <Container css={"space-y-16"}>
                            <Title css={"text-center"}>{Parser(el.name)}</Title>
                            <ListBloc
                               guide={text.habitat.presentation}
                               datas={el.presentation}
                               title={text.habitat.presentationTitle}
                            />
                            {el.bailleurs.map((b,bx) => (
                                <ListBloc
                                    key={bx}
                                    guide={text.habitat.bailleurs}
                                    {...b}
                                />
                            ))}
                        </Container>
                    </article>
                ))}
            </section>
        </Layout>
    )
}

export default HabiterEnOm
