import { firebaseAuth, database } from '../config/Config';
import { validateLetters, validateNumbers, validateDates, validateEmails, validatePasswords, validateUser, matchPasswords } from '../helpers/HandleData';
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
import b64 from 'base-64';


export const updateUser = (user) => {
    const validUser = validateUser(user);
    if (validUser) {
        return (dispatch) => {
            atualizaDadosPerfil()
                // firebaseAuth().signInWithEmailAndPassword(user.email, user.password)
                // .then(value => atualizaDadosPerfil())
                // .catch(erro => atualizaDadosPerfilErro())

                // this.props.navigation.navigate('MeuPerfil');
                .then(() => dispatch({ type: 'teste' }));
        }
    }
};


const atualizaDadosPerfil = (dispatch, user) => {
    const usuario = firebaseAuth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    if (usuario != null) {
        name = usuario.displayName;
        email = usuario.email;
        photoUrl = usuario.photoURL;
        emailVerified = usuario.emailVerified;
        uid = usuario.uid;
    }
        console.log(name);
        // database().ref(`usuario/${usuario.uid}`).update({
        //     nome: user.name,
        //     matricula: user.registration,
        //     nascimento: user.birthday,
        //     email: user.email
        // })
        // .then(dispatch({type: 'update data user sucess'}))
        // .catch(dispatch({type: 'update data user erro'}));
    }

    const atualizaDadosPerfilErro = (dispatch) => {

    }
