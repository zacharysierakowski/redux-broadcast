import { INSTANCE_REGISTER, INSTANCE_UNREGISTER } from "./actions";

export const registerInstance = () => (dispatch, getState) => {
  dispatch({
    type: INSTANCE_REGISTER,
    broadcast: true
  });
};

export const closeInstance = () => (dispatch, getState) => {
  dispatch({
    type: INSTANCE_UNREGISTER,
    broadcast: true
  });
};
