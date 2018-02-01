import { VALID_NAME, INVALID_NAME } from '../actions/types';

const INITIAL_STATE = { name: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VALID_NAME:
            return { ...state, name: action.payload };
        case INVALID_NAME:
            return { ...state, name: '' };
        default:
            return state;
    }
};
