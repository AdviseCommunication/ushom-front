import Title from "../Title"
import Parser from "html-react-parser"
import PropTypes from "prop-types"
import {computeBgColor} from "../../../utils/theme"
import Container from "../Container"
import {LinkButton} from "../Button"
import FadeIn from "../animations/FadeIn"
import SlideDown from "../animations/SlideDown"

const WidgetText = props => {

    return (
        <article className={[props.css, props.padding, computeBgColor(props.bg)].join(' ')}>
            <Container css={"flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:space-x-8"}>
                {props.children}
                <div className={"w-full space-y-8 flex-grow"}>
                    {props.title &&
                        <SlideDown delay={1}>
                            <Title>{Parser(props.title)}</Title>
                        </SlideDown>
                    }
                    {props.content &&
                        <FadeIn delay={1.25}>
                            <div className={"prose"}>
                                {Parser(props.content)}
                            </div>
                        </FadeIn>
                    }
                    {props.cta &&
                        <SlideDown delay={1.5}>
                            <LinkButton {...props.cta} />
                        </SlideDown>
                    }
                </div>
            </Container>
        </article>
    )
}

WidgetText.defaultProps = {
    padding: `py-24`,
    css: ``,
    bg: `white`,
}

WidgetText.propTypes = {
    padding: PropTypes.string,
    css: PropTypes.string,
    bg: PropTypes.string,
}

export default WidgetText
