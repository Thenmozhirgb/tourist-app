import { fork, all } from "redux-saga/effects";
import * as statesSaga from './statesSaga';
import * as citiesSaga from './citiesSaga';
import * as placesSaga from './placesSaga';

function* RootSaga() {
    yield all([
        fork(statesSaga.watchGetStates),
    ]);
    yield all([
        fork(citiesSaga.watchGetCities),
    ]);
    yield all([
        fork(placesSaga.watchGetPlaces),
    ]);
}
export default RootSaga;