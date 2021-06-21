import data from "../../../content/datas/report.json"

import Title from "../ui/Title"
import Parser from "html-react-parser"
import Container from "../ui/Container"
import {LinkButton} from "../ui/Button"
import SlideDown from "../ui/animations/SlideDown"
import FadeIn from "../ui/animations/FadeIn";

const ActivityReport = () => (
    <aside className={"relative bg-light overflow-hidden"}>
        <picture>
            <img
                src={"/static/images/pattern.svg"}
                className={"absolute inset-0 h-full w-full object-cover"}
                loading={"lazy"}
            />
        </picture>
        <Container css={"relative py-24"}>
            <div className={"relative space-y-16"}>
                {data.mainTitle && <SlideDown><Title>{Parser(data.mainTitle)}</Title></SlideDown>}
                <div className={"flex flex-col space-y-8 md:space-y-0 md:space-x-8 md:flex-row md:items-center lg:space-x-16"}>
                    <FadeIn css={"md:w-1/3"}>
                        <picture><img {...data.img} /></picture>
                    </FadeIn>
                    <div className={"md:w-2/3 space-y-8"}>
                        {data.title &&
                            <SlideDown delay={1}>
                                <Title css={"md:-mt-4 max-w-screen-md lg:px-16"}>
                                    {Parser(data.title)}
                                </Title>
                            </SlideDown>
                        }
                        {data.content &&
                            <SlideDown delay={1.25} css={"text-lg max-w-screen-md lg:px-16"}>
                                {Parser(data.content)}
                            </SlideDown>
                        }
                        <SlideDown delay={1.5} css={"max-w-screen-md lg:px-16"}>
                            <LinkButton {...data.cta} />
                        </SlideDown>
                    </div>
                </div>
            </div>
        </Container>
    </aside>
)

export default ActivityReport
