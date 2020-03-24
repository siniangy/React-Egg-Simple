import { combineReducers } from 'redux';
import getNameReducer from './name';

export default combineReducers({
  allData: getNameReducer
})