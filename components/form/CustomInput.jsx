"use client";
import FormTextError from './FormTextError'
/**
 * CustomInput component for displaying a custom input field in a form.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.onChange - Function to handle input field changes.
 * @param {string} props.type - Input field type (e.g., "text", "email").
 * @param {string} props.name - Name of the input field.
 * @param {string} props.placeholder - Placeholder text for the input field.
 * @param {string} props.pattern - Regular expression pattern for input validation.
 * @param {string} props.formTextError - Text to display when there is a form validation error.
 * @param {string} props.value - Current value of the input field.
 * @returns {JSX.Element} JSX element representing the custom input field.
 */

export const CustomInput = ({onChange, type, name, placeholder, pattern, formTextError,value}) => {
    return (
        <div>
            <input
                className="outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] peer"
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                required
                pattern={pattern}
            />
            <FormTextError text={formTextError} />
        </div>
    )
}
