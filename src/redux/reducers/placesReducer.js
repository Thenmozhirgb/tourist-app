import { GET_PLACES, GET_PLACES_SUCCESS, GET_PLACES_ERROR} from "./../actions/placesAction";

const defaultState = {
  places: [],
  loaded: false
};


export default function reducer(places = defaultState, action) {

  switch (action.type) {
    //case GET_STATE:
      //return { ...state, states: action.payload };
    case GET_PLACES_SUCCESS:
      return { ...places, places: action.payload };
    case GET_PLACES_ERROR:
      return { ...places, places: action.payload };
    default:
      return places;
  }
}



