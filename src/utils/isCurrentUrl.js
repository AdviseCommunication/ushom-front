import {useRouter} from "next/router"
import {isAbsoluteUrl} from "./isAbsoluteUrl"

export const isCurrentUrl = (url) => {
    const router = useRouter()
    if( isAbsoluteUrl(url) ) {
        return url.includes(router.asPath)
    }

    return router.asPath === url
}
