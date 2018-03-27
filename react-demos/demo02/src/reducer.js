import * as actions from './actions';
const defaultState = {
    isFetching: false,
    error: false,
    message: undefined,
    data: []
}

export function reducer(state = defaultState, action) {

    switch (action.type) {
        case actions.LOAD_USER_FETCHING:
            return Object.assign({}, state, {
                isFetching: true,
                error: false,
                message:undefined,
            });
        case actions.LOAD_USER_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                message: action.payload,
                error: true
            });
        case actions.LOAD_USER_SUCESS:
            return Object.assign({}, state, {
                data: action.payload,
                error: false,
                isFetching: false
            });
        default:
            return state;
    }
}