import {  getEffect } from './effects'

export function createMiddleWare() {
    return function (store) {
        const { dispatch, getState: state } = store;
        return function (next) {
            return function (action) {
                const effect = getEffect(action.type);
                const _action = next(action);





                if (effect.length > 0) {
                    for (let i = 0; i < effect.length; i++) {
                        effect[i](action, dispatch, getState);
                    }
                }
                return _action;
            }
        }
    };
}



function getState(state){
    return function(predicate){
        return predicate(state);
    }
}
