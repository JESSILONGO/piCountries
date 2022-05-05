 import {applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk"                                                      //Asincrono
import reducer from '../reducer/index'

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


export default store;
