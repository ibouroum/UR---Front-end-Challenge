import {takeLatest, put,call} from "redux-saga/effects";
import {getDataSuccess,getDataError} from '../actions/dataAction'
import request from './helper';

const getData =
  function *getData () {
    try {
      const response = yield call(request, {
        "url": "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc",
        "method": "get"
      });
      if(response)
      {
        console.log(response.data)
        yield put(getDataSuccess({status : 200, isData: true, Data : response.data}));
      }
        
      else
        yield put(getDataError({status : 400,error : 'Bad request'}))
    }catch (error) {
      if (error.response) {
        yield put(getDataError({status : 500,error : 'Internal Server Error'}));
      }
    }
  };

export default function *() {
  yield takeLatest("GET_DATA", getData);
}