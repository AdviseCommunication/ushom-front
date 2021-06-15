import data from "../../../content/main.json"

const Switcher = (props) => {

    return (
        <button
            className={[
                "flex p-1 rounded-full w-10 h-6 focus:outline-none focus:ring-2 focus:ring-secondary",
                props.value ? "bg-primary justify-end" : "bg-gray"
            ].join(' ')}
            type={"button"}
            onClick={props.clickHandler || null}
        >
            <span
                className={[
                    "bg-white w-4 h-4 rounded-full",
                    props.value ? "" : ""
                ].join(' ')}
            />
            <span className={"sr-only"}>{data.switcher.label}</span>
        </button>
    )
}

export default Switcher
