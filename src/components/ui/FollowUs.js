import data from '../../../content/nav.json'
import text from '../../../content/main.json'

import NavItem from "../layout/nav/NavItem"
import PropTypes from "prop-types"

const colorMap = {
    primary: 'bg-primary hover:bg-black',
    white: 'bg-white hover:bg-black',
}

const FollowUs = (props) => {
    const computeColor = colorMap[props.theme] ? colorMap[props.theme] : colorMap.primary

    return (
        <>
            {props.title &&
                <li className={"font-bold md:text-lg xl:text-2xl"}>
                    {text.followTitle}
                </li>
            }
            <li>
                <ul className={["flex items-center space-x-4", props.css].join(' ')}>
                    {data.social?.items?.map((el,i) => (
                        <NavItem
                            key={i}
                            href={el.url}
                            blank={el.blank}
                            css={["block p-1 transition-all duration-150 ease-in", computeColor].join(' ')}
                        >
                            {el.icon &&
                                <picture
                                    className={[
                                        "flex items-center p-1 justify-center",
                                        (props.theme === 'primary' ? 'filter-white' : 'filter-primary'),
                                        props.iconSize
                                    ].join(' ')}
                                >
                                    <img className={"object-contain w-full h-full"} src={el.icon} alt={el.label} height={24} width={24} />
                                </picture>
                            }
                            <span className={el.icon ? 'sr-only' : null}>{el.label}</span>
                        </NavItem>
                    ))}
                </ul>
            </li>
        </>
    )
}

FollowUs.defaultProps = {
    title: true,
    css: ``,
    theme: `primary`,
    iconSize: `h-8 w-8`,
}

FollowUs.propTypes = {
    title: PropTypes.bool,
    css: PropTypes.string,
    theme: PropTypes.string,
    iconSize: PropTypes.string,
}

export default FollowUs
