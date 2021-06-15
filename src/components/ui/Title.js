import React from "react"
import PropTypes from "prop-types"

const Title = ({ ...props }) => {
    const Level = `h${ props.level }`

    const sizeMap = [
        'text-8xl leading-none tracking-tighter',
        'text-5xl leading-tighter font-bold tracking-tight',
        'text-4xl leading-tighter font-bold',
        'text-3xl leading-tight font-bold',
        'text-xl'
    ]
    const computeSize = sizeMap[props.size] ? sizeMap[props.size] : sizeMap[0]

    const colorMap = {
        white: 'text-white',
        primary: 'text-primary',
        secondary: 'text-secondary',
        gray: 'text-gray',
        black: 'text-black',
    }
    const computeColor = colorMap[props.color] ? colorMap[props.color] : colorMap.primary

    return (
        <header className={props.css} style={props.style}>
            <Level className={[computeColor, computeSize, props.hnCss].join(' ')}>
                { props.children }
            </Level>
        </header>
    )
}

Title.defaultProps = {
    level: 2,
    size: 2,
    color: `primary`,
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
