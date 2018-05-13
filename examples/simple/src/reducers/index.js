import { combineReducersWithBroadcast } from "redux-broadcast";

import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducersWithBroadcast({
  todos,
  visibilityFilter
});
