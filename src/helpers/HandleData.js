import { onlyLetters, onlyNumbers, dateFormat } from '../config/Config';

export const validateLetters = (text) => {
    const validateText = onlyLetters.exec(text);
    if (validateText) return text;
};

export const validateNumbers = (number) => {
    const validateNumber = onlyNumbers.exec(number);
    if (validateNumber) return number;
};
export const validateDates = (date) => {
    const validateDate = dateFormat.exec(date);
    if (validateDate) return date;
};

export const validateEmails = (email) => {
    if (email !== '') {
        if ((email.indexOf('.com') !== -1)
            & (email.indexOf('@') !== -1)) {
            return email;
        }
    }
};

export const validatePasswords = (password) => {
    if (password.length >= 6) return password;
};

export const matchPasswords = (confirmPassword, password) => {
    if (confirmPassword === password) return true; 
};

export const validateUser = (user) => {
    console.log("Usuário: ", user);
    if(!user.error) {
        if ((user.name === '') || (user.registration === '') || (user.birth === '') || (user.email === '') || (user.password === ''))
            return false;
        else
            return true;
    }  return false;
}