import {
    createStore,
    applyMiddleware
} from "redux";
// import createSageMiddleware from "redux-saga";
import sagas from "./sagas";
import {
    reducer
} from './reducer';
import * as effects from "./effect";
 
import {createMiddleWare} from './effects/middleware';

const middleware2 = createMiddleWare(effects);
const buildStore = applyMiddleware(middleware2)(createStore);
export const store = buildStore(reducer);
