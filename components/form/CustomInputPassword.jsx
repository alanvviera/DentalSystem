import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import FormTextError from './FormTextError'

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
