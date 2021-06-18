import data from "../../../content/home.json"

import Parser from "html-react-parser"
import Container from "../ui/Container"
import {computeBgColor} from "../../utils/theme"
import PropTypes from "prop-types"
import Title from "../ui/Title"
import SlideDown from "../ui/animations/SlideDown"
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
import {staggerBigChildrenVariants, staggeredChildrenVariants} from "../../api/animation"

const Features = props => {
    const [ref, inView] = useInView({
        trackVisibility: true,
        delay: 500,
        triggerOnce: true,
    })

    return (
        <aside className={[props.css, props.padding, computeBgColor(props.bg)].join(' ')}>
            <Container css={"text-center space-y-16"}>
                <SlideDown>
                    <Title>{Parser(data.features.title)}</Title>
                </SlideDown>
                <motion.ul
                    className={"flex flex-col space-y-16 md:flex-row md:space-y-0 md:space-x-8 lg:space-x-16 xl:space-x-24"}
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerBigChildrenVariants}
                    ref={ref}
                >
                    {data.features.items.map((el, i) => (
                        <motion.li
                            variants={staggeredChildrenVariants}
                            key={i}
                            className={"flex-1 flex flex-col items-center space-y-4 shadow-large p-8 xl:space-y-6 xl:p-12"}
                        >
                            <picture>
                                <img className={"h-24"} src={el.icon} alt={""} loading={"lazy"} height={60}/>
                            </picture>
                            <div className={"leading-snug xl:text-lg xl:leading-snug"}>
                                {Parser(el.content)}
                                {el.source &&
                                <em className={"block mt-1 text-black opacity-50 text-sm md:text-xs xl:text-sm xl:-mx-4"}>{el.source}</em>}
                            </div>
                        </motion.li>
                    ))}
                </motion.ul>
            </Container>
        </aside>
    )
}

Features.defaultProps = {
    padding: `py-24`,
    css: ``,
    bg: `white`,
}

Features.propTypes = {
    padding: PropTypes.string,
    css: PropTypes.string,
    bg: PropTypes.string,
}

export default Features
