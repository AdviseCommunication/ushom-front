import Container from "../ui/Container"

const CategorySwitcher = props => {

    return (
        <nav className={"relative py-24 bg-light"}>
            <picture>
                <img className={"absolute inset-0 h-full w-full object-cover object-center"} src={"/static/images/pattern.svg"} alt={""} loading={"lazy"} />
            </picture>
            <Container css={"relative"}>
                <ul className={"flex flex-col space-y-4 md:space-y-0 md:space-x-8 md:flex-row justify-center items-center"}>
                    {props.cats.map((el,i) => (
                        <li key={i}>
                            <button
                                type={"button"}
                                onClick={() => props.clickHandler(i)}
                                className={[
                                    "group flex items-center space-x-4 text-xl font-bold bg-white shadow-large p-6 ring-primary",
                                    "hover:text-primary transform transition hover:-translate-y-px focus:outline-none focus:ring-2",
                                    (props.current === i ? "text-primary" : null),
                                ].join(' ')}
                            >
                                <span>{el}</span>
                                <svg className={"fill-current w-4 lg:w-2 transition transform group-hover:translate-x-1 group-hover:-translate-y-px"} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d={(props.current === i ? "M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" : "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z")} />
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>
            </Container>
        </nav>
    )
}

export default CategorySwitcher
