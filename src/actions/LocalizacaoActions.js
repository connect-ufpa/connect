import { database } from '../config/Config';
import { RETRIEVE_LOCAIS, RETRIVING_LOCAIS, SEARCHING_LOCAL } from './types';

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

export const searchLocal = (localPesquisado, locais) => {
  return (dispatch) => {
    dispatch({ type: SEARCHING_LOCAL, payload: localPesquisado });

    let locaisAchados = [];

    if(localPesquisado !== "") {
      locais.map((localVerificado) => {
        if (localVerificado['nome'].includes(localPesquisado)) {
          locaisAchados.push(localVerificado);
        }
      });
      console.log('Locais achados: ', locaisAchados);
    } else {
      console.log('Nenhum local encontrado!');
    }
  }
}

const retriveLocaisSuccess = (dispatch, locais) => {
  dispatch({
    type: RETRIEVE_LOCAIS,
    payload: locais
  })
};