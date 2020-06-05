import { 
  SELECT_PHONE,
  CHANGE_VIEW_MODE,
  TOGGLE_FETCH,
  REQUEST_PHONES,
  RECEIVE_PHONES 
} from '../actions';

const initialState = {
  initiateFetch: false,
  isFetching: false,
  phones: [],
  selectedPhone: null,
  viewMode: 'SHOW_ALL'
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_PHONE:
      return {
        ...state,
        selectedPhone: action.id
      }
    case CHANGE_VIEW_MODE:
      return {
        ...state,
        viewMode: action.viewMode
      }
    case TOGGLE_FETCH:
      return {
        ...state,
        initiateFetch: action.initiated
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
    default:
      return state;
  }
}

export default reducer;