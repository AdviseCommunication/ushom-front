import data from '../../../../content/nav/footer.json'

import NavItem from "./NavItem"
import PropTypes from "prop-types"

const FooterNav = (props) => (
    <nav className={props.css}>
        <ul className={"flex -ml-2"}>
            {data.item_de_navigation.map((el,i) => (
                <NavItem key={i}
                         href={el.url}
                         target={el.target_blank}
                         css={"border-l border-white first:border-l-0 px-2 hover:underline"}
                         parentCss={"border-l first:border-l-0"}
                >
                    {el.label}
                </NavItem>
            ))}
        </ul>
    </nav>
)

FooterNav.defaultProps = {
    css: ``,
}

FooterNav.propTypes = {
    css: PropTypes.string,
}

export default FooterNav
