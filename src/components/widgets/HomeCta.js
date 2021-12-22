import source from "../../../content/home.json"

import SlideDown from "../ui/animations/SlideDown"
import Title from "../ui/Title"
import Parser from "html-react-parser"
import Container from "../ui/Container"
import {LinkButton} from "../ui/Button"
import {staggerBigChildrenVariants, staggeredChildrenVariants} from "../../api/animation"
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"

const HomeCta = () => {
    const data = source.homeCta || null

    const [ref, inView] = useInView({
        trackVisibility: true,
        delay: 500,
        triggerOnce: true,
    })

    return (
        <aside className={"bg-light py-24"}>
            <Container css={"md:flex space-y-8 md:space-y-0"}>
                <SlideDown css={"md:w-2/5 lg:w-1/3 md:flex-shrink-0 md:pr-8"}>
                    <Title>
                        {Parser(data.title)}
                    </Title>
                </SlideDown>
                <motion.ul
                    className={"w-full space-y-8 md:space-y-0 md:flex md:space-x-8 xl:space-x-12"}
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerBigChildrenVariants}
                    ref={ref}
                >
                    {data.items.map((el,i) => (
                        <motion.li
                            key={i}
                            className={"flex flex-col items-center flex-1"}
                            variants={staggeredChildrenVariants}
                        >
                            {el.img?.src &&
                                <picture className={"relative block w-full pb-3/4"}>
                                    <img {...el.img} className={"absolute inset-0 h-full w-full object-cover"} />
                                </picture>
                            }
                            <div className={"bg-white transform -mb-6 -translate-y-1/2 -mb-1/2"}>
                                <LinkButton {...el.cta} />
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </Container>
        </aside>
    )
}

export default HomeCta
