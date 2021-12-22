import data from "../../../content/datas/act.json"

import Parser from "html-react-parser"
import Container from "../ui/Container"
import {computeBgColor} from "../../utils/theme"
import PropTypes from "prop-types"
import Title from "../ui/Title"
import SlideDown from "../ui/animations/SlideDown"
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
import {staggerBigChildrenVariants, staggeredChildrenVariants} from "../../api/animation"

const Act = props => {
    const [ref, inView] = useInView({
        trackVisibility: true,
        delay: 500,
        triggerOnce: true,
    })

    return (
        <aside className={[props.css, props.padding, computeBgColor(props.bg)].join(' ')}>
            <Container css={"space-y-16"}>
                <SlideDown>
                    <Title css={"text-center"}>{Parser(data.title)}</Title>
                </SlideDown>
                <motion.ul
                    className={[
                        "flex flex-col space-y-6 grid-cols-1 md:grid md:space-y-0 md:gap-6",
                        (data.cols === 2 ? "md:grid-cols-2" : null),
                        (data.cols === 3 ? "md:grid-cols-2 2xl:grid-cols-3" : null),
                        (data.cols === 4 ? "md:grid-cols-2 2xl:grid-cols-4" : null),
                        (data.cols === 5 ? "md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5" : null),
                        (data.cols === 6 ? "md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6" : null),
                    ].join(' ')}
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerBigChildrenVariants}
                    ref={ref}
                >
                    {data.items.map((el, i) => (
                        <motion.li
                            variants={staggeredChildrenVariants}
                            key={i}
                            className={"flex-1 flex flex-col items-center space-y-4 shadow-large p-6"}
                        >
                            <span className={"font-bold text-primary w-full"}>{el.title}</span>
                            <div className={"w-full flex flex-col space-y-4 sm:space-y-0 sm:flex-row"}>
                                <picture className={"w-24 sm:pr-6 sm:flex-shrink-0 2xl:pr-1 2xl:w-16"}>
                                    <img className={"w-full"} src={el.icon} alt={""} loading={"lazy"} height={60}/>
                                </picture>
                                <ul className={"w-full list-disc pl-5 flex-grow space-y-1 2xl:leading-tighter 2xl:text-sm 2xl:pl-8"}>
                                    {el.list.map((ll,lx) => (
                                        <li key={lx}>{Parser(ll.title)}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </Container>
        </aside>
    )
}

Act.defaultProps = {
    padding: `py-24`,
    css: ``,
    bg: `white`,
}

Act.propTypes = {
    padding: PropTypes.string,
    css: PropTypes.string,
    bg: PropTypes.string,
}

export default Act
