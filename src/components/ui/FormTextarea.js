import PropTypes from "prop-types"
import slugify from "../../utils/slugify"

const FormTextarea = props => {

    return (
        <label className={props.css}>
            <span className={"sr-only"}>{props.label}</span>
            <textarea
                className={["border-gray border w-full px-4 py-3 focus:outline-none focus:border-primary", props.inputCss].join(' ')}
                placeholder={props.label}
                name={slugify(props.label)}
                required={props.required || null}
            />
        </label>
    )
}

FormTextarea.defaultProps = {
    css: "",
    inputCss: "",
    label: "",
}

FormTextarea.propTypes = {
    css: PropTypes.string,
    inputCss: PropTypes.string,
    label: PropTypes.string,
}

export default FormTextarea
