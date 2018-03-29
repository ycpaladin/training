import { ofType } from './effects/ofType';
// export function

import * as actions from './actions';

export const effect = ofType(actions.LOAD_USER_FETCHING, (action, dispatch, getState) => {
    setTimeout(() => {
        const isFetching = getState(root => root.isFetching);
        const error = getState(root => root.error);
        console.log(isFetching, error);
        dispatch({
            type: actions.LOAD_USER_SUCESS,
            payload: [
                {
                    id: 1,
                    name: 'kevin'
                }, {
                    id: 2,
                    name: 'ccw'
                }
            ]
        });
    }, 2000);
});

export const xxx = ofType(actions.LOAD_USER_SUCESS, (action, dispatch) => {
    dispatch({ type: actions.LOAD_USER_FAIL, payload: '出现错误咯。' });
});
