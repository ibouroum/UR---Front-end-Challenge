import {GET_DATA_SUCCESS,GET_DATA_ERROR} from '../actions/dataAction';
const DEFAULT_STATE = {
    status: 'DEFAULT STATE',
    isData: false,
    Data : null,
    error : null
  };
export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_DATA_SUCCESS :
            return {status: action.status, isData: true, Data : action.Data};
        case GET_DATA_ERROR :
            return {status: action.status, isData: false, error : action.error};
        default :
          {
            return state;
          }
            
    }
  }