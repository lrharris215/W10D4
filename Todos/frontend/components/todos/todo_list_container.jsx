import { connect } from 'react-redux';
import TodoList from './todo_list';
import { AllTodos } from "../../reducers/selectors"
import { receiveTodo, receiveTodos, removeTodo, fetchTodos} from "../../actions/todo_actions"

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
        fetchTodos: () => {
            return dispatch(fetchTodos())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)