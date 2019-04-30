import { combineReducers } from "redux";
import * as AuthReducer from "./auth";
import * as BorrowReducer from "./borrow";

export default combineReducers(
  Object.assign(
    BorrowReducer,
    AuthReducer,
  ),
);
