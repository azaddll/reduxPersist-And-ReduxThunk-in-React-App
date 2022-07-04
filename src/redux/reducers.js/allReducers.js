import { combineReducers } from "redux";
import { userReducers } from "./userReducer";
import { userListReducer } from "./userListReducers";

const allReducers = combineReducers({
    user:userReducers,
    userList:userListReducer,
});

export default allReducers;