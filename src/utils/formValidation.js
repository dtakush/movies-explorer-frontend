import { useState, useCallback } from 'react';

function useValidation(userData) {
    const [formValues, setFormValues] = useState({
        inputName: '',
        inputEmail: '',
        inputPassword: ''
    })
    const [errors, setErrors] = useState({});
    const [isInputValid, setIsInputValid] = useState(false);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({...prevState, [name]: value}));
        setErrors(errors => ({...errors, [name]: e.target.validationMessage}));
        setIsInputValid(e.target.closest("form").checkValidity());
    }, [setFormValues]);

    // const { inputName, inputEmail, inputPassword } = formValues;

    return {
        formValues,
        errors,
        isInputValid,
        handleInputChange,
    };
}

export default useValidation;