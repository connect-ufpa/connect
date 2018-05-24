import { firebaseAuth, database } from '../config/Config';
import { validateLetters, validateNumbers, validateDates, validateEmails, validatePasswords, validateUser, matchPasswords } from '../helpers/HandleData';
import {
  VALID_NAME,
  INVALID_NAME,
  VALID_REGISTRATION,
  INVALID_REGISTRATION,
  VALID_BIRTHDAY,
  INVALID_BIRTHDAY,
  VALID_PERFIL
} from './types';


export const dataPerfil = () => {
  return dispatch => {
    const usuario = firebaseAuth().currentUser;
    database().ref(`usuario/${usuario.uid}`)
      .on("value", snapshot => {
        dispatch({ type: VALID_PERFIL, payload: snapshot.val() })
      })
  }
}


export const saveDataUser = (user) => {
  const validUser = validateUser(user);
  console.log(user, validUser);
  if (validUser) {
    return (dispatch) => {
      const usuario = firebaseAuth().currentUser;
      database().ref(`usuario/${usuario.uid}`).set({
        nome: user.namePerfil,
        matricula: user.registrationPerfil,
        nascimento: user.birthdayPerfil,
      }).then(() => {
        alert('Dados Salvos com sucesso');
        this.props.navigation.navigate('MeuPerfil');
        //dispatch({ type: UPDATE_DATA_USER_SUCESS });

      })
        .catch(() => {
          dispatch({ type: UPDATE_DATA_USER_ERROR });

        });
    }
  }
};
