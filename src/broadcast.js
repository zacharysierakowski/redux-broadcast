import { combineReducers } from "redux";

import getReducers from "./redux/reducers";
import getMiddleware from "./redux/middleware";
import {
  INSTANCE_APP,
  INSTANCE_REGISTER,
  INSTANCE_OPEN,
  INSTANCE_UNREGISTER
} from "./redux/modules/instances/actions";

const channel = new BroadcastChannel("redux-broadcast");
export const reducers = {
  broadcast: getReducers
};

export const middleware = getMiddleware(channel);

const defaultBroadcastOptions = {
  app: "app",
  autoConnect: true
};
export default (store, broadcastOptions = defaultBroadcastOptions) => {
  const options = {
    ...defaultBroadcastOptions,
    ...broadcastOptions
  };
  const { app, autoConnect } = options;

  channel.onmessage = ({ data: action }) => {
    const { connected } = store.getState().broadcast.instances;

    if (autoConnect) {
      store.dispatch(action);
      return;
    }

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
