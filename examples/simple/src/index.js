import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "redux-logger";
import broadcast, { broadcastMiddleware } from "redux-broadcast";

import App from "./components/App";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, ...broadcastMiddleware, loggerMiddleware)
);

broadcast(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
