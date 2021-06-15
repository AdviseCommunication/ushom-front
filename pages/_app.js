import {useRouter} from "next/router"
import {useEffect} from 'react'
import '../src/styles/globals.css'
import * as gtag from "../src/utils/gtag"

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on("routeChangeComplete", handleRouteChange)
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange)
        }
    }, [router.events])

    return <Component {...pageProps} />
}

export default MyApp
