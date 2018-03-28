import { database } from '../config/Config';
import { RETRIEVE_LOCAIS, RETRIVING_LOCAIS } from './types';

export const saveLocais = (locais) => {
  for(var i = 0; i < locais.local.length; i++){
    database().ref(`local/`).push({
      nome: locais.local[i].nome,
      coords: {
        lat: locais.local[i].coords.lat,
        lng: locais.local[i].coords.lng
      }
    });
  }
};

export const verifyLocais = () => { 
  return (dispatch) => {    
    dispatch({ type: RETRIVING_LOCAIS });
    
    database().ref("local/")
      .on('value', snap => {
        retriveLocaisSuccess(dispatch, snap.val());
    });
  };
};

const retriveLocaisSuccess = (dispatch, locais) => {
  dispatch({
    type: RETRIEVE_LOCAIS,
    payload: locais
  })
};