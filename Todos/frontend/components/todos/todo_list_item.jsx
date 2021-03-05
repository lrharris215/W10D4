import React from "react";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //     title: this.props.todo.title,
    //     body: this.props.todo.body,
    //     done: this.props.todo.done
    // }

    this.toggleDone = this.toggleDone.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  toggleDone(e) {
    e.preventDefault();
    let newTodo = this.props.todo;
    newTodo.done = !this.props.todo.done;
    this.props.receiveTodo(newTodo);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    let doneText = "";
    this.props.todo.done ? (doneText = "Undo") : (doneText = "Done");
    return (
      <li>
        {this.props.todo.title}
        <button onClick={this.handleRemove}>Delete</button>
        <button onClick={this.toggleDone}>{doneText}</button>
      </li>
    );
  }
}
export default TodoListItem;
