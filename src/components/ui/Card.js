import Title from "./Title"
import Parser from "html-react-parser"
import {LinkButton} from "./Button"
import PropTypes from "prop-types"

const colorMap = {
    primary: 'text-white bg-primary',
    white: 'text-primary bg-white',
}

const Card = (props) => {
    const computeColor = colorMap[props.theme] ? colorMap[props.theme] : colorMap.primary
    const titleColor = props.theme === 'primary' ? 'white' : 'primary'
    const buttonColor = props.theme === 'primary' ? 'white' : 'primary'

    return (
        <article className={["relative text-left p-12 rounded-xl", props.css, computeColor].join(' ')} style={props.style}>
            <div className={"relative mb-5 space-y-8"}>
                <Title level={1} size={1} color={titleColor} css={"uppercase"}>
                    {Parser(props.data.title)}
                </Title>
                <div className={"text-2md space-y-4"}>
                    {Parser(props.data.preview)}
                </div>
            </div>
            <div className={["-mb-16 transform translate-y-2", props.buttonCss].join(' ')}>
                <LinkButton theme={buttonColor} size={2} href={props.data.href}>
                    {props.data.label}
                </LinkButton>
            </div>
        </article>
    )
}

Card.defaultProps = {
    css: ``,
    data: {},
    style: {},
    theme: `primary`,
    buttonCss: `text-center`,
}

Card.propTypes = {
    css: PropTypes.string,
    data: PropTypes.object,
    style: PropTypes.object,
    theme: PropTypes.string,
    buttonCss: PropTypes.string,
}

export {
    Card,
}
