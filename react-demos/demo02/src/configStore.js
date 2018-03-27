import {
    createStore,
    applyMiddleware
} from "redux";
import createSageMiddleware from "redux-saga";
import sagas from "./sagas";
import {
    reducer
} from './reducer';

import myMiddleware from './middleware';

const middleware = createSageMiddleware();

const middleware2 = myMiddleware();

const buildStore = applyMiddleware(middleware, middleware2)(createStore);


// store.

export const store = buildStore(reducer);

middleware.run(sagas);