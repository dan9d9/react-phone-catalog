import { 
  SELECT_PHONE,
  FETCH_DATA,
  REQUEST_PHONES,
  RECEIVE_PHONES,
  RECEIVE_ERROR,
  CLEAR_ERROR
} from '../actions';

const initialState = {
  dataToFetch: '',
  isFetching: false,
  phones: [],
  selectedPhone: null,
  error: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_PHONE:
      return {
        ...state,
        selectedPhone: action.id
      }
    case FETCH_DATA:
      return {
        ...state,
        dataToFetch: action.data
    }
    case REQUEST_PHONES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_PHONES:
      return {
        ...state,
        isFetching: false,
        phones: action.phones
      }
    case RECEIVE_ERROR:
      return {
        ...state,
        dataToFetch: '',
        isFetching: false,
        error: true
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: false
      }
    default:
      return state;
  }
}

export default reducer;