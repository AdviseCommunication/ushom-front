import data from "../../../../content/main.json"

import Title from "../../ui/Title"
import Switcher from "../../ui/Switcher"
import {Button} from "../../ui/Button"
import {useCookieConsentState} from "./CookieConsent"

const CookieManage = ({dispatch}) => {
    const cookieConsentState = useCookieConsentState()
    function onManage() {
        dispatch({type: 'hideCookiePopup'})
        dispatch({type: 'hideManageCookiePopup'})
    }

    return (
        <aside className={"bg-primary bg-opacity-90 inset-0 fixed z-100 flex items-center justify-center md:p-8"}>
            <div className={"bg-white shadow w-full max-w-screen-md space-y-8 p-8 md:p-12"}>
                <div className={"space-y-2"}>
                    <Title>
                        {data.consent.customize.title}
                    </Title>
                    <p className={"leading-relaxed"}>{data.consent.customize.content}</p>
                </div>
                <ul className={"border border-gray px-8 py-3"} data-consentisset={cookieConsentState.isSet}>
                    {data.consent.services.map((el,i) => (
                        <li key={i} className={"flex py-3 items-center justify-between"}>
                            <span>
                                {el.label}
                            </span>
                            <Switcher
                                value={cookieConsentState.isSet === 2 || cookieConsentState[el.id]}
                                clickHandler={() => dispatch({type: 'toggle', value: el.id})}
                            />
                        </li>
                    ))}
                </ul>
                <Button clickHandler={() => onManage()}>
                    {data.consent.customize.validate}
                </Button>
            </div>
        </aside>
    )
}

export default CookieManage
