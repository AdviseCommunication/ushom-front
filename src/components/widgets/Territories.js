import data from "../../../content/datas/landlords.json"

import Title from "../ui/Title"
import Parser from "html-react-parser"
import Container from "../ui/Container"
import {computeBgColor} from "../../utils/theme"

const Territories = props => (
    <article className={"py-24"}>
        <Container css={"text-center space-y-16"}>
            {props.title && <Title>{Parser(props.title)}</Title>}
            <ul className={"w-full border-2 border-gray flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap"}>
                {data.items.map((el) => {
                    return el.items.map((els, is) => (
                        <li
                            key={is}
                            className={["flex flex-col text-center border border-l-2 first:border-l border-gray sm:w-1/2 md:w-1/4 xl:w-auto xl:flex-1"].join(' ')}
                        >
                            <div className={["flex flex-col p-8 w-full", computeBgColor('light')].join(' ')}>
                                <picture className={"relative pb-full"}>
                                    <img className={"absolute inset-0 h-full w-full"} src={els.map} alt={""} loading={"lazy"} />
                                </picture>
                            </div>
                            <span className={"flex-grow flex items-center justify-center py-4 px-1 text-black leading-snug text-sm 2xl:text-base 2xl:leading-snug"}>
                                {els.name}
                            </span>
                        </li>
                    ))
                })}
            </ul>
        </Container>
    </article>
)

export default Territories
