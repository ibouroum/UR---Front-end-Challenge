export const GET_DATA = "GET_DATA"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_ERROR = "GET_DATA_ERROR"

export const getData = (indice) =>({
    "type": GET_DATA,
    indice
});

export const getDataSuccess = (data) =>({
    "type": GET_DATA_SUCCESS,
    status : data.status,
    Data : data.Data
});

export const getDataError = (data) =>({
    "type": GET_DATA_ERROR,
    status : data.status,
    error : data.error
});