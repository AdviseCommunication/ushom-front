import data from "../../../content/main.json"
import PropTypes from "prop-types"

const Address = props => {

    return (
        <div className={props.css}>
            <p className={props.titleCss}>
                {data.app.description}
            </p>
            <p className={"flex flex-col md:text-sm"}>
                <span>{data.address.street}</span>
                <span>{data.address.city}</span>
            </p>
        </div>
    )
}

Address.defaultProps = {
    css: "text-center space-y-2 md:text-left",
    titleCss: "text-xl md:text-base font-medium",
}

Address.propTypes = {
    css: PropTypes.string,
    inputCss: PropTypes.string,
}

export default Address
