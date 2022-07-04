import { GETUSERSLIST } from "../actionType";

const initialState = {
  usersList: [],
};

export const userListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETUSERSLIST:
      return { ...state, usersList: action.payload };
    default:
      return state;
  }
};
