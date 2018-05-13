# redux-broadcast

Broadcast redux actions to separate tabs and windows

[![Build Status](https://travis-ci.org/zachary-sierakowski/redux-broadcast.svg?branch=master)](https://travis-ci.org/zachary-sierakowski/redux-broadcast) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![semantic-release](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Setup

Add the redux-broadcast reducers using `combineReducersWithBroadcast`:

```javascript
import { combineReducersWithBroadcast } from "redux-broadcast";

import reducer1 from "./path/to/reducer1";
import reducer2 from "./path/to/reducer2";

export default combineReducersWithBroadcast({
  reducer1,
  reducer2
});
```

Add `broadcastMiddleware` and start `broadcast` with the redux store:

```javascript
import broadcast, { broadcastMiddleware } from "redux-broadcast";

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware([...broadcastMiddleware, ...middleware]))
);

broadcast(store);
```

## Usage

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
