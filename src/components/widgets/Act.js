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
                    <Title>{Parser(data.title)}</Title>
                </SlideDown>
                <motion.ul
                    className={"flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8"}
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerBigChildrenVariants}
                    ref={ref}
                >
                    {data.items.map((el, i) => (
                        <motion.li
                            variants={staggeredChildrenVariants}
                            key={i}
                            className={"flex-1 flex flex-col items-center space-y-4 shadow-large p-8 xl:space-y-6"}
                        >
                            <span className={"font-bold text-primary w-full"}>{el.title}</span>
                            <div className={"w-full flex flex-col md:flex-row"}>
                                <picture className={"w-24 md:pr-8 md:flex-shrink-0 lg:pr-10 lg:w-24"}>
                                    <img className={"w-full"} src={el.icon} alt={""} loading={"lazy"} height={60}/>
                                </picture>
                                <ul className={"w-full list-disc flex-grow space-y-1 leading-tighter text-sm"}>
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
