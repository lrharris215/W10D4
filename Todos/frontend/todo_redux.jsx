import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import { receiveTodo, receiveTodos, removeTodo } from "./actions/todo_actions";
import { receiveStep, receiveSteps, removeStep } from "./actions/step_actions";

function Root() {
  return (
    <div>
      <h1>Todos App</h1>
    </div>
  );
}

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
  ReactDOM.render(<Root />, document.getElementById("main"));
  const store = configureStore(preloadedState);
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.removeTodo = removeTodo;
  window.receiveStep = receiveStep;
  window.receiveSteps = receiveSteps;
  window.removeStep = removeStep;
});
