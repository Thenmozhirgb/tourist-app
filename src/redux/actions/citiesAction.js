export const GET_CITIES = 'GET_CITIES';
export const GET_CITIES_SUCCESS = 'GET_CITIES_SUCCESS';
export const GET_CITIES_ERROR = 'GET_CITIES_ERROR';

export const getCities = (data) => {
    return { type: GET_CITIES, data: data }
}
export const getStatesSuccess = (data) => {
    return { type: GET_CITIES_SUCCESS, data: data }
}
export const getStatesError = (data) => {
    return { type: GET_CITIES_ERROR, data: data }
}