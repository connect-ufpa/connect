import { firebaseAuth, database } from '../config/Config';


export const saveEditedPerfil = () => {
    const usuario = firebaseAuth().currentUser;
    database().ref(`usuario/${usuario.uid}`)
        .once('value')
        .then(snapshot => {
            if(snapshot.val()) {
                console.log(snapshot.val());
                // console.log('nome: '+ snapshot.val()[3]);
            } else {
                console.log('Usuário não existe');
            }
        })
    return {
        type: ''
    }
}