import Title from "./Title"
import Image from "next/image"
import Container from "./Container";

const Banner = props => {

    return (
        <div className={"relative w-full border-b-8 border-primary"}>
            {props.img?.src &&
                <Image {...props.img} layout={"fill"} objectFit={"cover"} priority={true} quality={90} />
            }
            <div className={"absolute inset-0 bg-primary opacity-10"} />
            <div className={"absolute inset-0 bg-black opacity-20"} />
            <Container css={"relative"}>
                <Title level={1} size={1} css={"py-48 max-w-xl"} color={"white"}>
                    {props.title}
                </Title>
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
