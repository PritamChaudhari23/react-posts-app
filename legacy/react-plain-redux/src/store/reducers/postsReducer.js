import { FETCH_POSTS_SUCCESS } from '../actions/postsActions';

const initialState = {
  list: [],
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
