import { useState } from "react";

export function useForm(inputValues) {
    const [values, setValues] = useState(inputValues);
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [checkbox, setCheckbox] = useState(false)

    const handleChange = (event) => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: event.target.validationMessage });
        setIsValid(event.target.closest('form').checkValidity());
    };

    const handleChangeCheckBox = (event) => {
        setCheckbox(event.target.checked)
    }
    return { values, handleChange, setIsValid, isValid, errors, checkbox, handleChangeCheckBox };
}