import Parser from "html-react-parser"

const ListBloc = props => {

    return (
        <div className={"bg-light bg-opacity-50 shadow-large p-8 space-y-8"}>
            {props.title &&
                <p className={"font-bold text-lg underline underline-offset-1"}>
                    <strong>{Parser(props.title)}</strong>
                </p>
            }
            <ul className={"grid grid-cols-1 gap-6 md:grid-cols-2"}>
                {Object.entries(props.guide).map((elx,x) => (
                    <li className={"flex flex-col"} key={x}>
                        <span className={"text-2xl"}>
                            {props.items[elx[0]] || "-"}
                        </span>
                        <span className={"font-medium text-primary md:text-sm md:pr-8 lg:pr-16 xl:pr-32"}>
                            {elx[1]}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListBloc
