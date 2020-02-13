import {takeLatest, put,call} from "redux-saga/effects";
import {getDataSuccess,getDataError} from '../actions/dataAction'
import { select } from 'redux-saga/effects'; 
import request from './helper';

const getData =
  function *getData (indice) {
    try {
      const response = yield call(request, {
        "url": `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${indice.indice}`,
        "method": "get"
      });
      if(response)
      {
        var oldData = yield select ((state) => state.data.Data)
        var newData = response.data.items;
        var data = null;
       if(indice.indice !== 0)
            data = oldData.concat(newData);
        else
            data = newData;
        yield put(getDataSuccess({status : 200, isData: true, Data : data}));
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