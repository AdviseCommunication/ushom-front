import data from "../../../../content/main.json"

import Link from "next/link"
import {Button} from "../../ui/Button"

const CookiePopin = ({dispatch}) => (
    <aside className={"fixed z-50 bottom-0 right-0 md:right-6 md:bottom-4 max-w-screen-lg shadow-large bg-primary text-white py-4 px-8 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 md:items-center"}>
        <p className={"text-sm leading-relaxed"}>
            {data.consent?.content}
            {" "}
            <Link href={"/"}><strong>{data.consent?.more}</strong></Link>
        </p>
        <span className={"flex-shrink-0"}>
            <Button clickHandler={() => dispatch({type: 'acceptAll'})} size={1}>
                <span className={"py-2"}>{data.consent?.accept}</span>
            </Button>
            <Button clickHandler={() => dispatch({type: 'declineAll'})} size={1}>
                <span className={"py-2"}>{data.consent?.decline}</span>
            </Button>
            <Button clickHandler={() => dispatch({type: 'showManageCookiePopup'})} size={1}>
                <span className={"py-2"}>{data.consent?.manage}</span>
            </Button>
        </span>
    </aside>
)

export default CookiePopin
