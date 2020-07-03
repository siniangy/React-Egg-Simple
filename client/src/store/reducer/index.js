import { combineReducers } from 'redux';
import getNameReducer from './test';

export default combineReducers({
  allData: getNameReducer 
})