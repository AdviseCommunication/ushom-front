import {useRouter} from "next/router"
import {useEffect} from 'react'
import '../src/styles/globals.css'
import * as gtag from "../src/utils/gtag"

import { init } from "@socialgouv/matomo-next"

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter()

    useEffect(() => {
        init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
    }, []);

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
