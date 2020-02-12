import {getData,getDataSuccess,getDataError} from '../actions/dataAction';
const DEFAULT_STATE = {
    status: 'DEFAULT STATE',
    isData: false,
    Data : null,
    error : null
  };
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case getData :
           return {status: 'loading', isData: false, Data : null};
        case getDataSuccess :
            return {status: action.status, isData: true, Data : action.Data};
         case getDataError :
            return {status: action.status, isData: false, error : action.error};
        default:
            return state;
    }
  }