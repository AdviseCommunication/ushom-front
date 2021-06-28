import text from '../../../../content/main.json'
import navData from '../../../../content/nav/main.json'

import {useState} from "react"
import NavItem from "./NavItem"
import BarIcon from '../../../images/menu.svg'
import CloseIcon from '../../../images/close.svg'
import {LinkButton} from "../../ui/Button"

const PrimaryNav = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const MenuIcon = navbarOpen ? CloseIcon : BarIcon

    return (
        <nav className={["flex flex-row-reverse items-center text-center ml-auto xl:flex-row"].join(' ')}>
            <button className={"block ml-6 group xl:hidden relative z-50 focus:outline-none"}
                    onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <MenuIcon className={"w-8 h-8 text-primary group-hover:text-primary"} />
                <span className={"sr-only"}>
                    {navbarOpen ? text.menu?.closeLabel : text.menu?.openLabel}
                </span>
            </button>
            <ul className={[
                    "space-y-10 flex-col xl:space-y-0 xl:flex-row xl:space-x-4 xl:mr-4 2xl:mr-8",
                    (navbarOpen ? "fixed xl:static xl:w-auto xl:h-auto xl:p-0 w-full inset-0 h-screen py-32 px-8 flex justify-center overflow-y-auto bg-white shadow-xl xl:bg-transparent xl:shadow-none" : "hidden xl:flex"),
                ].join(' ')}
            >
                {navData.map((el,i) => (
                    <NavItem
                        key={i}
                        href={el.url}
                        target={el.blank}
                        css={[
                            "block font-medium text-black tracking-tight",
                            "transition-all duration-150 ease-in hover:text-primary",
                            (navbarOpen ? "text-4xl xl:text-base" : null),
                        ].join(' ')}
                    >
                        {el.label}
                    </NavItem>
                ))}
            </ul>
            <LinkButton href={"/"} theme={"wide"}>
                <svg className={"w-6 -my-1 -mx-2 fill-current 2xl:hidden"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.082 0-8.465 4.949-3.732 13.678 1.598 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h1.995c0-3.134-.125-3.55 1.838-4.003 2.851-.657 5.543-1.278 6.525-3.456.359-.795.592-2.103-.338-3.815-2.058-3.799-2.578-7.089-1.423-9.026 1.354-2.275 5.426-2.264 6.767-.034 1.15 1.911.639 5.219-1.403 9.076-.91 1.719-.671 3.023-.31 3.814.99 2.167 3.707 2.794 6.584 3.458 1.879.436 1.76.882 1.76 3.986h1.995l.005-1.241c0-2.52-.199-3.975-3.178-4.663z"/></svg>
                <span className={"sr-only 2xl:not-sr-only"}>Espace Membres</span>
            </LinkButton>
        </nav>
    )
}

export default PrimaryNav
