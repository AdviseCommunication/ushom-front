import Title from "./Title"
import Image from "next/image"
import Container from "./Container"
import Rolling from "../../images/rolling.svg"
import SlideRight from "./animations/SlideRight"

const Banner = props => {

    return (
        <div className={"relative w-full bg-primary border-b-8 border-primary"}>
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
                <SlideRight from={80} delay={0.5}>
                    <Title
                        level={1}
                        size={1}
                        css={[(props.img?.src ? "py-48 md:py-64 max-w-xl" : "py-24 max-w-2xl")].join(' ')}
                        color={"white"}
                    >
                        {props.title}
                    </Title>
                </SlideRight>
                {props.tags &&
                    <ul className={"flex items-center justify-center space-x-16 pb-8 text-2xl text-white uppercase font-medium xl:text-3xl xl:space-x-24 xl:tracking-tight"}>
                        {props.tags.split(',').map((el,i) => (
                            <li key={i}>
                                {el}
                            </li>
                        ))}
                    </ul>
                }
            </Container>
        </div>
    )
}

export default Banner
