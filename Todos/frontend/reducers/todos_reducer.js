import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REMOVE_TODO,
} from "../actions/todo_actions";

const initialState = {
  6: {
    id: 6,
    title: "wasdfasdfash car",
    body: "with soap",
    done: false,
  },
  7: {
    id: 7,
    title: "wash dog",
    body: "with shasdfasdfampoo",
    done: true,
  },
};

const todosReducer = (state = {}, action) => {
  Object.freeze(state);

  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case RECEIVE_TODOS:
      for (let key in action.todos) {
        nextState[key] = action.todos[key];
      }
      return nextState;
    case REMOVE_TODO:
      if (nextState[action.todo.id]) {
        delete nextState[action.todo.id];
        return nextState;
      }

    default:
      return state;
  }
};
export default todosReducer;
