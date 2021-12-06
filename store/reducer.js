import { combineReducers } from "redux";
import interviewReducer from "./reducers/interviewReducer";

const reducers = combineReducers({
  interview: interviewReducer,
});

export default reducers;
