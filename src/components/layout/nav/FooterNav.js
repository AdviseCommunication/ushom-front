import data from '../../../../content/nav/footer.json'
import mainData from "../../../../content/main.json"

import NavItem from "./NavItem"
import PropTypes from "prop-types"
import {useCookieConsentDispatch} from "../cookie/CookieConsent"

const FooterNav = () => {
    const dispatch = useCookieConsentDispatch()

    return (
        <nav className={"w-full text-center md:text-left lg:w-auto"}>
            <ul className={"flex flex-col md:flex-row md:flex-wrap -mx-2 lg:flex-nowrap lg:space-x-8 xl:space-x-16 2xl:space-x-24"}>
                {data.map((el, i) => (
                    <NavItem
                        key={i}
                        href={el.url}
                        blank={el.blank}
                        css={"font-medium lg:whitespace-nowrap hover:underline"}
                        parentCss={"mb-4 px-2 md:w-1/2 lg:w-auto lg:flex-1"}
                    >
                        {el.label}
                    </NavItem>
                ))}
                <li className={"mb-4 px-2 md:w-1/2 lg:w-auto lg:flex-1"}>
                    <button
                        onClick={() => dispatch({type: 'showManageCookiePopup'})}
                        className={"font-medium lg:whitespace-nowrap hover:underline"}
                    >
                        {mainData.consent.customize.menuTitle}
                    </button>
                </li>
            </ul>
        </nav>
    )
}

FooterNav.defaultProps = {
    css: ``,
}

FooterNav.propTypes = {
    css: PropTypes.string,
}

export default FooterNav
