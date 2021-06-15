import React from "react"
import PropTypes from "prop-types"

const Container = (props) => (
    <div
        className={[
            "w-full mx-auto",
            props.css,
            !props.noPadding ? "px-8" : null,
            props.reduce ? "max-w-screen-xl" : "max-w-screen-2xl",
        ].join(' ')}
        style={props.style}
    >
        {props.children}
    </div>
)

Container.propTypes = {
    children: PropTypes.node.isRequired,
    css: PropTypes.string,
    noPadding: PropTypes.bool,
    style: PropTypes.object,
}

export default Container
