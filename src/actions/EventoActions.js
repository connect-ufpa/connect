import { firebaseAuth, database } from '../config/Config';
import { validateDates, validateHours, validateEvent } from '../helpers/HandleData';
import { MARKER, CLOSE_MODAL, EVENT_NAME, DESCRIPTION, LOCAL, VALID_START_EVENT_DATE, 
         INVALID_START_EVENT_DATE, VALID_START_HOUR_EVENT, INVALID_START_HOUR_EVENT, LOADING_EVENT, CREATE_EVENT_SUCCESS } from './types';

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
            console.log(usuario);
            database().ref(`evento/`).push({
                nome: evento.nome,
                descricao: evento.descricao,
                local: evento.local,
                usuario_id: usuario.uid,
                data: evento.data,
                hora: evento.hora
            }).then(() => { dispatch({ type: CREATE_EVENT_SUCCESS }); });
        };
    }
};
