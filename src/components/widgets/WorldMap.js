import data from "../../../content/datas/landlords.json"

import Container from "../ui/Container"
import FadeIn from "../ui/animations/FadeIn"
import {staggerChildrenVariants, staggeredChildrenVariants} from "../../api/animation"
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"

import Map from "../../images/world-map.svg"
import Logo from "../../images/logo.svg"

const WorldMap = () => {
    const [ref, inView] = useInView({
        trackVisibility: true,
        delay: 500,
        triggerOnce: true,
    })

    return (
        <figure className={"bg-primary"}>
            <Container reduce noPadding>
                <FadeIn css={"relative"}>
                    <Map />
                    <motion.ul
                        animate={inView ? "visible" : "hidden"}
                        variants={staggerChildrenVariants}
                        ref={ref}
                    >
                        {data.items.map((el) => {
                            return el.items.map((els, is) => (
                                <motion.li
                                    key={is}
                                    variants={staggeredChildrenVariants}
                                    className={"absolute"}
                                    style={{ left: `${els.gps.x}%`, top: `${els.gps.y}%` }}
                                >
                                    <span className={"sr-only"}>{els.name}</span>
                                    {(els.gps.x > 0 && els.gps.y > 0) &&
                                        <Logo
                                            className={"rounded-full border-3 border-white w-9 h-9 transform -translate-x-1/2 -translate-y-1/2"}
                                        />
                                    }
                                </motion.li>
                            ))
                        })}
                    </motion.ul>
                </FadeIn>
            </Container>
        </figure>
    )
}

export default WorldMap
