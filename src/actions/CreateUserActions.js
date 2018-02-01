import { onlyLetters } from '../config/Config';
import { VALID_NAME, INVALID_NAME } from './types';

export const onNameChanged = (name) => {
    const validateName = onlyLetters.exec(name);
    if (validateName) {
        return { type: VALID_NAME, payload: name };
    }
        return { type: INVALID_NAME, payload: '' };
};
