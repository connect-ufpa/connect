import { MARKER, CLOSE_MODAL } from './types';

export const showMarkerAndModal = (e) => {
    return { type: MARKER, payload: { coordinate: e.nativeEvent.coordinate } };
};

export const closeModal = () => {
    return { type: CLOSE_MODAL };
};
