import {LinkButton} from "./Button"
import text from "../../../content/main.json"

const PostNavigation = ({data}) => {

    return (
        <nav>
            <ul className={"py-8 flex flex-col space-y-6 sm:space-y-0 sm:flex-row"}>
                {data?.prev &&
                    <li className={""}>
                        <LinkButton href={`/news/${data.prev?.filename}`}>
                            {text.post?.previousPost}
                        </LinkButton>
                    </li>
                }
                {data?.next &&
                    <li className={"sm:ml-auto"}>
                        <LinkButton href={`/news/${data.next?.filename}`}>
                            {text.post?.nextPost}
                        </LinkButton>
                    </li>
                }
            </ul>
        </nav>
    )
}

export default PostNavigation
