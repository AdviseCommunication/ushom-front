import ArrowTop from "../../images/arrow-top.svg"
import _ from "lodash"
import {useEffect, useState} from "react"
import PropTypes from "prop-types"

const ScrollToTop = (props) => {
    const [isTop, setIsTop] = useState(0)
    useEffect(() => {
        const throttled = _.throttle(() => {
            setIsTop( window.scrollY )
        }, 500)
        window.addEventListener('scroll', throttled)
        return () => window.removeEventListener('scroll', throttled)
    })

    return (
        <ArrowTop
            onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}
            className={[
                "transform transition-all duration-150 ease-in cursor-pointer w-12 h-12 p-1 border-2 text-primary hover:bg-secondary",
                (props.fixed ? "bottom-4 fixed" : "top-0 absolute"),
                (isTop < 200 ? "opacity-0 translate-y-4" : null)
            ].join(' ')}
        />
    )
}

ScrollToTop.defaultProps = {
    fixed: false
}

ScrollToTop.propTypes = {
    fixed: PropTypes.bool
}

export default ScrollToTop
