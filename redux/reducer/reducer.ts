import { combineReducers } from "redux";
import * as types from "../constent/constent";
const userDataReducer = (state = { user: {} }, action: any) => {
  switch (action.type) {
    case types.USER_DATA_ADDED:
      return { user: { ...action.payload, isAuthenticated: true } };
    case types.USER_DATA_REMOVED:
      return { user: {} };
    default:
      return state;
  }
};
const reducers = {
  userData: userDataReducer,
};

export default combineReducers(reducers);
