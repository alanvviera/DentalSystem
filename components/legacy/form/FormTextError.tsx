
const FormTextError = ({text=""}) => {
    return (
        <p className="mt-2 mb-2 hidden text-[11px] text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block text-justify px-1">
           {text}
        </p>
    )
}

export default FormTextError