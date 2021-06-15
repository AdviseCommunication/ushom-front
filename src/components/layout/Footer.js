import data from "../../../content/main.json"

import Container from "../ui/Container"
import {useCookieConsentDispatch} from "./cookie/CookieConsent"
//import {useInView} from "react-intersection-observer"

const Footer = (props) => {
    //const { ref, inView } = useInView()
    const dispatch = useCookieConsentDispatch()
    return (
        <footer className={["relative py-8", props.css].join(' ')}>
            <Container>
                <button
                    onClick={() => dispatch({type: 'showManageCookiePopup'})}
                >
                    {data.consent.customize.menuTitle}
                </button>
            </Container>
        </footer>
    )
}

export default Footer
