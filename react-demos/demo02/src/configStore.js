import {
    createStore,
    applyMiddleware
} from "redux";
import createSageMiddleware from "redux-saga";
import sagas from "./sagas";
import {
    reducer
} from './reducer';
import "./effect";
import {createMiddleWare} from './effects/middleware';

// const middleware = createSageMiddleware();

const middleware2 = createMiddleWare();

const buildStore = applyMiddleware(middleware2)(createStore);


// store.

export const store = buildStore(reducer);

// middleware.run(sagas);