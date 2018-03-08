import {
  RETRIEVE_LOCAIS
} from '../actions/types';

const INITIAL_STATE = {
  locais: [],
  statusMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIEVE_LOCAIS:
      return { ...state, locais: action.payload, statusMessage: 'Recebendo informações de locais...' };
    default:
      return state;
  }
};