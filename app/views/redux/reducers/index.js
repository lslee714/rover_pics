import { combineReducers } from "redux";
import cams from "./cams";
import rovers from "./rovers";

export default combineReducers({ rovers, cams });
