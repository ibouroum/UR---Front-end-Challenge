export const GET_DATA = "GET_DATA"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_ERROR = "GET_DATA_ERROR"

export const getData = () =>({
    "type": GET_DATA
});

export const getDataSuccess = (data) =>({
    "type": GET_DATA_SUCCESS,
    data
});

export const getDataError = (error) =>({
    "type": GET_DATA_ERROR,
    error
});