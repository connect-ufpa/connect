import { firebaseAuth, database } from '../config/Config';
import { validateDates, validateHours, validateEvent } from '../helpers/HandleData';
import { MARKER, CLOSE_MODAL, EVENT_NAME, DESCRIPTION, LOCAL, VALID_START_EVENT_DATE, 
         INVALID_START_EVENT_DATE, VALID_START_HOUR_EVENT, INVALID_START_HOUR_EVENT,
         LOADING_EVENT, CREATE_EVENT_SUCCESS, EVENTS_TO_EDIT_SUCCESS } from './types';

export const showMarkerAndModal = (e) => {
    return { type: MARKER, payload: { coordinate: e.nativeEvent.coordinate } };
};

export const closeModal = () => {
    return { type: CLOSE_MODAL };
};

export const eventNameChange = (texto) => {
    return { type: EVENT_NAME, payload: texto };
};

export const eventDescriptionChange = (texto) => {
    return { type: DESCRIPTION, payload: texto };
};

export const eventLocalChange = (texto) => {
    return { type: LOCAL, payload: texto };
};

export const eventDateChange = (texto) => {
    const validate = validateDates(texto);
    if (validate) return { type: VALID_START_EVENT_DATE, payload: texto };
    
     return { type: INVALID_START_EVENT_DATE, payload: texto }; 
};

export const eventHourChange = (texto) => {
    const validate = validateHours(texto);
    if (validate) return { type: VALID_START_HOUR_EVENT, payload: texto };

    return { type: INVALID_START_HOUR_EVENT, payload: texto };
};

export const saveEvent = (evento) => {
    const validate = validateEvent(evento);
    if (validate) {
        return (dispatch) => {
            dispatch({ type: LOADING_EVENT });
            const usuario = firebaseAuth().currentUser;
            database().ref(`evento/`).push({
                nome: evento.nome,
                descricao: evento.descricao,
                local: evento.local,
                coords: evento.coords,
                usuario_id: usuario.uid,
                data: evento.data,
                hora: evento.hora
            }).then((response) => {
                database().ref(`usuario/${usuario.uid}/`).once('value').then(snap => {
                    const user = snap.val();
                    if (user.hasOwnProperty("eventos_criados")) {
                        database().ref().child(`usuario/${usuario.uid}/`).update({ eventos_criados: [...user.eventos_criados, response.path.pieces_[1]] })
                          .then(() => { dispatch({ type: CREATE_EVENT_SUCCESS }); });
                    } else {
                        database().ref().child(`usuario/${usuario.uid}/`).update({ eventos_criados: [response.path.pieces_[1]] })
                         .then(() => { dispatch({ type: CREATE_EVENT_SUCCESS }); });
                    }
                });
            });  
        };
    }
};

export const searchEventsToEdit = () => {
    return (dispatch) => {
        const usuario = firebaseAuth().currentUser;
        database().ref(`usuario/${usuario.uid}`).once('value').then(snap => {
             const user = snap.val();
             if (user.hasOwnProperty("eventos_criados")) {
                 for (var eventoID in user.eventos_criados) {
                     const id = user.eventos_criados[eventoID];
                    database().ref(`evento/${user.eventos_criados[eventoID]}`).once('value')
                    .then(snap => { 
                        const evento = snap.val(); 
                        dispatch({ type: EVENTS_TO_EDIT_SUCCESS, payload: { ...evento, id } });
                     });
                 }
             }
        });
    }; 
};
