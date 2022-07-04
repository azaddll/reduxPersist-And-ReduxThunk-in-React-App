import { SETUSERNAME } from "../actionType";

const initialState = {
  userName: "",
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERNAME:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};
