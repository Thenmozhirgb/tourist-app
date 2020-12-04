export const GET_PLACES = 'GET_PLACES';
export const GET_PLACES_SUCCESS = 'GET_PLACES_SUCCESS';
export const GET_PLACES_ERROR = 'GET_PLACES_ERROR';

export const getPlaces = (citiesId) => {
    return { type: GET_PLACES, data: citiesId }
}
export const getPlacesSuccess = (data) => {
    return { type: GET_PLACES_SUCCESS, data: data }
}
export const getPlacesError = (data) => {
    return { type: GET_PLACES_ERROR, data: data }
}

