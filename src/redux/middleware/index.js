import hijackMiddleware from "dispatch-hijack";
import instanceMiddleware from "./instanceMiddleware";

const broadcast = channel => (action, dispatch, getState) => {
  const { instances } = getState().broadcast;
  const actionWithApp = {
    ...action,
    instance: instances.instance,
    app: instances.app
  };
  channel.postMessage(actionWithApp);
  return actionWithApp;
};

export default channel => [
  hijackMiddleware(broadcast(channel), {
    key: "broadcast",
    skipKey: "self"
  }),
  instanceMiddleware(channel)
];
