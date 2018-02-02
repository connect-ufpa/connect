import {
    validateLetters,
    validateNumbers,
    validateDates
} from '../helpers/HandleData';
import {
    VALID_NAME,
    INVALID_NAME,
    VALID_REGISTRATION,
    INVALID_REGISTRATION,
    VALID_DATE,
    INVALID_DATE
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

