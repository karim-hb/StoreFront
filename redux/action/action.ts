import { get, responseValidator } from "@/scripts/api";
import * as types from "../constent/constent";

export const addUserDataAction = (data?: any) => (dispatch: Function) => {
  dispatch({
    type: types.USER_DATA_ADDED,
    payload: data,
  });
};
export const removeUserDataAction = (data?: any) => (dispatch: Function) => {
  dispatch({
    type: types.USER_DATA_REMOVED,
  });
};
