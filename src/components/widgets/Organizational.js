import data from "../../../content/datas/organizational.json"

import Container from "../ui/Container"
import SlideDown from "../ui/animations/SlideDown"
import Title from "../ui/Title"
import Parser from "html-react-parser"
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion"
import {staggerBigChildrenVariants, staggeredChildrenVariants} from "../../api/animation";

const Organizational = () => {
    const [ref, inView] = useInView({
        trackVisibility: true,
        delay: 500,
        triggerOnce: true,
    })

    return (
        <aside id={"organizational"} className={"py-24"}>
            <Container css={"space-y-16"}>
                <SlideDown>
                    <Title>{Parser(data.title)}</Title>
                </SlideDown>
                <motion.ul
                    className={"grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"}
                    animate={inView ? "visible" : "hidden"}
                    variants={staggerBigChildrenVariants}
                    ref={ref}
                >
                    {data.items.map((el,i) => (
                        <motion.li
                            key={i}
                            className={"flex flex-col bg-white shadow-large"}
                            variants={staggeredChildrenVariants}
                        >
                            <div className={"relative w-full flex flex-col"}>
                                <div className={"w-full bg-light bg-opacity-25 border-b border-gray relative pb-full"}>
                                    <svg className={"opacity-10 w-3/4 h-32 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-current"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z"/></svg>
                                    {el.photo &&
                                        <picture>
                                            <img
                                                src={el.photo}
                                                alt={el.title}
                                                className={"absolute inset-0 h-full w-full object-cover"}
                                                loading={"lazy"}
                                            />
                                        </picture>
                                    }
                                </div>
                            </div>
                            <p className={"flex flex-col px-6 py-8"}>
                                <strong>{el.title}</strong>
                                <span className={"text-primary"}>
                                    {el.jobtitle}
                                </span>
                            </p>
                        </motion.li>
                    ))}
                </motion.ul>
            </Container>
        </aside>
    )
}

export default Organizational
