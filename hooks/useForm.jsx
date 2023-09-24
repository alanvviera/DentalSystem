import { useState } from "react"


export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);


    const onChange = ({ target }) => {
        const { name, value } = target;
        setFormState(
            {
                ...formState,
                [name]: value
            }
        );
    }

    const cleanFields=()=> {
        setFormState(initialForm);
    }

    return {
        ...formState,
        onChange,
        cleanFields
    };
}