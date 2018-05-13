import { combineReducers } from "redux";
import broadcastReducers from "./redux/reducers";
import getMiddleware from "./redux/middleware";

import {
  INSTANCE_APP,
  INSTANCE_REGISTER,
  INSTANCE_OPEN,
  INSTANCE_UNREGISTER
} from "./redux/modules/instances/actions";

const channel = new BroadcastChannel("redux-broadcast");
export const combineReducersWithBroadcast = reducers => {
  return combineReducers({
    ...reducers,
    broadcast: broadcastReducers
  });
};

export const broadcastMiddleware = getMiddleware(channel);

export default (store, app = "app") => {
  channel.onmessage = ({ data: action }) => {
    const { connected } = store.getState().broadcast.instances;

    const connectedKeys = Object.keys(connected).reduce((keys, k) => {
      keys = keys.concat(connected[k]);
      return keys;
    }, []);
    if (
      (action && action.type === INSTANCE_REGISTER) ||
      (action && action.type === INSTANCE_OPEN) ||
      (action && action.type === INSTANCE_UNREGISTER) ||
      connectedKeys.includes(action.instance)
    ) {
      store.dispatch(action);
    }
  };

  store.dispatch({
    type: INSTANCE_APP,
    app
  });
};
