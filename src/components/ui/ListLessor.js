import Parser from "html-react-parser"

const specialFields = [0, 5, 6, 11]
const notNc = [9, 10]
const notPf = [10]

const ListLessor = props => {
    if( props.masquer ) {
        return null
    }

    const all = Object.entries(props.guide)

    const moveElement = (array, initialIndex, finalIndex) => {
        array.splice(finalIndex,0,array.splice(initialIndex,1)[0])
        return array
    }

    moveElement(all, 10, 0)
    moveElement(all, 11, 5)
    moveElement(all, 12, 11)
    moveElement(all, 3, 2)
    moveElement(all, 8, 7)

    if( props.specific === 'nc' ) {
        moveElement(all, 13, 7)
        moveElement(all, 14, 8)
        moveElement(all, 10, 13)
        moveElement(all, 9, 13)
        moveElement(all, 13, 14)
        moveElement(all, 12, 15)
    }

    if( props.specific === 'pf' ) {
        moveElement(all, 15, 7)
        moveElement(all, 16, 8)
        moveElement(all, 17, 9)
        moveElement(all, 11, 16)
        moveElement(all, 18, 11)
        moveElement(all, 19, 12)

    }

    console.log(all)
    console.log(props.datas)
    return (
        <div className={"bg-light bg-opacity-50 shadow-large p-8 space-y-8"}>
            {props.title &&
                <p className={"font-bold text-lg underline underline-offset-1"}>
                    <strong>{Parser(props.title)}</strong>
                </p>
            }
            <div className={"flex flex-col items-center md:items-start md:flex-row"}>
                {props.logo &&
                    <a
                        className={["flex flex-col text-center pb-8 max-w-xs md:pr-8 md:w-56 xl:w-80", (!props.website ? "pointer-events-none" : null)].join(' ')}
                        href={props.website || ""}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                    >
                        <picture>
                            <img src={props.logo} alt={""} loading={"lazy"} />
                        </picture>
                        {props.website &&
                            <span className={"md:text-sm text-black opacity-25 hover:opacity-50 truncate"}>
                                {props.website.replace("https://", "")}
                            </span>
                        }
                    </a>
                }
                <ul className={"w-full grid grid-cols-1 gap-6 md:grid-cols-2"}>
                    {all.map((elx,x) => {
                        if( props.specific === 'pf' && notPf.includes(x) ) {
                            return null
                        }

                        if( props.specific === 'nc' && notNc.includes(x) ) {
                            return null
                        }

                        if( x > 12 ) {
                            return null
                        }

                        return (
                            <li
                                className={[
                                    "flex flex-col",
                                    (specialFields.includes(x) ? "uppercase -mx-8 px-8 md:col-span-2" : null),
                                    ((specialFields.includes(x) && x !== 0) ? "pt-6 border-black border-opacity-10 border-t" : null),
                                    ((x === 5 || x === 11) && props.logo ? "md:-ml-0 md:pl-0" : null),
                                    (x === 6 ? "hidden" : null),
                                ].join(' ')}
                                key={x}
                                data-x={x}
                            >
                                {(props.specific === 'pf' && (x === 11 || x === 12)) ? (
                                    <span className={"text-2xl"}>{x !== 11 && props.datas['z6']}</span>
                                ) : (
                                    <span className={"text-2xl"}>
                                        {props.datas[elx[0]] || (specialFields.includes(x) || "-")}
                                    </span>
                                )}
                                <span
                                    className={[
                                        "font-medium md:pr-8 lg:pr-16 xl:pr-32",
                                        (specialFields.includes(x) ? "underline-offset-1 md:text-sm underline -mb-2" : "text-primary"),
                                    ].join(' ')}
                                >
                                    {elx[1]}
                                </span>
                                {(x === 1 && props.datas.notes) &&
                                    <span className={"text-xs"}>{Parser(props.datas.notes)}</span>
                                }
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ListLessor
