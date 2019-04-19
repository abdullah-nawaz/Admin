import { combineReducers } from 'redux';
import user from './loginSupReducer';
const rootReducer = combineReducers({
  user:user,
});

export default rootReducer;