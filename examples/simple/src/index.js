import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import broadcast, { middleware } from "redux-broadcast";

import "./App.css";
import App from "./components/App";
import rootReducer from "./redux/reducers";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, ...middleware, logger)
);

broadcast(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
