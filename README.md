# redux-broadcast

Broadcast redux actions to separate tabs and windows

[![Build Status](https://travis-ci.org/zachary-sierakowski/redux-broadcast.svg?branch=master)](https://travis-ci.org/zachary-sierakowski/redux-broadcast) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![semantic-release](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This package uses the [Broadcast Channel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) and does not use local storage. See [caniuse.com](https://caniuse.com/#search=BroadcastChannel) to view current browser support.

![Example](./examples/simple/simple_example.gif)

## Setup

Add the reducers:

```javascript
import { combineReducers } from "redux";
import { reducers } from "redux-broadcast";

import reducer1 from "./path/to/reducer1";
import reducer2 from "./path/to/reducer2";

export default combineReducers({
  reducer1,
  reducer2,
  ...reducers
});
```

Add the middleware:

```javascript
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { middleware } from "redux-broadcast";

applyMiddleware([thunk, ...middleware]);
```

Start the broadcast channel with a reference to the store:

```javascript
import broadcast from "redux-broadcast";

const store = createStore();

broadcast(store);
```

## Basic Usage

Add the `broadcast` key to any action. The `broadcast` field will be removed from the action and the action will be broadcasted to other tabs and windows.

```javascript
export const myActionToSelf = () => (dispatch, getState) => {
  dispatch({
    type: "MY_ACTION"
  });
};

export const myActionToSelfAndOthers = () => (dispatch, getState) => {
  dispatch({
    type: "MY_ACTION"
    broadcast: true
  });
};
```

## Integration

### React

`redux-broadcast` provides a Higher-Order Component for react. The HOC will register/unregister the instance on page load and close.

#### Usage

```javascript
import { broadcasted } from "redux-broadcast";

const App = () => {
  return <div>React app</div>;
};

export default broadcasted(App);
```
