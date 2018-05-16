import React from "react";

const Done = props => {
  const { todos, removeTodo } = props;
  return (
    <div className="todolist">
      <h2>DONE</h2>
      <ul id="done-items" className="list-unstyled">
        {todos.filter(todo => todo.done).map((todo, i) => (
          <li key={i}>
            {todo.name}{" "}
            <button
              className="remove-item btn btn-default btn-xs pull-right"
              onClick={() => removeTodo(todo.id)}
            >
              <span className="glyphicon glyphicon-remove" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Done;
