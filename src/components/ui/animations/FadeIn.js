import Animate from "./Animate"

const FadeIn = (props) => {
    const variants = {
        visible: {
            opacity: 1,
            transition: { delay: props.delay || .5 }
        },
        hidden: {
            opacity: 0,
            transition: { delay: props.delay || .5 }
        },
    }

    return (
        <Animate variants={variants} {...props}>
            {props.children}
        </Animate>
    )
}

export default FadeIn
