import text from "../../../content/main.json"

import {LinkButton} from "./Button"
import Container from "./Container"

const PostNavigation = ({data, type = 'activite'}) => {

    return (
        <nav className={"mt-auto bg-light"}>
            {(data?.prev || data?.next) &&
                <Container>
                    <ul className={"py-8 flex flex-col space-y-6 sm:space-y-0 sm:flex-row"}>
                        {data?.prev &&
                            <li className={""}>
                                <LinkButton href={`/${type}/${data.prev?.filename}`}>
                                    {text.post?.previousPost}
                                </LinkButton>
                            </li>
                        }
                        {data?.next &&
                            <li className={"sm:ml-auto"}>
                                <LinkButton href={`/${type}/${data.next?.filename}`}>
                                    {text.post?.nextPost}
                                </LinkButton>
                            </li>
                        }
                    </ul>
                </Container>
            }
        </nav>
    )
}

export default PostNavigation
