import {
    call,
    put,
    take,
    takeEvery
} from "redux-saga/effects";
import * as actions from './actions';


const delay = ms => new Promise(resovle => setTimeout(()=>{
    resovle([{
        id: 1,
        name: 'kevin'
    }, {
        id: 2,
        name: 'ccw'
    }]);
}, ms));


function* getUser() {

    // yield put({
    //     type: actions.LOAD_USER_FETCHING
    // });

    // yield setTimeout(function* () {
        const result = yield delay(5000);
        yield put({
            type: actions.LOAD_USER_SUCESS,
            payload: result
        });
    // }, 3000);
}

function* defaultSaga() {
    yield takeEvery(actions.LOAD_USER_FETCHING, getUser);
}

export default defaultSaga;