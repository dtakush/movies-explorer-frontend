import { useState, useCallback } from 'react';

function useValidation(userData) {
    const [formValues, setFormValues] = useState({})
    const [errors, setErrors] = useState({});
    const [isInputValid, setIsInputValid] = useState(false);

    const handleInputChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setFormValues({...formValues, [name]: value});
        setErrors({...errors, [name]: target.validationMessage});
        setIsInputValid(target.closest('form').checkValidity());
    };

    // const { inputName, inputEmail, inputPassword } = formValues;

    return {
        formValues,
        setFormValues,
        errors,
        setErrors,
        isInputValid,
        setIsInputValid,
        handleInputChange,
    };
}

export default useValidation;