import {useRouter} from "next/router"
import {isAbsoluteUrl} from "./isAbsoluteUrl"

export const isCurrentUrl = (url) => {
    const router = useRouter()
    if( isAbsoluteUrl(url) ) {
        return url.includes(router.asPath)
    }

    return router.asPath === url
}

export const currentUrlStartsWith = url => {
    const router = useRouter()
    return router.asPath.length > 1 && url.length > 1 && router.asPath.startsWith(url.slice(0, -1))
}
