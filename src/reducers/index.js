import { 
  SELECT_PHONE,
  CHANGE_VIEW_MODE,
  FETCH_DATA,
  REQUEST_PHONES,
  RECEIVE_PHONES 
} from '../actions';

const initialState = {
  dataToFetch: '',
  isFetching: false,
  phones: [],
  selectedPhone: null,
  viewMode: 'SHOW_ALL'
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_PHONE:
      console.log('selected', action.id);
      return {
        ...state,
        selectedPhone: action.id
      }
    case CHANGE_VIEW_MODE:
      return {
        ...state,
        viewMode: action.viewMode
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
    default:
      return state;
  }
}

export default reducer;