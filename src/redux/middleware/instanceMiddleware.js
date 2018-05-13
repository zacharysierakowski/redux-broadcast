import { INSTANCE_REGISTER, INSTANCE_OPEN } from "../modules/instances/actions";

const instanceMiddleware = channel => ({
  dispatch,
  getState
}) => next => action => {
  if (
    action.type === INSTANCE_REGISTER &&
    action.instance !== getState().broadcast.instances.instance
  ) {
    const { instance } = getState().broadcast.instances;

    channel.postMessage({
      type: INSTANCE_OPEN,
      app: getState().broadcast.instances.app,
      instance
    });
  }

  return next(action);
};

export default instanceMiddleware;
