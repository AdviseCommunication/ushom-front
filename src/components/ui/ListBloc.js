import Parser from "html-react-parser"

const ListBloc = props => {
    if( props.masquer ) {
        return null
    }

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
                    {Object.entries(props.guide).map((elx,x) => {
                        const isSpecial = Object.entries(props.guide).length > 8 && x === 4
                        return (
                            <li
                                className={[
                                    "flex flex-col",
                                    (isSpecial ? "uppercase" : null),
                                    (isSpecial || x === 9 ? "-mx-8 px-8 pt-6 md:col-span-2 border-gray border-t-2 border-black border-opacity-10 border-t" : null),
                                    ((isSpecial || x === 9) && props.logo ? "md:-ml-0 md:pl-0" : null),
                                ].join(' ')}
                                key={x}
                            >
                                <span className={"text-2xl"}>
                                    {props.datas[elx[0]] || (!isSpecial && "-")}
                                </span>
                                {(x === 1 && props.datas.notes) &&
                                    <span className={"text-xs"}>{Parser(props.datas.notes)}</span>
                                }
                                <span
                                    className={[
                                        "font-medium md:text-sm md:pr-8 lg:pr-16 xl:pr-32",
                                        (isSpecial ? "underline underline-offset-1 -mb-2" : "text-primary"),
                                    ].join(' ')}
                                >
                                    {elx[1]}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ListBloc
