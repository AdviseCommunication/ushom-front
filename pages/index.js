import Layout from "../src/components/layout/Layout"
import Container from "../src/components/ui/Container"
import {getLatestPosts} from "../src/api/post"
import Title from "../src/components/ui/Title"
import Modal from "../src/components/ui/Modal"
import {Button} from "../src/components/ui/Button"
import {useState} from "react"

const Home = ({posts}) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <Layout>
            <Container css={"flex flex-col space-y-8 md:space-y-0 md:flex-row md:items-center md:justify-between"}>
                <Title level={1}>
                    HomePage
                </Title>
                <aside>
                    <Button clickHandler={() => setOpenModal(!openModal)}>
                        Open Test modal
                    </Button>
                    <Modal opened={openModal} hide={() => setOpenModal(false)}>
                        Test modal content
                    </Modal>
                </aside>
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
