export default function Validator(values) {
    const errors = {};
    const requiredFields = [
        'login'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required';
        }
    });
    // if (
    //     values.email &&
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    // ) {
    //     errors.email = 'Invalid email address';
    // }
    console.log(errors);
    return errors;
}