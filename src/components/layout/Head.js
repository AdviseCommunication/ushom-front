import {default as NextHead} from 'next/head'
import text from "../../../content/main.json"
import { GA_TRACKING_ID } from '../../utils/gtag'
import {useCookieConsentState} from "./cookie/CookieConsent"

const Head = (props) => {
    const url = process.env.NEXT_PUBLIC_SITE_URL

    const cookieConsentState = useCookieConsentState()
    const title = props.title || text.app?.siteName
    const desc = props.description || text.app?.description

    const image = props.image || [url, text.app?.banner].join('')
    const card = props.twitterCard || "summary_large_image"

    return (
        <NextHead>
            <title>{title}</title>

            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" href="/static/icons/app-icon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/static/icons/apple-icon.png" />
            <link rel="manifest" href="/manifest.webmanifest" />

            <meta name="title" content={title} />
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />

            {desc &&
                <>
                    <meta name="description" content={desc} />
                    <meta property="og:description" content={desc} />
                    <meta name="twitter:description" content={desc} />
                </>
            }

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />

            <meta property="twitter:card" content={card} />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:image" content={image} />

            {(cookieConsentState.isSet > 1 || cookieConsentState.marketing) &&
                <>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_TRACKING_ID}', {
                                  page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                </>
            }
        </NextHead>
    )
}

export default Head
