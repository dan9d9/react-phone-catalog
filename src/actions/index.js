import axios from 'axios';
import { URL } from '../config';

// Action Types
export const SELECT_PHONE = 'SELECT_PHONE';
export const CHANGE_VIEW_MODE = 'CHANGE_VIEW_MODE';
export const TOGGLE_FETCH = 'TOGGLE_FETCH'; // Indicates user has pressed button to start fetch
export const REQUEST_PHONES = 'REQUEST_PHONES' // Action to send request
export const RECEIVE_PHONES = 'RECEIVE_PHONES' // Action to receive response

// Other
export const VIEW_MODES = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_SELECTED: 'SHOW_SELECTED'
};

// Action Creators
export const selectPhone = id => {
  return {
    type: SELECT_PHONE,
    id
  }
};

export const changeViewMode = viewMode => {
  return {
    type: CHANGE_VIEW_MODE,
    viewMode
  }
};

export const toggleFetch = bool => {
  return {
    type: TOGGLE_FETCH,
    initiated: bool
  }
};


export const requestPhones = () => {
  return {
    type: REQUEST_PHONES,
  }
}

export const receivePhones = json => {
  return {
    type: RECEIVE_PHONES,
    phones: json,
    receivedAt: Date.now()
  }
};

export const fetchPhones = () => {
  return function (dispatch) {
    dispatch(requestPhones());

    return axios.get(`${URL}/phones`)
      .then(json => {
        dispatch(receivePhones(json.data));
        dispatch(toggleFetch(false));
    });
  }
}