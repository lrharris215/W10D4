import { connect } from 'react-redux';
import {todoList} from './todo_list';
import { AllTodos } from "../../reducers/selectors"
import { receiveTodo, receiveTodos, removeTodo} from "../../actions/todo_actions"

const mapStateToProps = (state) => {
    return ({
        todos: AllTodos(state),
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveTodo: (todo) => {
            return dispatch(receiveTodo(todo));
        },
        receiveTodos: (todos) => {
            return dispatch(receiveTodos(todos));
        },
        removeTodo: (todo) => {
            return dispatch(removeTodo(todo))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList)