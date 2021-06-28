import data from "../../../content/datas/interlocutors.json"

import Container from "../ui/Container"
import SlideDown from "../ui/animations/SlideDown"
import Title from "../ui/Title"
import Parser from "html-react-parser"

const Interlocutors = props => {

    return (
        <article id={"interlocutors"} className={"py-24 bg-light"}>
            <Container css={"space-y-16"}>
                <SlideDown>
                    <Title css={"text-center"}>{Parser(data.title)}</Title>
                </SlideDown>
                <ul className={"flex bg-white shadow-large flex-col divide-y divide-black divide-opacity-10 md:flex-row md:divide-y-0 md:divide-x"}>
                    {data.zone.map((el,i) => (
                        <li key={i} className={"md:flex-1 p-8 space-y-4 lg:p-12 lg:space-y-8"}>
                            <strong className={"text-xl underline underline-offset-2"}>{el.title}</strong>
                            <ul className={"space-y-2"}>
                                {el.items.map((elx,x) => (
                                    <li key={x}>
                                        {elx.title}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </article>
    )
}

export default Interlocutors
