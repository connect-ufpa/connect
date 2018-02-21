import { VALID_EMAIL_FORGOT, INVALID_EMAIL_FORGOT } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  emailForgot: '',
  error: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VALID_EMAIL_FORGOT:
      return { ...state, email: action.payload, emailForgot: '', error: false };
    case INVALID_EMAIL_FORGOT:
      return { ...state, email: action.payload, emailForgot: 'Digite um e-mail válido!', error: true };
    default:
      return state;
  }
};