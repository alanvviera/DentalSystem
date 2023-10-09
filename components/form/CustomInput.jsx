"use client";
import FormTextError from './FormTextError'

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
