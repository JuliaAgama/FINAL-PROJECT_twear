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


export const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined;

export const name = value =>
    value && !/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/i.test(value) ? 'Name can\'t contain numbers or consist of one character' : undefined;

export const phoneNumber = value =>
    value && !/^\+380 \(\d{2}\) \d{3} \d{2} \d{2}$/i.test(value) ? 'Invalid phone number' : undefined;