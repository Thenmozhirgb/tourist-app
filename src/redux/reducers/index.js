import {combineReducers} from "redux";
import statesReducer from './statesReducer';
import citiesReducer from './citiesReducer';
import placesReducer from './placesReducer';
const rootReducer = combineReducers({
    states : statesReducer,
    cities : citiesReducer,
    places : placesReducer
});

export default rootReducer;