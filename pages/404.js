import text from "../content/main.json"

import Layout from "../src/components/layout/Layout"
import {LinkButton} from "../src/components/ui/Button"
import Container from "../src/components/ui/Container"

const FourOhFour = () => (
    <Layout title={text.fourZeroFour?.metaTitle} mainCss={"flex flex-col justify-center"}>
        <Container css={"relative py-24"}>
            <div className={"flex relative z-1 flex-col text-center items-center space-y-4"}>
                <header>
                    <h1 className={"text-9xl leading-none -ml-2 tracking-tighter font-bold lg:text-10xl"}>
                        {text.fourZeroFour?.title}
                    </h1>
                    <p className={"text-lg lg:text-xl"}>{text.fourZeroFour?.content}</p>
                </header>
                <LinkButton href={"/"} theme={"wide"}>
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
