import { useState, useEffect } from 'react';

const useForm = (callback:Function, validate:any) => {

  interface error {
      email: string,
      domain: string,
      password: string
  }

  interface values {
    email: string,
    domain: string,
    password: string
  }

  const [values, setValues] = useState({} as values);
  const [errors, setErrors] = useState({} as error);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event:any) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event:any) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setErrors(validate(values));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;