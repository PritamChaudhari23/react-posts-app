import { FETCH_USERS, FETCH_USERS_SUCCESS } from '../actions/usersActions';

const initialState = {
  list: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
