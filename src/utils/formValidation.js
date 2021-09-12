import { React, useState, useCallback } from 'react';

function useValidation() {

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isInputValid, setIsInputValid] = useState(false);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({...prevState, [name]: value}));
        setErrors(errors => ({...errors, [name]: e.target.validationMessage}));
        setIsInputValid(e.target.closest("form").checkValidity());
    }, [setFormValues]);

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
        isInputValid,
        setIsInputValid,
        resetForm,
        handleInputChange,
    };
}

export default useValidation;