import { MARKER, CLOSE_MODAL, EVENT_NAME, DESCRIPTION, LOCAL } from './types';

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

