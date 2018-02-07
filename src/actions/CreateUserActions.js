import {
    validateLetters,
    validateNumbers,
    validateDates,
    validateEmails,
    validatePasswords,
    matchPasswords
} from '../helpers/HandleData';
import {
    VALID_NAME,
    INVALID_NAME,
    VALID_REGISTRATION,
    INVALID_REGISTRATION,
    VALID_DATE,
    INVALID_DATE,
    VALID_EMAIL,
    INVALID_EMAIL,
    VALID_PASSWORD,
    INVALID_PASSWORD,
    MATCH_PASSWORD,
    MISMATCH_PASSWORD
} from './types';

export const onNameChanged = (name) => {
    const validateName = validateLetters(name);
    if (validateName) {
        return { type: VALID_NAME, payload: name };
    }
    return { type: INVALID_NAME };
};

export const onRegistrationChanged = (registration) => {
    const validateRegistration = validateNumbers(registration);
    if (validateRegistration) {
        return { type: VALID_REGISTRATION, payload: registration };
    }
    return { type: INVALID_REGISTRATION };
};

export const onBirthChanged = (birth) => {
    const validateBirth = validateDates(birth);
    if (validateBirth) {
        return { type: VALID_DATE, payload: birth };
    }
    return { type: INVALID_DATE, payload: birth };
};

export const onEmailChanged = (email) => {
    const validateEmail = validateEmails(email);
    if (validateEmail) {
        return { type: VALID_EMAIL, payload: email };
    }
    return { type: INVALID_EMAIL, payload: email };
};

export const onPasswordChanged = (password) => {
    const validatePassword = validatePasswords(password);
    if (validatePassword) {
        return { type: VALID_PASSWORD, payload: password };
    }
    return { type: INVALID_PASSWORD, payload: password };
};

export const onConfirmPasswordChanged = (confirmPassword, password) => {
    const validateMatchPasswords = matchPasswords(confirmPassword, password);
    if (validateMatchPasswords) {
        return { type: MATCH_PASSWORD, payload: confirmPassword };
    }
    return { type: MISMATCH_PASSWORD, payload: confirmPassword };
};
