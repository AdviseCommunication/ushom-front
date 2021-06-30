import PropTypes from "prop-types"
import slugify from "../../utils/slugify"

const FormInput = props => {

    return (
        <label className={props.css}>
            <span className={"sr-only"}>{props.label}</span>
            <input
                className={["border-gray border w-full px-4 py-3 focus:outline-none focus:border-primary", props.inputCss].join(' ')}
                type={props.type}
                placeholder={props.label}
                name={slugify(props.label)}
                required={props.required || null}
            />
        </label>
    )
}

FormInput.defaultProps = {
    css: "",
    inputCss: "",
    label: "",
}

FormInput.propTypes = {
    css: PropTypes.string,
    inputCss: PropTypes.string,
    label: PropTypes.string,
}

export default FormInput
