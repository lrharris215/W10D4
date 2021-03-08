import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from "./todo_form";
import { render } from "react-dom";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <h3>All Todos!</h3>
        <ul>
          {this.props.todos.map((todo) => {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                removeTodo={this.props.removeTodo}
                receiveTodo={this.props.receiveTodo}
              />
            );
          })}
        </ul>
        <TodoForm
          receiveTodo={this.props.receiveTodo}
          createTodo={this.props.createTodo}
        />
      </div>
    );
  }
}
export default TodoList;
