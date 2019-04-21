import {DRIVER_DELETED, DRIVERS_FETCHED} from '../actions/DriverActions';

const initialState = {
  driversList: []
};
const driver=(state=initialState,action)=>{
  switch (action.type){
    case (DRIVERS_FETCHED):
      return {...state, driversList:action.payload};

    case DRIVER_DELETED:
      return {
        ...state,
        driversList: state.driversList.filter(driver=>driver['Driver-id']!==action.payload)
      }
    default:
      return state;
  }
};
export default driver;