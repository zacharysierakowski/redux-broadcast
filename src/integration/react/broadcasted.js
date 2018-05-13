import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import {
  registerInstance,
  closeInstance
} from "../../redux/modules/instances/actionCreators";

const broadcasted = WrappedComponent => {
  return class extends Component {
    componentWillMount() {
      const { registerInstance, closeInstance } = this.props;

      registerInstance();
      window.onbeforeunload = closeInstance;
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default compose(
  connect(null, {
    registerInstance,
    closeInstance
  }),
  broadcasted
);
