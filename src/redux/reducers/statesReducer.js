import { GET_STATE, GET_STATE_SUCCESS, GET_STATE_ERROR} from "./../actions/statesAction";

const defaultState = {
  states: [],
  loaded: false
};


export default function reducer(state = defaultState, action) {

  switch (action.type) {
    //case GET_STATE:
      //return { ...state, states: action.payload };
    case GET_STATE_SUCCESS:
      return { ...state, states: action.payload };
    case GET_STATE_ERROR:
      return { ...state, states: action.payload };
    default:
      return state;
  }
}



