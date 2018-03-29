import { createStore, applyMiddleware } from 'redux';
import { createMiddleWare } from './effects/middleware';
// import createSageMiddleware from "redux-saga"; import sagas from "./sagas";
import reducer from './reducer';
import * as effects from './effect';

const middleware2 = createMiddleWare(effects);
const buildStore = applyMiddleware(middleware2)(createStore);
export const store = buildStore(reducer);
