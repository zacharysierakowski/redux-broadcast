import React from "react";

export default class Todo extends React.Component {
  state = {
    todoInput: "",
    selectedTodoIds: []
  };

  handleKeyPress = e => {
    if (e.key === "Enter" && !!e.target.value) {
      this.props.addTodo(e.target.value);
      this.setState({ todoInput: "" });
    }
  };

  handleChange = event => {
    this.setState({ todoInput: event.target.value });
  };

  markDone = () => {
    if (this.state.selectedTodoIds.length > 0) {
      this.props.markDone(this.state.selectedTodoIds);
      this.setState({ selectedTodoIds: [] });
    }
  };

  markAllDone = () => {
    this.props.markAllDone();
    this.setState({ selectedTodoIds: [] });
  };

  toggleSelectedTodo = e => {
    const currentSelectedTodoIds = this.state.selectedTodoIds;

    if (e.target.checked) {
      currentSelectedTodoIds.push(e.target.value);
    } else {
      const index = currentSelectedTodoIds.indexOf(e.target.value);
      if (index > -1) {
        currentSelectedTodoIds.splice(index, 1);
      }
    }
    this.setState({ selectedTodoIds: [...currentSelectedTodoIds] });
  };

  render() {
    const { todoInput, selectedTodoIds } = this.state;
    const { todos } = this.props;
    const todosToDo = todos.filter(todo => !todo.done);
    return (
      <div className="todolist not-done">
        <h2>TODO</h2>
        <input
          type="text"
          className="form-control add-todo"
          placeholder="Add todo"
          onKeyPress={this.handleKeyPress}
          value={todoInput}
          onChange={this.handleChange}
        />
        {!!selectedTodoIds.length && (
          <button
            id="checkAll"
            className="btn btn-success"
            onClick={this.markDone}
          >
            Mark Selected Items Done
          </button>
        )}{" "}
        {!!todosToDo.length && (
          <button
            id="checkAll"
            className="btn btn-primary"
            onClick={this.markAllDone}
          >
            Mark All Done
          </button>
        )}
        <hr />
        <ul id="sortable" className="list-unstyled">
          {todosToDo.map((todo, i) => (
            <li key={i} className="ui-state-default">
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    value={todo.id}
                    checked={selectedTodoIds.includes(todo.id)}
                    onChange={this.toggleSelectedTodo}
                  />
                  {todo.name}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
