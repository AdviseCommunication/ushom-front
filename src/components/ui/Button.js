import PropTypes from "prop-types"
import Link from "next/link"

const baseClasses = "group inline-flex items-center space-x-2 uppercase py-2 px-4 transition-all duration-300 ease-in hover:space-x-3 focus:ring-2"

const sizeMap = [
    'text-sm font-bold leading-none',
    'text-xs font-medium leading-none',
    'text-base font-bold leading-normal',
]

const colorMap = {
    primary: 'text-white bg-primary hover:bg-secondary focus:ring-secondary',
    secondary: 'text-white bg-secondary hover:text-primary focus:ring-primary',
    white: 'text-primary bg-white hover:bg-secondary focus:ring-secondary',
    gray: 'text-primary bg-gray hover:bg-secondary focus:ring-secondary',
    wide: 'text-primary bg-white hover:text-secondary focus:ring-secondary',
}

const Button = (props) => {
    const computeSize = sizeMap[props.size] ? sizeMap[props.size] : sizeMap[0]
    const computeColor = colorMap[props.theme] ? colorMap[props.theme] : colorMap.primary

    return (
        <button className={[baseClasses, computeColor, computeSize, props.css].join(' ')}
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
    size: 1,
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
    const computeTarget = props?.target ? '_blank' : null
    const computeRel = props?.target ? 'noopener noreferrer' : null

    return (
        <Link href={props.href}>
            <a className={[baseClasses, computeColor, computeSize, props.css].join(' ')}
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
    size: 1,
    theme: `primary`,
    target: false,
}

LinkButton.propTypes = {
    children: PropTypes.node.isRequired,
    css: PropTypes.string,
    href: PropTypes.string,
    size: PropTypes.number,
    theme: PropTypes.string,
    target: PropTypes.bool,
}

export {
    Button,
    LinkButton
}
