import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import FormTextError from './FormTextError'

/**
 * CustomInputPassword component for displaying an input field for passwords with toggle functionality.
 *
 * @param {Object} props - Component properties.
 * @param {boolean} showPassword - Indicates whether the password should be visible (true) or masked (false).
 * @param {string} placeholder - The placeholder text for the input field.
 * @param {string} name - The name attribute for the input field.
 * @param {string} password - The value of the password input field.
 * @param {Function} onChange - The function to handle changes in the input field.
 * @param {string} placeholderError - The error message to display if the input is invalid.
 * @param {Function} toggleShowPassword - The function to toggle the password visibility.
 * @param {string} pattern - The pattern attribute for input validation.
 * @returns {JSX.Element} JSX element representing the input field for passwords.
 */


export const CustomInputPassword = ({showPassword, placeholder, name, password, onChange, placeholderError, toggleShowPassword, pattern}) => {
    return (
        <div className="relative grid grid-cols-1">
            <input
                className=" outline-0 py-2 px-[15px] w-[100%] h-[40px] font-extralight border-b border-solid border-[#8080804c] peer"
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                name={name}
                value={password}
                onChange={onChange}
                pattern={pattern}
                required
            />
            <FormTextError text={placeholderError} />
            {password && (
                <button
                    className="absolute right-0 top-0 px-2 py-1 border-none"
                    onClick={toggleShowPassword}
                    type="button"
                >
                    {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </button>
            )}
        </div>
    )
}
