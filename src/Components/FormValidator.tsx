interface values {
    email: string,
    domain: string,
    password: string
}

interface error {
    email: string,
    domain: string,
    password: string
}

export default function loginValidate(values:values) {
    const errors = {} as error;
    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    // if (!values.domain) {
    //     errors.domain = 'Domain is required';
    // }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    return errors;
  };