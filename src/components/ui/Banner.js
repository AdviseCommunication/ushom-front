import data from "../../../content/main.json"

import Title from "./Title"
import Image from "next/image"
import Container from "./Container"
import Rolling from "../../images/rolling.svg"
import SlideRight from "./animations/SlideRight"
import {useState} from "react"
import Parser from "html-react-parser"

const Banner = props => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={["relative w-full bg-primary", (props.img?.src ? "border-b-8 border-primary" : null)].join(' ')}>
            {props.img?.src &&
                <>
                    <Rolling className={"absolute inset-0 text-white"} />
                    <Image
                        {...props.img}
                        layout={"fill"}
                        objectFit={"cover"}
                        priority={true}
                        quality={90}
                    />
                </>
            }
            {props.mask &&
                <>
                    <div className={"absolute inset-0 bg-primary opacity-10"} />
                    <div className={"absolute inset-0 bg-black opacity-20"} />
                </>
            }
            <Container css={"relative"}>
                <div className={["", (props.img?.src ? "py-48 md:py-64" : "py-24")].join(' ')}>
                    <div className={"flex items-center"}>
                        <SlideRight from={80} delay={0.5} css={"flex-grow"}>
                            <Title
                                level={1}
                                size={(props.img?.src ? 1 : 2)}
                                css={[(props.img?.src ? "max-w-xl" : "max-w-2xl")].join(' ')}
                                color={"white"}
                                children={Parser(props.title)}
                            />
                        </SlideRight>
                        {props.nav &&
                            <button
                                type={"button"}
                                onClick={() => setIsOpen(!isOpen)}
                                className={"p-2 text-white ring-2 ring-white hover:text-primary hover:bg-white focus:outline-none focus:ring-4 lg:hidden"}
                            >
                                <span className={"sr-only"}>{data.menu?.bannerNavTitle}</span>
                                <svg className={"fill-current"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path className={isOpen ? "hidden" : null} d="M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/>
                                    <path className={!isOpen ? "hidden" : null} d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/>
                                </svg>
                            </button>
                        }
                    </div>
                    {props.nav &&
                        <ul className={[
                            "flex-col space-y-8 lg:space-y-0 lg:flex-row lg:items-center px-1 lg:space-x-6 xl:space-x-12 pt-8",
                            (isOpen ? "flex" : "hidden lg:flex"),
                        ].join(' ')}>
                            {props.nav.map((el,i) => (
                                <li key={i} className={"group flex items-center text-xl lg:text-sm text-white font-medium"}>
                                    <a
                                        children={el.label}
                                        href={el.url}
                                        className={"flex-grow pr-6 lg:pr-2 transition transform group-hover:-translate-y-px group-hover:-translate-x-1 hover:opacity-75"}
                                    />
                                    <svg className={"flex-shrink-0 fill-current w-4 lg:w-2 transition transform group-hover:translate-x-1 group-hover:-translate-y-px"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d={(el.url.slice(0,1) === '#' ? "M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" : "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z")} />
                                    </svg>
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </Container>
        </div>
    )
}

export default Banner
