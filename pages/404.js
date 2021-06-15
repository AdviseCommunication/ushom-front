import text from "../content/main.json"

import Layout from "../src/components/layout/Layout"
import {LinkButton} from "../src/components/ui/Button"
import Container from "../src/components/ui/Container"

const FourOhFour = () => (
    <Layout title={text.fourZeroFour?.metaTitle}>
        <Container css={"relative pt-48 pb-80 wide:min-h-screen flex justify-center items-center"}>
            <div className={"flex relative z-30 flex-col lg:items-start pl-16 space-y-4"}>
                <header>
                    <h1 className={"text-9xl leading-none -ml-1 tracking-tighter font-bold lg:text-10xl"}>
                        {text.fourZeroFour?.title}
                    </h1>
                    <p className={"text-lg lg:text-xl"}>{text.fourZeroFour?.content}</p>
                </header>
                <LinkButton href={"/"}>
                    {text.fourZeroFour?.cta}
                </LinkButton>
            </div>
            <span
                className={"absolute pointer-events-none -mt-1 font-bold flex flex-col text-gray opacity-50 right-0 top-1/2 transform -translate-y-1/2 xl:right-8"}
                aria-hidden={true}
                style={{fontSize: "22rem", lineHeight: "16rem"}}
            >
                <b>4</b>
                <b>0</b>
                <b>4</b>
            </span>
        </Container>
    </Layout>
)

export default FourOhFour
