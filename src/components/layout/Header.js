import data from "../../../content/main.json"

import Container from "../ui/Container"
import PrimaryNav from "./nav/PrimaryNav"
import Link from "next/link"
import {useEffect, useState} from "react"

import Logo from '../../images/logo.svg'

const Header = () => {
    const [sticked, setSticked] = useState(false)

    useEffect(() => {
        setSticked(window.scrollY)
        const onScroll = () => {
            setSticked(window.scrollY)
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    })

    return (
        <header
            className={[
                "sticky top-0 z-10 transition-all duration-150 ease-in",
                (sticked > 0 ? "bg-white shadow" : null),
            ].join(' ')}
        >
            <div className={"h-10 w-full bg-primary"} />
            <Container
                css={[
                    "flex items-center justify-between transition-all duration-150 ease-in",
                    (sticked > 0 ? "py-4" : "py-6")
                ].join(' ')}
            >
                <Link href={"/"}>
                    <a className={"flex items-center space-x-2 leading-none relative z-10"}>
                        <Logo className={[
                            "w-auto hover:opacity-75",
                            (sticked > 0 ? "h-12" : "h-14"),
                        ].join(' ')} />
                        <span className={"flex flex-col uppercase w-32"}>
                            <span className={"font-normal text-2xl tracking-tighter leading-none -ml-px"}>{data.app.siteName}</span>
                            {data.app?.description &&
                                <span className={"text-xs leading-none pl-px"}>
                                    {data.app.description}
                                </span>
                            }
                        </span>
                    </a>
                </Link>
                <PrimaryNav sticked={sticked > 0} />
            </Container>
        </header>
    )
}

export default Header
