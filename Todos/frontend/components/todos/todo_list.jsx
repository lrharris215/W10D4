import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";

export const todoList = (props) => {
  return (
    <div>
      <h3>All Todos!</h3>
      <ul>
        {props.todos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              todo={todo}
              removeTodo={props.removeTodo}
              receiveTodo={props.receiveTodo}
            />
          );
        })}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo} />
    </div>
  );
};
