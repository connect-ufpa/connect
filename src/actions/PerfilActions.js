import { firebaseAuth, database } from '../config/Config';
import { validateLetters, validateNumbers, validateDates, validateEmails, validatePasswords, validateUser, matchPasswords } from '../helpers/HandleData';
import {
  CHECKING_DATA_PERFIL,
  RETURN_DATA_PERFIL_SUCCESS,
  UPDATING_DATA_USER,
  UPDATE_DATA_USER_SUCESS,
  UPDATE_DATA_USER_ERROR
} from './types';


export const dataPerfil = () => {
  return dispatch => {
    dispatch({ type: CHECKING_DATA_PERFIL })

    const usuario = firebaseAuth().currentUser;
    database().ref(`usuario/${usuario.uid}`)
      .on("value", snapshot => {
        dispatch({ type: RETURN_DATA_PERFIL_SUCCESS, payload: snapshot.val() })
      })
  }
}

export const editPerfil = (user) => {
  const validUser = validateUser(user);
  if(validUser) {
    return (dispatch) => {
      dispatch({ type: UPDATING_DATA_USER });
      const usuario = firebaseAuth().currentUser;
      database().ref(`usuario/${usuario.uid}`).update({
        nome: user.nome,
        matricula: user.matricula,
        nascimento: user.nascimento,
      }).then(() => {
        dispatch({ type: UPDATE_DATA_USER_SUCESS });
        alert('Dados atualizados com sucesso!');
        this.props.navigation.navigate('Perfil');
      })
      .catch(() => {
        dispatch({ type: UPDATE_DATA_USER_ERROR });
      });
    }
  }
}
