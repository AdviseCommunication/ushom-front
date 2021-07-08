import React from "react"
import PropTypes from "prop-types"
import {computeTextColor} from "../../utils/theme"

const sizeMap = [
    'text-8xl leading-none tracking-tighter',
    'text-5xl leading-tighter font-bold',
    'text-4xl leading-tighter font-bold',
    'text-3xl leading-tight font-bold',
    'text-xl'
]

const Title = ({ ...props }) => {
    const Level = `h${ props.level }`
    const computeSize = sizeMap[props.size] ? sizeMap[props.size] : sizeMap[0]

    return (
        <header className={props.css} style={props.style}>
            <Level className={[computeTextColor(props.color), computeSize, props.hnCss].join(' ')}>
                {props.children}
            </Level>
        </header>
    )
}

Title.defaultProps = {
    level: 2,
    size: 3,
    color: `black`,
    css: ``,
    hnCss: ``,
    style: {}
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
    level: PropTypes.number,
    size: PropTypes.number,
    color: PropTypes.string,
    css: PropTypes.string,
    hnCss: PropTypes.string,
    style: PropTypes.object
}

export default Title
