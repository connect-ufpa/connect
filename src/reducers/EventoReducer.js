import { MARKER, CLOSE_MODAL } from '../actions/types';

const INITIAL_STATE = {
    marker: [],
    modal: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MARKER:
            return { ...state, marker: [action.payload], modal: true };
        case CLOSE_MODAL:
            return { ...state, modal: false };
        default:
           return state;
    }
};
