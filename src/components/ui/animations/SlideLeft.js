import Animate from "./Animate"

const SlideLeft = (props) => {
    const variants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: props.duration || null,
                delay: props.delay || .5,
            }
        },
        hidden: {
            opacity: 0,
            x: props.from || -200,
            transition: {
                duration: props.duration || null,
                delay: props.delay || .5,
            }
        },
    }

    return (
        <Animate variants={variants} {...props}>
            {props.children}
        </Animate>
    )
}

export default SlideLeft
