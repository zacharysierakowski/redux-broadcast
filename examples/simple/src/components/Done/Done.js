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
            <button className="remove-item btn btn-default btn-xs pull-right">
              <span
                className="glyphicon glyphicon-remove"
                onClick={() => removeTodo(todo.id)}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Done;
