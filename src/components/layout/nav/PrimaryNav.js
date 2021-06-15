import text from '../../../../content/main.json'
import navData from '../../../../content/nav/main.json'

import {useState} from "react"
import NavItem from "./NavItem"
import BarIcon from '../../../images/menu.svg'
import CloseIcon from '../../../images/close.svg'

const PrimaryNav = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const MenuIcon = navbarOpen ? CloseIcon : BarIcon

    return (
        <nav className={["text-right text-md"].join(' ')}>
            <button className={"block ml-auto group lg:hidden relative z-50 focus:outline-none"}
                    onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <MenuIcon className={"w-8 h-8 text-primary group-hover:text-secondary"} />
                <span className={"sr-only"}>
                    {navbarOpen ? text.menu?.closeLabel : text.menu?.openLabel}
                </span>
            </button>
            <ul className={[
                    "space-y-10 lg:flex flex-col lg:space-y-0 lg:flex-row lg:space-x-4 xl:space-x-6",
                    (navbarOpen ? "fixed sm:min-w-120 pt-32 top-0 right-0 pl-24 h-screen pr-8 flex flex-col justify-center overflow-y-auto bg-white shadow-xl" : "hidden"),
                ].join(' ')}
            >
                {navData.map((el,i) => (
                    <NavItem key={i}
                             href={el.url}
                             target={el.blank}
                             css={[
                                 "block font-medium uppercase text-primary",
                                 "underline-offset-1 hover:underline-offset-2 hover:underline-secondary-2",
                                 "transition-all duration-150 ease-in hover:text-secondary",
                                 (navbarOpen ? "text-4xl" : null),
                             ].join(' ')}
                    >
                        {/* TODO : If icon display only icon and make label sr-only */}
                        {el.label}
                    </NavItem>
                ))}
            </ul>
        </nav>
    )
}

export default PrimaryNav
