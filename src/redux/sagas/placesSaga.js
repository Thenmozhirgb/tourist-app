import { takeLatest, call, put } from 'redux-saga/effects';
import place from "./../../data/place.json";
import {GET_PLACES, GET_PLACES_SUCCESS, GET_PLACES_ERROR} from "./../actions/placesAction";

export function* fetchGetPlacesData(citiesId) {
    const placeData = place.find( placeDetail =>  placeDetail["cities-id"] === citiesId );
    const placesList = placeData.places; 
    try {
        yield put({
            type: GET_PLACES_SUCCESS,
            payload: placesList
        });

    }

    catch ({ message }) {
        yield put({
            type: GET_PLACES_ERROR,
            stateError: true
        })
    }
}

export function* watchGetPlaces() {
    yield takeLatest(GET_PLACES, callGetPlaces);//what action , what function to call 
}
export function* callGetPlaces(action) {
    yield call(fetchGetPlacesData, action.data);
}