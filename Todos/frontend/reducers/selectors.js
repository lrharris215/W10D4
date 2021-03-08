export const AllTodos = (state) => {
  return Object.values(state.todos);
};

export const allSteps = (state) => {
  return Object.values(state.steps);
};

export const stepsByTodoId = (state, todo_id) => {
  return Object.values(state.steps).filter((step) => step.todo_id === todo_id);
};
