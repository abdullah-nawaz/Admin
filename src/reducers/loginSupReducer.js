import {LOGIN_SIGNUP} from '../actions/LoginSignup';

const user=(state={},action)=>{
  switch (action.type){
    case (LOGIN_SIGNUP):
      return action.payload;
    default:
      return state;
  }
}
export default user;