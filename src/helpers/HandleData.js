import { onlyLetters, onlyNumbers, dateFormat, hourFormat } from '../config/Config';

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

export const validateHours = (hour) => {
    const validateHour = hourFormat.exec(hour);
    if (validateHour) return hour;
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
    if (!user.error) {
        if ((user.name === '') || (user.registration === '') || (user.birth === '') || (user.email === '') || (user.password === ''))
            return false;
        else
            return true;
    }  return false;
};

export const validateEvent = (evento) => {
    if (!evento.error) {
        if ((evento.nome === '') || (evento.descricao === '') || (evento.local === '') || (evento.data_inicio === '') || (evento.hora_inicio === '') || (evento.data_fim === '') || (evento.hora_fim === '') || (evento.coords === '')) {
            return false;
       } 
        return true;
    } return false;
};

export const validateLogin = (credentials) => {
    if (!credentials.error) {
        if ((credentials.email === '') || (credentials.password === '')) 
            return false;
        else 
          return true;
    }
    return false;
}