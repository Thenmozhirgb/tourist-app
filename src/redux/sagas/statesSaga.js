import { takeLatest, call, put } from 'redux-saga/effects';
import states from "../../data/states.json";
import {GET_STATE, GET_STATE_SUCCESS, GET_STATE_ERROR} from "./../actions/statesAction";

export function* fetchGetStatesData(action) {
    try {
        yield put({
            type: GET_STATE_SUCCESS,
            payload: states
        });

    }

    catch ({ message }) {
        yield put({
            type: GET_STATE_ERROR,
            stateError: true
        })
    }
}

export function* watchGetStates() {
    yield takeLatest(GET_STATE, callGetStates);//what action , what function to call 
}
export function* callGetStates(action) {
    yield call(fetchGetStatesData, action.data);
}