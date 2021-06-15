import Title from "./Title"
import Parser from "html-react-parser"
import {LinkButton} from "./Button"
import PropTypes from "prop-types"

const colorMap = {
    primary: 'text-white bg-primary',
    secondary: 'text-white bg-secondary',
    white: 'text-primary bg-white',
}

const Card = (props) => {
    const computeColor = colorMap[props.theme] ? colorMap[props.theme] : colorMap.primary
    const titleColor = props.theme === 'secondary' ? 'primary' : 'white'
    const buttonColor = props.theme === 'secondary' ? 'primary' : 'secondary'

    return (
        <article className={["relative text-left p-12 rounded-xl", props.css, computeColor].join(' ')} style={props.style}>
            <div className={"absolute h-24 w-24 bg-secondary right-0 top-0 rounded-tr-lg rounded-bl-lg"} />
            <div className={"relative mb-5 space-y-8"}>
                <Title level={1} size={1} color={titleColor} css={"uppercase"}>
                    {Parser(props.data.title)}
                </Title>
                <div className={"text-2md space-y-4"}>
                    {Parser(props.data.preview)}
                </div>
            </div>
            <div className={["-mb-16 transform translate-y-2", props.buttonCss].join(' ')}>
                <LinkButton theme={buttonColor} size={2} href={props.data.url}>
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

const SimpleCard = (props) => {

    return (
        <article className={["text-left p-8 relative space-y-8", props.css].join(' ')} style={props.style}>
            <Title level={1} size={1} color={"secondary"} css={"uppercase"}>
                {Parser(props.data.title)}
            </Title>
            <div className={"text-lg space-y-4 md:text-xl"}>
                {Parser(props.data.preview)}
            </div>
            {props.showButton && props.data.label?.length &&
                <LinkButton theme={"secondary"}
                            size={2}
                            href={props.data.url}
                            target={props.data?.target_blank}
                >
                    {props.data.label}
                </LinkButton>
            }
        </article>
    )
}

SimpleCard.defaultProps = {
    data: {},
    showButton: true,
    style: {},
}

SimpleCard.propTypes = {
    data: PropTypes.object,
    showButton: PropTypes.bool,
    style: PropTypes.object,
}

export {
    Card,
    SimpleCard,
}
