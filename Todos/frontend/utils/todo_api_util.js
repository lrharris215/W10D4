export const fetchTodos = () => {
  return $.ajax({
    method: "GET",
    url: "/api/todos",
  });
};

export const createTodoAJAX = (todo) => {
  return $.ajax({
    method: "POST",
    url: "api/todos",
    data: {
      todo: todo,
    },
  });
};
