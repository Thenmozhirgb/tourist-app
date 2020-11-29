
import { takeLatest, call, put } from 'redux-saga/effects';
import cities from "../../data/cities.json";
import {GET_CITIES, GET_CITIES_SUCCESS, GET_CITIES_ERROR} from "./../actions/citiesAction";
export function* fetchCitiesData(stateId) {
    const cityData = cities.find( cityDetail =>  cityDetail["states-id"] === stateId );
    const cityList = cityData.cities; 
    try {
        yield put({
            type: GET_CITIES_SUCCESS,
            payload: cityList
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
    yield call(fetchCitiesData, action.data);
}