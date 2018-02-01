import { combineReducers } from 'redux';
import CreateUserReducer from './CreateUserReducer';

export default combineReducers({
   createUser: CreateUserReducer 
});
