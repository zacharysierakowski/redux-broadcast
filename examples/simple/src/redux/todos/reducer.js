import { ADD_TODO, MARK_DONE, REMOVE_TODO } from "./actions";

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          done: false
        }
      ];
    case REMOVE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case MARK_DONE:
      return action.todos;
    default:
      return state;
  }
};

export default todos;
