import { firebaseAuth, database } from '../config/Config';
import { VALID_PERFIL } from './types';


export const dataPerfil = () => {
    return dispatch => {
        const usuario = firebaseAuth().currentUser;
        database().ref(`usuario/${usuario.uid}`)
            .on("value", snapshot => {
                dispatch({ type: VALID_PERFIL, payload: snapshot.val() })
            })
    }


    // const usuario = firebaseAuth().currentUser;
    // database().ref(`usuario/${usuario.uid}`)
    //     .once('value')
    //     .then(snapshot => {
    //         if (snapshot.val()) {
    //             console.log(snapshot.val());
    //             perfil = snapshot.val();
    //             name = perfil.nome;
    //             email = perfil.email;
    //             matricula = perfil.matricula;
    //             nascimento = perfil.nascimento;
    //             console.log('Nome: ' + name);
    //             console.log('E-mail: ' + email);
    //             console.log('Matrícula: ' + matricula);
    //             console.log('Data de nascimente: ' + nascimento);

    //             return { type: VALID_PERFIL, payload: name };

    //         } else {
    //             console.log('Usuário não existe');
    //             //return { type: INVALID_NAME };
    //         }
    //     })
    // return {
    //     type: ''
    // }
}
