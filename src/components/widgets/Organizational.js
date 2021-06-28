import data from "../../../content/datas/organizational.json"

import Container from "../ui/Container"
import SlideDown from "../ui/animations/SlideDown"
import Title from "../ui/Title"
import Parser from "html-react-parser"

const Organizational = () => {

    return (
        <aside>
            <Container>
                <SlideDown>
                    <Title>{Parser(data.title)}</Title>
                </SlideDown>
            </Container>
        </aside>
    )
}
