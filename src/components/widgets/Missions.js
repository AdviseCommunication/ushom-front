import source from "../../../content/about.json"

import Container from "../ui/Container"
import SlideDown from "../ui/animations/SlideDown"
import Title from "../ui/Title"
import Parser from "html-react-parser"
import {staggerBigChildrenVariants, staggeredChildrenVariants} from "../../api/animation"
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"

const Missions = props => {
    const data = source.missions || null
    const [ref, inView] = useInView({
        trackVisibility: true,
        delay: 500,
        triggerOnce: true,
    })

    return (
        <article className={"relative py-24 bg-light"} id={data.id}>
            <picture>
                <img
                    src={"/static/images/pattern.svg"}
                    className={"absolute inset-0 h-full w-full object-cover"}
                    loading={"lazy"}
                />
            </picture>
            <Container css={"relative space-y-8"}>
                <SlideDown>
                    <Title>{Parser(data.title)}</Title>
                    <p className={"text-primary text-lg font-bold"}>{Parser(data.sub)}</p>
                </SlideDown>
                <motion.ul
                    className={"flex flex-col space-y-8 md:space-y-0 md:space-x-8 lg:space-x-16 md:flex-row"}
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerBigChildrenVariants}
                    ref={ref}
                >
                    {data.items.map((el,i) => (
                        <motion.li
                            key={i}
                            className={"md:flex-1 bg-white shadow-large p-8 prose"}
                            variants={staggeredChildrenVariants}
                        >
                            {Parser(el.content)}
                        </motion.li>
                    ))}
                </motion.ul>
            </Container>
        </article>
    )
}

export default Missions
