import { createStore } from "redux";
import todosReducer from "../reducers/todos_reducer"



const configStore = (preloadedState = {}) => {
    return createStore(todosReducer, preloadedState);
}

export default configStore;