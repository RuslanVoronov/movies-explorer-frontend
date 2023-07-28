import { useState } from "react";

export function useForm(inputValues) {
    const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [values, setValues] = useState(inputValues);
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [checkbox, setCheckbox] = useState(false)

    const handleChange = (event) => {
        const { value, name } = event.target;
        setIsValid(event.target.closest('form').checkValidity());
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: event.target.validationMessage });
        if (name === "email") {
            if (!EMAIL_REGEXP.test(value)) {
                setIsValid(false)
                setErrors({
                    ...errors,
                    'email': 'Формат почты неправильный'
                })
                return
            }
            setIsValid(true)
        }
    };

    const handleChangeCheckBox = (event) => {
        setCheckbox(event.target.checked)
    }
    return { values, handleChange, setIsValid, isValid, errors, checkbox, handleChangeCheckBox };
}