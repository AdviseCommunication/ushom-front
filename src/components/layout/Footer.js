import data from "../../../content/main.json"

import Container from "../ui/Container"
import FooterNav from "./nav/FooterNav"
import Link from "next/link"

const Footer = (props) => (
    <footer className={["relative py-8 bg-primary space-y-8 text-white", props.css].join(' ')}>
        <Container css={"space-y-12 md:space-y-0 md:flex md:space-x-16 xl:space-x-32"}>
            <div className={"text-center space-y-2 md:text-left"}>
                <p className={"text-xl md:text-base font-medium"}>{data.app.description}</p>
                <p className={"flex flex-col md:text-sm"}>
                    <span>{data.address.street}</span>
                    <span>{data.address.city}</span>
                </p>
            </div>
            <FooterNav />
        </Container>
        <Container css={"text-center text-sm md:text-xs"}>
            {`© ${new Date().getFullYear()}`}
            {" "}
            <Link href={"/"}>
                <a className={"font-medium hover:underline"}>{data.app.description}</a>
            </Link>
        </Container>
    </footer>
)


export default Footer
