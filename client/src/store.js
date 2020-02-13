import {applyMiddleware, compose, createStore} from "redux";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas";
import rootReducer from "./reducers";
// import {persistReducer} from "redux-persist";
// import storage from "redux-persist/lib/storage";
export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
// const persistConfig = {
//   "key": "use-app",
//   storage: storage,
//   whitelist: "",
// };
// const persistedReducer = persistReducer(persistConfig,rootReducer(history));
const configureStore = () => {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const Store = createStore(
        rootReducer(history),
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);
    if (module.hot) {
        module.hot.accept("./reducers", () => {
          Store.replaceReducer(rootReducer(history));
        });
      }
    return Store;
}

export default configureStore;
