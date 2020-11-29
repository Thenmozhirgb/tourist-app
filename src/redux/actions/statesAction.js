export const GET_STATE = 'GET_STATE';
export const GET_STATE_SUCCESS = 'GET_STATE_SUCCESS';
export const GET_STATE_ERROR = 'GET_STATE_ERROR';

export const getStates = (data) => {
    return { type: GET_STATE, data: data }
}
export const getStatesSuccess = (data) => {
    return { type: GET_STATE_SUCCESS, data: data }
}
export const getStatesError = (data) => {
    return { type: GET_STATE_ERROR, data: data }
}

