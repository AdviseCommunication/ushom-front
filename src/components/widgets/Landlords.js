import data from "../../../content/datas/landlords.json"

import Container from "../ui/Container"
import SlideDown from "../ui/animations/SlideDown"
import Title from "../ui/Title"
import Parser from "html-react-parser"
import {staggerBigChildrenVariants, staggeredChildrenVariants} from "../../api/animation"
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"

const Childs = ({el}) => {
    const items = el.items?.filter((l) => {
        return l.content !== ''
    })

    return (
        <>
            {items.map((ll,lx) => (
                <li key={lx} className={"sm:min-h-16 w-full flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center"}>
                    <picture className={"w-20 sm:pr-6 sm:flex-shrink-0"}>
                        <img className={"w-full"} src={ll.map} alt={""} loading={"lazy"} height={60}/>
                    </picture>
                    <ul className={"w-full list-disc pl-5 flex-grow space-y-1"}>
                        <li>
                            <strong>{ll.name}</strong>
                            {" : "}
                            {ll.content}
                        </li>
                    </ul>
                </li>
            ))}
        </>
    )
}

const Landlords = props => {
    const [ref, inView] = useInView({
        trackVisibility: true,
        delay: 500,
        triggerOnce: true,
    })

    return (
        <aside id={"landlords"} className={"py-24"}>
            <Container css={"space-y-16"}>
                <SlideDown>
                    <Title css={"text-center"}>{Parser(data.title)}</Title>
                </SlideDown>
                <motion.ul
                    className={"flex flex-col space-y-12 md:grid md:grid-cols-1 md:space-y-0 md:gap-12 lg:gap-6 lg:grid-cols-3"}
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerBigChildrenVariants}
                    ref={ref}
                >
                    {data.items.map((el, i) => (
                        <motion.li
                            variants={staggeredChildrenVariants}
                            key={i}
                            className={"flex-1 flex flex-col items-center space-y-12 sm:space-y-4 bg-light bg-opacity-25 shadow-large p-6"}
                        >
                            <span className={"font-bold text-primary w-full"}>{el.name}</span>
                            <ul className={"w-full flex flex-col space-y-12 sm:space-y-4"}>
                                <Childs el={el} />
                            </ul>
                        </motion.li>
                    ))}
                </motion.ul>
            </Container>
        </aside>
    )
}

export default Landlords
