import {
  RETRIEVE_LOCAIS,
  RETRIVING_LOCAIS
} from '../actions/types';

const INITIAL_STATE = {
  local: '',
  locais: [],
  statusMessage: '',
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RETRIEVE_LOCAIS:
      return { ...state, loading: false, locais: action.payload, statusMessage: 'Verificação completa!' };
    case RETRIVING_LOCAIS:
      return { ...state, loading: true, statusMessage: 'Verificando locais...'};
    default:
      return state;
  }
};