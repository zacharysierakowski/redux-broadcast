import { connect } from "react-redux";

import Todo from "./Todo";
import {
  addTodo,
  markDone,
  markAllDone
} from "../../redux/todos/actionsCreators";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo, markDone, markAllDone })(
  Todo
);
