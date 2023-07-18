import { useState } from "react";

export function useForm(inputValues) {
    const [values, setValues] = useState(inputValues);
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: event.target.validationMessage });
        setIsValid(event.target.closest('form').checkValidity());
    };

    return { values, handleChange, setIsValid, isValid, errors };
}