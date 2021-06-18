import data from "../../../content/datas/landlords.json"

const LandlordsMap = props => (
    <figure className={props.css}>
        <ul className={"flex items-center gap-8 justify-center flex-wrap"}>
            {data.items.map((el) => {
                return el.items.map((els, is) => (
                    <li key={is} className={["w-1/5 md:w-1/4 flex flex-col items-center justify-center space-y-2 text-center"].join(' ')}>
                        <picture>
                            <img className={"h-12"} src={els.map} alt={""} loading={"lazy"} />
                        </picture>
                        <span className={"text-sm font-medium opacity-25 text-black"}>{els.name}</span>
                    </li>
                ))
            })}
        </ul>
    </figure>
)

export default LandlordsMap
