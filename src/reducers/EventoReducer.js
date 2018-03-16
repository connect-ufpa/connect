import { MARKER } from '../actions/types';

const INITIAL_STATE = {
    marker: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MARKER:
            return { ...state, marker: [action.payload] };
        default:
           return state;
    }
};
