import React, {useEffect, useState} from "react"
import ReactDOM from 'react-dom'
import PropTypes from "prop-types"
import Close from "../../images/close.svg"

const colorMap = {
    primary: 'text-primary hover:text-secondary',
    secondary: 'text-secondary hover:text-primary',
    white: 'text-white',
}

export const CloseModal = (props) => {
    const computeColor = colorMap[props.theme] ? colorMap[props.theme] : colorMap.primary

    return (
        <button
            className={[
                "absolute z-10 p-1 transform transition right-6 top-6",
                "hover:scale-95 focus:ring-2 focus:ring-secondary",
            ].join(' ')}
            onClick={props.clickHandler}
            type={"button"}
            data-dismiss="modal"
            aria-label="Close"
        >
            <Close
                className={["stroke-current text-shadow h-6 w-6", computeColor].join(' ')}
                aria-hidden={true}
            />
            <span className={"sr-only"}>Fermer</span>
        </button>
    )
}

CloseModal.defaultProps = {
    theme: `primary`,
}

CloseModal.propTypes = {
    theme: PropTypes.string,
    clickHandler: PropTypes.func,
}

const Modal = ({opened, hide, theme, children}) => {
    const [parentNode, setParentNode] = useState()
    useEffect(() => {
        const containerNode = document.body
        setParentNode(containerNode)
    }, [])

    return parentNode ? ReactDOM.createPortal(
        <div
            className={[
                "fixed top-0 w-full h-full z-100",
                (opened ? "left-0 opacity-100" : "-left-full opacity-0 pointer-events-none")
            ].join(' ')}
            aria-modal aria-hidden tabIndex={-1} role="dialog"
        >
            <CloseModal clickHandler={hide} theme={theme} />
            {children}
        </div>, parentNode
    ) : null
}

Modal.defaultProps = {
    opened: false,
    theme: `primary`,
}

Modal.propTypes = {
    opened: PropTypes.bool,
    theme: PropTypes.string,
}

export default Modal
