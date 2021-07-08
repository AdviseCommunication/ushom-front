import Parser from "html-react-parser"

const ListBloc = props => {

    return (
        <div className={"bg-light bg-opacity-50 shadow-large p-8 space-y-8"}>
            {props.title &&
                <p className={"font-bold text-lg underline underline-offset-1"}>
                    <strong>{Parser(props.title)}</strong>
                </p>
            }
            <div className={"flex flex-col items-center md:items-start md:flex-row"}>
                <ul className={"w-full grid grid-cols-1 gap-6 md:grid-cols-2"}>
                    {Object.entries(props.guide).map((elx,x) => (
                        <li className={"flex flex-col"} key={x}>
                            <span className={"text-2xl"}>
                                {props.datas[elx[0]] || "-"}
                            </span>
                            <span className={"font-medium md:text-sm md:pr-8 lg:pr-16 xl:pr-32 text-primary"}>
                                {elx[1]}
                            </span>
                            {(x === 1 && props.datas.notes) &&
                                <span className={"text-xs"}>{Parser(props.datas.notes)}</span>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ListBloc
