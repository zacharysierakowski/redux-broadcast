import shortid from "shortid";
import {
  INSTANCE_APP,
  INSTANCE_REGISTER,
  INSTANCE_OPEN,
  INSTANCE_UNREGISTER
} from "./actions";

export const defaultInstancesState = {
  app: "",
  instance: shortid.generate(),
  open: {},
  connected: {}
};

const instances = (state = defaultInstancesState, action) => {
  switch (action.type) {
    case INSTANCE_APP:
      return {
        ...state,
        app: action.app
      };
    case INSTANCE_REGISTER:
    case INSTANCE_OPEN:
      return {
        ...state,
        open: {
          ...state.open,
          [action.app]: state.open[action.app]
            ? Array.from(new Set([...state.open[action.app], action.instance]))
            : [action.instance]
        }
      };
    case INSTANCE_UNREGISTER:
      return {
        ...state,
        open: {
          ...state.open,
          [action.app]: state.open[action.app]
            ? state.open[action.app].filter(
                instance => instance !== action.instance
              )
            : []
        }
      };
    default:
      return state;
  }
};

export default instances;
