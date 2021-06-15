import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"
import Footer from "./Footer"
import Head from "./Head"
import Loader from "../ui/Loader"
import {CookieConsentProvider} from "./cookie/CookieConsent"

const Layout = (props) => {
    const seo = props.seo ? props.seo : { title: props.title?.replace(/(<([^>]+)>)/gi, "") }

    return (
        <CookieConsentProvider>
            <Head {...seo} />
            <Loader />
            <div className="relative text-black bg-white font-normal antialiased scroll-smooth">
                <Header />
                <main className={["leading-relaxed"].join(' ')}>
                    {props.children}
                </main>
                <Footer />
            </div>
        </CookieConsentProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
}

export default Layout
