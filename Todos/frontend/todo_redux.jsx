import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions";
import { receiveStep, receiveSteps, removeStep } from "./actions/step_actions";
import Root from "./components/root";
import { AllTodos, allSteps, stepsByTodoId } from "./reducers/selectors";

const preloadedState = {
  todos: {
    1: {
      id: 1,
      title: "take a shower",
      body: "and be clean",
      done: false,
    },
  },
  steps: {
    1: {
      // this is the step with id = 1
      id: 1,
      title: "walk to store",
      done: false,
      todo_id: 1,
    },
    2: {
      // this is the step with id = 2
      id: 2,
      title: "buy soap",
      done: false,
      todo_id: 1,
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore(preloadedState);

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
});
