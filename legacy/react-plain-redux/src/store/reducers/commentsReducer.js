import { FETCH_COMMENTS_SUCCESS } from '../actions/commentsActions';

const initialState = {
  list: [],
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
