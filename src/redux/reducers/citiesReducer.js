import { GET_CITIES, GET_CITIES_SUCCESS, GET_CITIES_ERROR } from "./../actions/citiesAction";
const defaultState = {
  cities: [0],
  loaded: false
};

export default function reducer(cities =defaultState, action) {
   
switch (action.type) {
    //case GET_CITIES:
      //return { ...cities, cities: action.payload };
    case GET_CITIES_SUCCESS:
      return { ...cities, cities: action.payload };
    case GET_CITIES_ERROR:
      return { ...cities, cities: action.payload };
    default:
      return cities;

  }
}



