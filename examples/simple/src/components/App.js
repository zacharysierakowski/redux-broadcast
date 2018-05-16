import React from "react";
import { broadcasted } from "redux-broadcast";

import Todo from "./Todo/index";
import Done from "./Done/index";

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <Todo />
      </div>
      <div className="col-md-6">
        <Done />
      </div>
    </div>
  </div>
);

export default broadcasted(App);
