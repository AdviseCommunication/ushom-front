import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"

const Animate = (props) => {
    const [ref, inView] = useInView({
        trackVisibility: true,
        delay: 250,
        triggerOnce: props.triggerOnce || true,
    })

    return (
        <div ref={ref} className={props.css}>
            <motion.div
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={props.variants}
            >
                {props.children}
            </motion.div>
        </div>
    )
}

export default Animate
