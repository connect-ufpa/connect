import { firebaseAuth, database } from '../config/Config'
import {
    validateLetters,
    validateNumbers,
    validateDates,
    validateEmails,
    validatePasswords,
    validateUser,
    matchPasswords
} from '../helpers/HandleData';
import {
    VALID_NAME,
    INVALID_NAME,
    VALID_REGISTRATION,
    INVALID_REGISTRATION,
    VALID_BIRTHDAY,
    INVALID_BIRTHDAY,
    VALID_EMAIL,
    INVALID_EMAIL,
    VALID_PASSWORD,
    INVALID_PASSWORD,
    MATCH_PASSWORD,
    MISMATCH_PASSWORD,
    CREATING_ACCOUNT,
    CREATE_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_ERROR
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
        return { type: VALID_BIRTHDAY, payload: birth };
    }
    return { type: INVALID_BIRTHDAY, payload: birth };
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

export const saveUser = (user) => {
    const result = validateUser(user);
    if (result) {
        return (dispatch) => {
            dispatch({ type: CREATING_ACCOUNT });
            firebaseAuth().createUserWithEmailAndPassword(user.email, user.password)
                .then(() => {
                    persistUser(dispatch, user);
                }).catch(() => { dispatch({ type: CREATE_ACCOUNT_ERROR }) });
        }
    }
};

const persistUser = (dispatch, user) => {
    const { nome, matricula, nascimento, email } = user;

    database().ref(`/users/`).push({ nome, matricula, nascimento, email }).then(() => {
        dispatch({ type: CREATE_ACCOUNT_SUCCESS });
    }).catch(() => {
        dispatch({ type: CREATE_ACCOUNT_ERROR });
        currentUser.delete();
    });
};
