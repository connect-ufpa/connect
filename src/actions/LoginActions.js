import { firebaseAuth } from '../config/Config';
import { validateEmails, validatePasswords, validateLogin } from '../helpers/HandleData';
import { VALID_EMAIL_LOGIN, INVALID_EMAIL_LOGIN, VALID_PASSWORD_LOGIN, INVALID_PASSWORD_LOGIN, CREDENTIAL_VALID, CREDENTIAL_INVALID, CHECKING_CREDENTIAL } from '../actions/types';

export const loginEmailChange = (email) => {
  const validateEmail = validateEmails(email);

  if (validateEmail) {
    return { type: VALID_EMAIL_LOGIN, payload: email };
  }
  return { type: INVALID_EMAIL_LOGIN, payload: email };
}

export const loginPasswordChange = (password) => {
  const validatePassword = validatePasswords(password);
  if (validatePassword) {
    return { type: VALID_PASSWORD_LOGIN, payload: password };
  }
  return { type: INVALID_PASSWORD_LOGIN, payload: password };
}

export const loginUser = (credentials) => {
  const validate = validateLogin(credentials);


  if (validate) {
    return (dispatch) => {
      dispatch({ type: CHECKING_CREDENTIAL })

      firebaseAuth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
          dispatch({ type: CREDENTIAL_VALID });

        }).catch(() => {
          dispatch({ type: CREDENTIAL_INVALID });
        });
    }
  } else return { type: CREDENTIAL_INVALID }
}