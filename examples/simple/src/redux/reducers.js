import { combineReducers } from "redux";
import { reducers } from "redux-broadcast";

import todos from "./todos/reducer";

export default combineReducers({
  todos,
  ...reducers
});
