import user from "./users.js";
import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";

export default combineReducers({
  userReducer: user,
  notifications,
});
