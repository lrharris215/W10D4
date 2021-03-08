import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions";
import { receiveStep, receiveSteps, removeStep } from "./actions/step_actions";
import Root from "./components/root";
import { AllTodos, allSteps, stepsByTodoId } from "./reducers/selectors";
import { fetchTodos } from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));

  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;
  window.AllTodos = AllTodos;
  window.allSteps = allSteps;
  window.stepsByTodoId = stepsByTodoId;
  window.$ = $;
  window.fetchTodos = fetchTodos;
});
