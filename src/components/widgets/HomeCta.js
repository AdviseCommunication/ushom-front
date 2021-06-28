import data from "../../../content/datas/home-cta.json"

import SlideDown from "../ui/animations/SlideDown"
import Title from "../ui/Title"
import Parser from "html-react-parser"
import Container from "../ui/Container"
import {LinkButton} from "../ui/Button"

const HomeCta = () => {

    return (
        <aside className={"bg-light py-24"}>
            <Container css={"md:flex space-y-8 md:space-y-0"}>
                <SlideDown css={"md:w-2/5 lg:w-1/3 md:flex-shrink-0 md:pr-8"}>
                    <Title>
                        {Parser(data.title)}
                    </Title>
                </SlideDown>
                <ul className={"w-full space-y-8 md:space-y-0 md:flex md:space-x-8 xl:space-x-12"}>
                    {data.items.map((el,i) => (
                        <li key={i} className={"flex flex-col items-center flex-1"}>
                            {el.img?.src &&
                                <picture className={"relative block w-full pb-3/4"}>
                                    <img {...el.img} className={"absolute inset-0 h-full w-full object-cover"} />
                                </picture>
                            }
                            <div className={"bg-white transform -mb-6 -translate-y-1/2 -mb-1/2"}>
                                <LinkButton {...el.cta} />
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </aside>
    )
}

export default HomeCta
