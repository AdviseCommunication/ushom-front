import Link from "next/link"
import PropTypes from "prop-types"

const NavItem = (props) => {
    const computeTarget = props.blank ? '_blank' : null
    const computeRel = props.blank ? 'noopener noreferrer' : null

    return (
        <li className={props.parentCss}>
            <Link href={props.href}>
                <a
                    className={["leading-none", props.css].join(' ')}
                    target={computeTarget}
                    rel={computeRel}
                >
                    {props.children}
                </a>
            </Link>
        </li>
    )
}

NavItem.defaultProps = {
    css: ``,
    href: ``,
    parentCss: ``,
    blank: false,
}

NavItem.propTypes = {
    css: PropTypes.string,
    href: PropTypes.string,
    parentCss: PropTypes.string,
    blank: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default NavItem
