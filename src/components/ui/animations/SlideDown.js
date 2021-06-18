import Animate from "./Animate"

const SlideDown = (props) => {
    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { delay: props.delay || .5 }
        },
        hidden: {
            opacity: 0,
            y: props.from || 40,
            transition: { delay: props.delay || .5 }
        },
    }

    return (
        <Animate variants={variants} {...props}>
            {props.children}
        </Animate>
    )
}

export default SlideDown
