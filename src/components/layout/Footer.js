import data from "../../../content/main.json"

import Container from "../ui/Container"
import FooterNav from "./nav/FooterNav"
import Link from "next/link"
import Address from "../widgets/Address"

const Footer = (props) => (
    <footer className={["relative py-8 bg-primary space-y-8 text-white", props.css].join(' ')}>
        <Container css={"space-y-12 md:space-y-0 md:flex md:space-x-16 xl:space-x-32"}>
            <Address />
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
