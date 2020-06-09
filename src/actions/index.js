import axios from 'axios';
import { URL } from '../config';

//////////////////
// Action Types //
//////////////////
export const SELECT_PHONE = 'SELECT_PHONE';
// Indicates user has pressed a button to start fetching some data
export const FETCH_DATA = 'FETCH_DATA';
// Action to indicate fetching has started
export const REQUEST_PHONES = 'REQUEST_PHONES';
export const RECEIVE_PHONES = 'RECEIVE_PHONES';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

/////////////////////
// Action Creators //
/////////////////////
export const selectPhone = id => {
  return {
    type: SELECT_PHONE,
    id
  }
};

export const fetchData = data => {
  return {
    type: FETCH_DATA,
    data
  }
};


export const requestPhones = () => {
  return {
    type: REQUEST_PHONES,
  }
}

export const receivePhones = jsonData => {
  return {
    type: RECEIVE_PHONES,
    phones: jsonData,
  }
};

export const receiveError = () => {
  return {
    type: RECEIVE_ERROR,
  }
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  }
}

export const fetchPhones = () => {
  return function (dispatch) {
    dispatch(requestPhones());

    return axios.get(`${URL}/phones`)
      .then(json => {
        Array.isArray(json.data) && json.data.length > 0
          ? dispatch(receivePhones(json.data))
          : dispatch(receiveError());     
    });
  }
}