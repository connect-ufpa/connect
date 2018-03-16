import { MARKER } from './types';

export const showMarker = (e) => {
    return { type: MARKER, payload: { coordinate: e.nativeEvent.coordinate } };
};
