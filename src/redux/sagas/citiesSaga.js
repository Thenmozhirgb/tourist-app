import { takeLatest, call, put } from 'redux-saga/effects';
import cities from "../../data/cities.json";
import {GET_CITIES, GET_CITIES_SUCCESS, GET_CITIES_ERROR} from "./../actions/citiesAction";

export function* fetchGetCitiesData(action) {
    try {
        yield put({
            type: GET_CITIES_SUCCESS,
            payload: cities
        });

    }

    catch ({ message }) {
        yield put({
            type: GET_CITIES_ERROR,
            stateError: true
        })
    }
}

export function* watchGetCities() {
    yield takeLatest(GET_CITIES, callGetCities);//what action , what function to call 
}
export function* callGetCities(action) {
    
    yield call(fetchGetCitiesData, action.data);
}