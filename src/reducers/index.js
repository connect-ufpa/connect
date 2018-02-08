import { combineReducers } from 'redux';
import CreateUserReducer from './CreateUserReducer';
import LoginReducer from './LoginReducer';

export default combineReducers({
   createUser: CreateUserReducer,
   login: LoginReducer
});
