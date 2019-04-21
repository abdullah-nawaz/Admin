import { combineReducers } from 'redux';
import user from './loginSupReducer';
import driver from './DriversReducer';
const rootReducer = combineReducers({
  user:user,
  driver:driver
});

export default rootReducer;