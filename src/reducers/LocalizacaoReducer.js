import {
  RETRIEVE_LOCAIS,
  RETRIVING_LOCAIS,
  SEARCHING_LOCAL
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
      return { ...state, loading: false, locais: Object.values(action.payload), statusMessage: 'Verificação completa!' };
    case RETRIVING_LOCAIS:
      return { ...state, loading: true, statusMessage: 'Verificando locais...'};
    case SEARCHING_LOCAL:
      return { ...state, local: action.payload };
    default:
      return state;
  }
};