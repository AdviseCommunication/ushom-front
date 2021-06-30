import text from "../../../content/main.json"

import {LinkButton} from "./Button"
import Container from "./Container"

const PostNavigation = ({data, type = 'activite'}) => {

    return (
        <nav className={"mt-auto bg-light"}>
            {(data?.prev || data?.next) &&
                <Container>
                    <ul className={"py-8 flex"}>
                        {data?.prev &&
                            <li className={""}>
                                <LinkButton href={`/${type}/${data.prev?.filename}`} theme={"wide"}>
                                    <span className={"relative flex items-center"}>
                                        <svg className={"-m-1 flex-shrink-0 fill-current w-3 transition transform scale-x-reverse"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d={"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"} />
                                        </svg>
                                        <span className={"absolute left-full transform transition translate-x-8 group-hover:translate-x-7 text-primary w-20 sm:w-auto sm:min-w-48 md:min-w-64 uppercase text-sm"}>
                                            {text.post?.previousPost}
                                        </span>
                                    </span>
                                </LinkButton>
                            </li>
                        }
                        {data?.next &&
                            <li className={"ml-auto"}>
                                <LinkButton href={`/${type}/${data.next?.filename}`} theme={"wide"}>
                                    <span className={"relative flex items-center"}>
                                        <span className={"absolute right-full transform transition -translate-x-8 group-hover:-translate-x-7 text-primary w-20 sm:w-auto sm:min-w-48 md:min-w-64 text-right uppercase text-sm"}>
                                            {text.post?.nextPost}
                                        </span>
                                        <svg className={"-m-1 flex-shrink-0 fill-current w-3 transition transform"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d={"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"} />
                                        </svg>
                                    </span>
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
