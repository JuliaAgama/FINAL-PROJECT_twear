export const required = value => {
    if (value) return undefined;
    return "Field is required"
};

export const emptyString = value => {
    if (value.trim() !== '') return undefined;
    return "Field can't be empty"
};

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined