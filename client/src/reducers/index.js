import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
import errorReducer from "./errorReducer";
export default combineReducers({ auth: userAuthReducer, errors: errorReducer });
