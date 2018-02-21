
import { VALID_EMAIL_FORGOT, INVALID_EMAIL_FORGOT } from './types';
import { validateEmails } from '../helpers/HandleData';

export const onEmailForgotChange = (email) => {
  const validateEmail = validateEmails(email);
  if (validateEmail) return { type: VALID_EMAIL_FORGOT, payload: email };
  
  return { type: INVALID_EMAIL_FORGOT, payload: email };
};