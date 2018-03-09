import {
  RETRIEVE_LOCAIS,
  RETRIVING_LOCAIS
} from '../actions/types';

const INITIAL_STATE = {
  locais: [],
  isLocais: false,
  statusMessage: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIEVE_LOCAIS:
      return { ...state, locais: action.payload, isLocais: true, statusMessage: 'Verificação completa!' };
    default:
      return state;
  }
};