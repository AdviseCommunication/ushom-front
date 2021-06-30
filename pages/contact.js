import Banner from "../src/components/ui/Banner"
import Container from "../src/components/ui/Container"
import Parser from "html-react-parser"
import Layout from "../src/components/layout/Layout"

const Contact = () => {

    return (
        <Layout seo={seo}>
            <Banner title={page.title} />
            <Container css={"py-24 prose"}>
                {Parser(page.content)}
            </Container>
        </Layout>
    )
}

export default Contact
