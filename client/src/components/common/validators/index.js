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
    value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const name = value =>
    value && !/^[a-zA-Zа-яА-Я]+$/i.test(value) ? 'Allowed characters for First Name is a-z, A-Z, а-я, А-Я.' : undefined;

export const login = value =>
    value && !/^[a-zA-Z0-9]+$/i.test(value) ? 'Allowed characters for login is a-z, A-Z, 0-9.' : undefined;

export const password = value =>
    value && !/^[a-zA-Z0-9]+$/i.test(value) ? 'Allowed characters for password is a-z, A-Z, 0-9.' : undefined;

export const phoneNumber = value =>
    value && !/^\+380 \(\d{2}\) \d{3} \d{2} \d{2}$/i.test(value) ? 'Invalid phone number' : undefined;