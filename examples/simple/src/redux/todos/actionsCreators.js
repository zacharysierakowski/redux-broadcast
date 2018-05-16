import shortid from "shortid";
import { ADD_TODO, MARK_DONE, REMOVE_TODO } from "./actions";

export const addTodo = name => ({
  type: ADD_TODO,
  id: shortid.generate(),
  name,
  broadcast: true
});

export const removeTodo = id => (dispatch, getState) => {
  const { todos } = getState();
  const index = todos.findIndex(todo => todo.id === id);
  dispatch({
    type: REMOVE_TODO,
    index,
    broadcast: true
  });
};

export const markDone = doneIds => (dispatch, getState) => {
  const { todos } = getState();

  const newTodos = [
    ...todos.map(todo => {
      if (doneIds.includes(todo.id)) {
        return {
          id: todo.id,
          name: todo.name,
          done: true
        };
      }
      return todo;
    })
  ];
  dispatch({
    type: MARK_DONE,
    todos: newTodos,
    broadcast: true
  });
};

export const markAllDone = () => (dispatch, getState) => {
  const { todos } = getState();

  const newTodos = [
    ...todos.map(todo => {
      return {
        id: todo.id,
        name: todo.name,
        done: true
      };
    })
  ];
  dispatch({
    type: MARK_DONE,
    todos: newTodos,
    broadcast: true
  });
};
