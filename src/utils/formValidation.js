import { useState, useCallback  } from 'react';

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

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setFormValues(newValues);
            setErrors(newErrors);
            setIsInputValid(newIsValid);
        },
        [setFormValues, setErrors, setIsInputValid]
    );

    return {
        formValues,
        setFormValues,
        errors,
        setErrors,
        isInputValid,
        setIsInputValid,
        resetForm,
        handleInputChange,
    };
}

export default useValidation;