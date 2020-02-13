import {combineReducers} from "redux";
import { connectRouter } from "connected-react-router";
import dataReducer from './dataReducer'
const combinedReducers = (history) =>combineReducers({
    "router" : connectRouter(history),
    "data" : dataReducer
});
export default combinedReducers;