import { combineReducers } from 'redux';
import CreateUserReducer from './CreateUserReducer';
import LoginReducer from './LoginReducer';
import ForgotPasswordReducer from './ForgotPasswordReducer';
import LocalizacaoReducer from './LocalizacaoReducer';
import UpdateUserReducer from './UpdateUserReducer';

export default combineReducers({
   createUser: CreateUserReducer,
   login: LoginReducer,
   forgotPassword: ForgotPasswordReducer,
   localizacao: LocalizacaoReducer,
   updateUser: UpdateUserReducer
});
