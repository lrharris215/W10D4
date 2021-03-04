import React from "react";
import ReactDOM from "react-dom";
import configStore from "./store/store";
import {receiveTodo, receiveTodos} from "./actions/todo_actions"

function Root () {
    return (
        <div>
        <h1>Todos App</h1>
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root />, document.getElementById('main'))
    const store = configStore();
    window.store = store;
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.todos = {
        1: {
            id: 1,
            title: 'wash car',
            body: 'with soap',
            done: false
        },
        2: {
            id: 2,
            title: 'wash dog',
            body: 'with shampoo',
            done: true
        },
    };
});

