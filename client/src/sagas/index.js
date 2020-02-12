import {fork,all} from "redux-saga/effects"
import dataSaga from './dataSaga';
export default function *(){
    yield all([
        fork(dataSaga),
    ]);   
}