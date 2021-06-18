import PropTypes from "prop-types"
import Link from "next/link"

const baseClasses = "group inline-flex items-center space-x-2 py-1 px-4 transition-all duration-300 ease-in hover:space-x-3 focus:ring-2"

const sizeMap = [
    'text-base font-medium leading-none',
    'text-xs font-medium leading-none',
    'text-base font-bold leading-normal',
]

const colorMap = {
    primary: 'text-white bg-primary hover:bg-black focus:ring-black',
    white: 'text-primary bg-white hover:text-white hover:bg-primary focus:ring-primary',
    gray: 'text-primary bg-gray hover:bg-primary hover:text-white focus:ring-primary',
    wide: 'text-primary bg-transparent border-2 hover:bg-primary hover:text-white hover:border-transparent focus:ring-black',
}

const Button = (props) => {
    const computeSize = sizeMap[props.size] ? sizeMap[props.size] : sizeMap[0]
    const computeColor = colorMap[props.theme] ? colorMap[props.theme] : colorMap.primary

    return (
        <button
            className={[baseClasses, computeColor, computeSize, props.css].join(' ')}
            type={props.type}
            style={props.style}
            onClick={props.clickHandler ? props.clickHandler : null}
        >
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    type: `button`,
    css: ``,
    style: {},
    size: 0,
    theme: `primary`,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    css: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    clickHandler: PropTypes.func,
    size: PropTypes.number,
    theme: PropTypes.string,
}

const LinkButton = (props) => {
    const computeSize = sizeMap[props?.size] ? sizeMap[props.size] : sizeMap[0]
    const computeColor = colorMap[props?.theme] ? colorMap[props.theme] : colorMap['primary']
    const computeTarget = props?.blank ? '_blank' : null
    const computeRel = props?.blank ? 'noopener noreferrer' : null

    return (
        <Link href={props.href}>
            <a
                className={[baseClasses, computeColor, computeSize, props.css].join(' ')}
                target={computeTarget}
                rel={computeRel}
            >
                <span className={"py-2"}>{props.children}</span>
            </a>
        </Link>
    )
}

LinkButton.defaultProps = {
    css: ``,
    href: `/`,
    size: 0,
    theme: `primary`,
    blank: false,
}

LinkButton.propTypes = {
    children: PropTypes.node.isRequired,
    css: PropTypes.string,
    href: PropTypes.string,
    size: PropTypes.number,
    theme: PropTypes.string,
    blank: PropTypes.bool,
}

export {
    Button,
    LinkButton
}
