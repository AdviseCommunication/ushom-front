import React, { createContext, useReducer, useEffect, useState, useContext } from 'react'
import CookiePopin from './CookiePopin'
import CookieManage from "./CookieManage"

const COOKIE_NAME = 'consent'
const initial = {
    isSet: 0,
    marketing: 0
}

const CookieConsentStateContext = createContext()
const CookieConsentDispatchContext = createContext()

const CookieConsentProvider = ({ children }) => {
    const [cookieValue, setCookieValue] = useState(initial)
    const [isInitialRender, setIsInitialRender] = useState(true)
    const [popupIsOpen, setPopupIsOpen] = useState(false)
    const [managePopupIsOpen, setManagePopupIsOpen] = useState(false)

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'update':
                return {
                    ...action.value,
                }
            case 'toggle':
                return {
                    ...state,
                    isSet: 1,
                    [action.value]: !state[action.value],
                }
            case 'accept':
                return {
                    ...state,
                    isSet: 1,
                    [action.value]: true,
                }
            case 'decline':
                return {
                    ...state,
                    isSet: 1,
                    [action.value]: false,
                }
            case 'acceptAll':
                setPopupIsOpen(false)
                return {
                    ...state,
                    isSet: 2,
                }
            case 'declineAll':
                setPopupIsOpen(false)
                return {
                    ...state,
                    isSet: 1,
                }
            case 'hideManageCookiePopup':
                setManagePopupIsOpen(false)
                return state
            case 'showManageCookiePopup':
                setManagePopupIsOpen(true)
                return state
            case 'hideCookiePopup':
                setPopupIsOpen(false)
                return state
            case 'showCookiePopup':
                setPopupIsOpen(true)
                return state
            default:
                throw new Error()
        }
    }, cookieValue)

    useEffect(() => {
        function getCookie() {
            const regex = new RegExp(`(?:(?:^|.*;\\s*)${COOKIE_NAME}\\s*\\=\\s*([^;]*).*$)|^.*$`)
            const cookie = document.cookie.replace(regex, "$1")
            return cookie.length ? JSON.parse(cookie) : initial
        }
        const v = getCookie()
        dispatch({type:'update', value: v})
        setPopupIsOpen(v.isSet === 0)
    }, [])

    // Update the cookie when state changes
    useEffect(() => {
        if( !isInitialRender ) {
            document.cookie = `${COOKIE_NAME}=${JSON.stringify(state)}; max-age=12000000;`
            setCookieValue(state)
        } else {
            setIsInitialRender(false)
        }
    }, [state])

    return (
        <CookieConsentStateContext.Provider value={state}>
            <CookieConsentDispatchContext.Provider value={dispatch}>
                {children}
                {popupIsOpen && <CookiePopin dispatch={dispatch} />}
                {managePopupIsOpen && <CookieManage dispatch={dispatch} />}
            </CookieConsentDispatchContext.Provider>
        </CookieConsentStateContext.Provider>
    )
}

function useCookieConsentState() {
    const context = useContext(CookieConsentStateContext)
    if (context === undefined) {
        throw new Error('useCookieConsentState must be used within CookieProvider')
    }
    return context
}

function useCookieConsentDispatch() {
    const context = useContext(CookieConsentDispatchContext)
    if (context === undefined) {
        throw new Error('useCookieConsentDispatch must be used within CookieProvider')
    }
    return context
}

export { CookieConsentProvider, useCookieConsentState, useCookieConsentDispatch }
