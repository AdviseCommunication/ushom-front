import data from "../../../content/datas/landlords.json"

import Title from "../ui/Title"
import Parser from "html-react-parser"
import Container from "../ui/Container"
import {computeBgColor} from "../../utils/theme"
import {staggerChildrenVariants, staggeredChildrenVariants} from "../../api/animation"
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
import SlideDown from "../ui/animations/SlideDown"

const Territories = props => {
    const [ref, inView] = useInView({
        trackVisibility: true,
        delay: 500,
        triggerOnce: true,
    })

    return (
        <article className={"py-24"}>
            <Container css={"text-center space-y-16"}>
                {props.title && <SlideDown><Title>{Parser(props.title)}</Title></SlideDown>}
                <motion.ul
                    className={["w-full ring-0 ring-gray transition delay-1000 flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap", (inView ? "ring-1" : null)].join(' ')}
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerChildrenVariants}
                    ref={ref}
                >
                    {data.items.map((el) => {
                        return el.items.map((els, is) => (
                            <motion.li
                                key={is}
                                variants={staggeredChildrenVariants}
                                className={["flex flex-col text-center border border-gray sm:w-1/2 md:w-1/4 xl:w-auto xl:flex-1"].join(' ')}
                            >
                                <div className={["flex flex-col p-8 w-full", computeBgColor('light')].join(' ')}>
                                    <picture className={"relative pb-full"}>
                                        <img
                                            className={"absolute inset-0 h-full w-full"}
                                            src={els.map}
                                            alt={""}
                                            loading={"lazy"}
                                        />
                                    </picture>
                                </div>
                                <span
                                    className={"flex-grow flex items-center justify-center py-4 px-1 text-black leading-snug text-sm 2xl:text-base 2xl:leading-snug"}
                                >
                                {els.name}
                            </span>
                            </motion.li>
                        ))
                    })}
                </motion.ul>
            </Container>
        </article>
    )
}

export default Territories
