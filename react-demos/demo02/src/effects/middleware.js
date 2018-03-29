
import { getState } from './getState';

export function createMiddleWare() {
    const effects = {};
    function getEffect(type) {
        const group = effects[type] || [];
        effects[type] = group;
        return group;
    }

    function addEffect(type, effect) {
        const group = getEffect(type);
        group.push(effect);
        return group;
    }

    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        for (const key in element) {
            if (element.hasOwnProperty(key)) {
                const { type, effect } = element[key];
                addEffect(type, effect);
            }
        }
    }

    return function (store) {
        return function (next) {
            return function (action) {
                const effect = getEffect(action.type);
                const _action = next(action);
                if (effect.length > 0) {
                    for (let i = 0; i < effect.length; i++) {
                        effect[i](action, store.dispatch, getState(store.getState()));
                    }
                }
                return _action;
            };
        };
    };
}
