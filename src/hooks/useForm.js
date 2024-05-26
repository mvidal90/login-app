import { useState} from 'react';

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);

    const handleInputChange = async (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

   
    const resetForm = () => setValues(initialValue);

    return {values, handleInputChange, resetForm};
};
